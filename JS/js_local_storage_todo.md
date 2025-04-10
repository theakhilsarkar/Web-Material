

# 📘 JavaScript Local Storage & To-Do App Guide

## 🔹 What is JSON?

**JSON (JavaScript Object Notation)** is a lightweight data format used to store and transfer data. It's widely used for APIs, local storage, etc.

### ✅ JSON Example:
```json
{
  "name": "Raman",
  "age": 19,
  "std": 12,
  "phone": 9825486060,
  "grade": "A"
}
```

### ➕ JSON can store:
- Objects
- Arrays
- Strings, Numbers, Boolean

---

## 🔹 What is Local Storage?

🧠 **Local Storage** allows you to store data in the browser — even after the browser is closed.

### ✅ Features:
- Stores data in **key-value** pairs.
- Stores up to **5 MB** per domain.
- Only stores **string** data.
- Use `JSON.stringify()` to store objects/arrays.
- Use `JSON.parse()` to retrieve them as objects/arrays.

---

## 🔹 Local Storage Methods:

| Method | Description |
|--------|-------------|
| `localStorage.setItem(key, value)` | Store data |
| `localStorage.getItem(key)` | Retrieve data |
| `localStorage.removeItem(key)` | Delete specific key |
| `localStorage.clear()` | Delete all local storage |

---

## 💻 Practical: To-Do App using Local Storage

### 🧾 HTML (index.html)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>To-Do App</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="main">
    <h2>📝 To-Do List</h2>
    <input type="text" id="input" placeholder="Enter task">
    <button id="button">Add Task</button>
    <div class="list"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

---

### 🎨 CSS (style.css)
```css
body {
  font-family: Arial;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  padding: 30px;
}

.main {
  background: white;
  padding: 30px;
  border-radius: 10px;
  width: 400px;
  box-shadow: 0 0 10px gray;
}

input {
  width: 70%;
  padding: 10px;
  margin-bottom: 10px;
}

button {
  padding: 10px 15px;
  background: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
}

.list .row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 8px;
  background: #eee;
  border-radius: 5px;
}

.row p {
  margin: 0;
}

.btn {
  margin-left: 10px;
  background: #28a745;
  padding: 5px 10px;
}

#deleteId {
  background: #dc3545;
}
```

---

### ⚙ JavaScript (script.js)
```js
const input = document.getElementById("input");  // Get input box
const button = document.getElementById("button");  // Get Add button
const list = document.querySelector(".main .list"); // Get the container to show list
let todos = JSON.parse(localStorage.getItem("todos")) || []; // Get data from local storage if available
let isEdit = false;
let editIndex = 0;

// 🔄 Read and Display Tasks
function readTask() {
  list.innerHTML = ""; // Clear existing list
  todos.forEach((todo, index) => {
    const p = document.createElement("p");
    p.textContent = todo;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn";
    deleteBtn.id = "deleteId";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(index); // Call delete on click

    const editBtn = document.createElement("button");
    editBtn.className = "btn";
    editBtn.id = "editId";
    editBtn.textContent = "Edit";
    editBtn.onclick = () => updateTask(index); // Call edit on click

    const div = document.createElement("div");
    div.className = "row";
    div.appendChild(p);
    div.appendChild(deleteBtn);
    div.appendChild(editBtn);

    list.appendChild(div); // Add row to list
  });
}

// 🧽 Clear Input + Add Task to Array
function addTask() {
  const value = input.value;
  todos.push(value); // Push task into array
  localStorage.setItem("todos", JSON.stringify(todos)); // Save to local storage
  input.value = ""; // Clear input field
  readTask(); // Refresh list
}

// 🗑 Delete Task
function deleteTask(index) {
  todos.splice(index, 1); // Remove from array
  localStorage.setItem("todos", JSON.stringify(todos)); // Update local storage
  readTask(); // Refresh list
}

// ✏ Edit Task
function updateTask(index) {
  input.value = todos[index]; // Show selected task in input
  isEdit = true;
  editIndex = index;
}

// ➕ Add or Update Task on Button Click
button.addEventListener("click", function () {
  if (isEdit) {
    todos[editIndex] = input.value; // Update task
    isEdit = false;
  } else {
    addTask(); // Add new task
  }
  localStorage.setItem("todos", JSON.stringify(todos)); // Save changes
  input.value = "";
  readTask(); // Refresh
});

readTask(); // Load tasks initially
```

---

## 🎯 Learning Outcomes

✅ Understand how JSON works  
✅ Use localStorage to save and load tasks  
✅ Perform CRUD operations:  
- Create  
- Read  
- Update  
- Delete  

---

## 🧩 Use Cases for Local Storage

- Todo App  
- Notes App  
- Quiz Score Tracker  
- Light/Dark Theme Toggle  
- Form Data Saving

---

## 🧰 Most Used JSON & Storage Methods

| Method | Use |
|--------|-----|
| `JSON.stringify()` | Convert JSON to string |
| `JSON.parse()` | Convert string to JSON |
| `localStorage.setItem()` | Store item |
| `localStorage.getItem()` | Retrieve item |
| `localStorage.removeItem()` | Remove item |
| `localStorage.clear()` | Clear all items |

---

## 🚀 Bonus Tip

👉 Clear all local storage:
```js
localStorage.clear();
```
