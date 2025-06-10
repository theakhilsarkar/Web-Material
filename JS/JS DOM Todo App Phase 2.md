# ✅ ToDo App – Phase 2 📋✨

> **Features**: Add ➕, Delete ❌, Edit ✏️ Todos — All using DOM and JavaScript!

---

## 📚 What You’ll Learn

In this phase, you will learn:

| 🔧 Feature   | 💡 Description                           |
| ------------ | ---------------------------------------- |
| Create       | Add new todo items to the list           |
| Read         | View all current todos                   |
| Update/Edit  | Edit an existing todo item               |
| Delete       | Remove a todo from the list              |
| DOM Handling | Create, read, and manipulate elements    |
| Events       | Handle button click events (Edit/Delete) |

---

## 🧩 Used DOM Methods

| Method                       | Use Case                                         |
| ---------------------------- | ------------------------------------------------ |
| `document.getElementById()`  | Selecting input/button/output HTML elements      |
| `document.createElement()`   | Dynamically creating elements (`div`, `p`, etc.) |
| `element.textContent`        | Setting the text inside an element               |
| `element.appendChild()`      | Adding one element inside another                |
| `element.className`          | Adding Bootstrap classes for styling             |
| `element.addEventListener()` | Handling `click` events on buttons               |

---

## 🧠 Logic Breakdown

### 🔁 `dissplayTodos()` – Display all todos

```js
function dissplayTodos() {
    outputBox.innerHTML = ""; // Clear previous content

    todos.forEach((todo, index) => {
        const div = document.createElement("div");      // Wrap each todo row
        const btnDiv = document.createElement("div");   // Wrap buttons
        const p = document.createElement("p");          // Display todo text
        const delButton = document.createElement("button"); // Delete
        const editButton = document.createElement("button"); // Edit

        div.className = "d-flex justify-content-between my-3";
        delButton.className = "btn btn-danger mx-2";
        editButton.className = "btn btn-warning";

        p.textContent = todo;
        delButton.textContent = "Delete";
        editButton.textContent = "Edit";

        delButton.addEventListener('click', () => {
            deleteTodo(index); // Call delete
        });

        editButton.addEventListener('click', () => {
            editTodo(index); // Call edit
        });

        btnDiv.appendChild(editButton);
        btnDiv.appendChild(delButton);

        div.appendChild(p);
        div.appendChild(btnDiv);

        outputBox.appendChild(div);
    });
}
```

---

### 🗑️ `deleteTodo(index)` – Remove a todo

```js
function deleteTodo(index) {
    todos.splice(index, 1); // Remove from array
    dissplayTodos();        // Refresh UI
}
```

---

### 📝 `editTodo(index)` – Edit a todo

```js
function editTodo(index) {
    input.value = todos[index]; // Show text in input
    todos.splice(index, 1);     // Remove it temporarily
}
```

---

### ➕ Add New Todo – Event Listener

```js
button.addEventListener('click', () => {
    const value = input.value;
    todos.push(value);     // Add to array
    dissplayTodos();       // Refresh UI
});
```

---

### 🚀 Auto Display on Load

```js
dissplayTodos();
```

---

## 🧪 Final Code Summary

> ✅ Complete **CRUD (Create, Read, Update, Delete)** ToDo logic using just JavaScript and DOM.

```js
const input = document.getElementById("input");
const button = document.getElementById("button");
const outputBox = document.getElementById("output-box");

let todos = [];

function dissplayTodos() {
    outputBox.innerHTML = "";

    todos.forEach((todo, index) => {
        const div = document.createElement("div");
        const btnDiv = document.createElement("div");
        const p = document.createElement("p");
        const delButton = document.createElement("button");
        const editButton = document.createElement("button");

        div.className = "d-flex justify-content-between my-3";
        delButton.className = "btn btn-danger mx-2";
        editButton.className = "btn btn-warning";

        p.textContent = todo;
        delButton.textContent = "Delete";
        editButton.textContent = "Edit";

        delButton.addEventListener('click', () => {
            deleteTodo(index);
        });

        editButton.addEventListener('click', () => {
            editTodo(index);
        });

        btnDiv.appendChild(editButton);
        btnDiv.appendChild(delButton);

        div.appendChild(p);
        div.appendChild(btnDiv);

        outputBox.appendChild(div);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    dissplayTodos();
}

function editTodo(index) {
    input.value = todos[index];
    todos.splice(index, 1);
}

button.addEventListener('click', () => {
    const value = input.value;
    todos.push(value);
    dissplayTodos();
});

dissplayTodos();
```
