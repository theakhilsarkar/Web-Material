# 📌 **What is JSON?**  
**JSON (JavaScript Object Notation)** is a lightweight data format used for storing and exchanging data. It is easy for humans to read and write and easy for machines to parse and generate.  

✅ **Key Features:**  
- **Lightweight** and easy to use  
- **Uses key-value pairs** (like JavaScript objects)  
- **Supports nested structures** (arrays and objects)  
- **Widely used** in APIs, configurations, and databases  

✅ **JSON Syntax Example:**  
```json
{
    "name": "John Doe",
    "age": 25,
    "city": "New York",
    "skills": ["JavaScript", "HTML", "CSS"]
}
```

---

# 📌 **Local Storage in JavaScript**  
Local Storage is a **built-in feature in browsers** that allows storing data **persistently** (even after the page reloads).  

### ✅ **Storing Data in Local Storage**  
To store data in Local Storage, use `localStorage.setItem(key, value)`.  
**Example:**  
```javascript
let user = { name: "Alice", age: 30 }; // Create an object

localStorage.setItem("userData", JSON.stringify(user)); // Convert object to JSON string and store
```

### ✅ **Fetching Data from Local Storage**  
To retrieve stored data, use `localStorage.getItem(key)`.  
**Example:**  
```javascript
let storedData = localStorage.getItem("userData"); // Get JSON string
let userObject = JSON.parse(storedData); // Convert JSON string back to object

console.log(userObject.name); // Output: Alice
console.log(userObject.age);  // Output: 30
```

### ✅ **Removing Data from Local Storage**  
To remove an item from Local Storage, use `localStorage.removeItem(key)`.  
**Example:**  
```javascript
localStorage.removeItem("userData");
```

### ✅ **Clear All Local Storage**  
To clear all stored data:  
```javascript
localStorage.clear();
```

---

# 🎯 **Practical Example: To-Do List Using Local Storage**
Let's create a simple **To-Do List App** that stores tasks using Local Storage.

### ✅ **HTML:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>To-Do List</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <h2>📋 To-Do List</h2>
    <input type="text" id="taskInput" placeholder="Enter a task">
    <button onclick="addTask()">Add Task</button>
    <ul id="taskList"></ul>

    <script>
        // Load saved tasks on page load
        $(document).ready(function () {
            let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
            savedTasks.forEach(task => $("#taskList").append(`<li>${task}</li>`));
        });

        function addTask() {
            let task = $("#taskInput").val();
            if (task) {
                let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
                tasks.push(task);
                localStorage.setItem("tasks", JSON.stringify(tasks)); // Store tasks
                $("#taskList").append(`<li>${task}</li>`);
                $("#taskInput").val(""); // Clear input field
            }
        }
    </script>
</body>
</html>
```
🔹 **What Happens?**  
✅ **Tasks are stored in Local Storage**  
✅ **Tasks remain even after page reload**  
✅ **New tasks can be added dynamically**  
