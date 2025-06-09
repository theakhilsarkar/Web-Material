# ✅ To-Do List App – Phase 1 Documentation

> ✨ *Create | Display | Manage* To-Dos using JavaScript DOM and Bootstrap

---

## 📌 Project Overview

This project is a **To-Do List App** built using:

* 🧠 **Vanilla JavaScript** (No frameworks)
* 🎨 **Bootstrap 5** for styling
* 📄 **HTML + JS** integration
* 🖱️ **DOM Manipulation** to create, display, and manage dynamic tasks

---

## 🎯 Features Covered in Phase 1

| Feature           | Description                              |
| ----------------- | ---------------------------------------- |
| ✅ Add Task        | User types and adds to the list          |
| ✅ Display Tasks   | All tasks shown dynamically              |
| ✅ Preloaded Tasks | List starts with some default to-dos     |
| 🔜 Delete Tasks   | Coming in next phase (button exists now) |

---

## 🧩 Folder Structure

```
📁 todo-app
├── 📄 index.html
├── 📄 script.js
└── 🔗 Bootstrap CDN
```

---

## 📜 HTML Code (index.html)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>To-Do App</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <!-- Input Box -->
    <div class="container d-flex w-25 my-3" id="input-box">
      <input
        class="form-control"
        type="text"
        id="input"
        placeholder="Enter todo..."
      />
      <button class="btn btn-primary mx-3" id="button">Add</button>
    </div>

    <!-- Output Box -->
    <div class="container w-25 my-3" id="output-box"></div>

    <!-- Script -->
    <script src="script.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/js/bootstrap.bundle.min.js"></script>
  </body>
</html>
```

---

## 💻 JavaScript Code (script.js)

```js
const inputBox = document.getElementById("input-box");
const input = document.getElementById("input");
const button = document.getElementById("button");
const outputBox = document.getElementById("output-box");

// Preloaded todos
let todos = ["Wake up 5AM", "Workout", "Read Books", "Breakfast"];

// Function to show all todos
function dissplayTodos() {
    outputBox.innerHTML = ""; // clear old todos

    todos.forEach((todo, index) => {
        const div = document.createElement("div");
        const p = document.createElement("p");
        const delButton = document.createElement("button");

        div.className = "d-flex justify-content-between my-3";
        delButton.className = "btn btn-danger";

        p.textContent = todo;
        delButton.textContent = "Delete";

        div.appendChild(p);
        div.appendChild(delButton);
        outputBox.appendChild(div);
    });
}

// Add button click event
button.addEventListener('click', () => {
    const value = input.value;
    todos.push(value); // add new todo
    dissplayTodos();   // refresh UI
});

// Initial render
dissplayTodos();
```

---

## 🧠 DOM Methods Used (Explained Simply)

| Method               | Description                                         |
| -------------------- | --------------------------------------------------- |
| `getElementById()`   | Selects elements by ID                              |
| `createElement()`    | Creates new HTML elements like `div`, `p`, `button` |
| `textContent`        | Inserts text inside the element                     |
| `appendChild()`      | Adds child elements to a parent element             |
| `innerHTML = ""`     | Clears old content before showing new data          |
| `addEventListener()` | Listens to user actions like `click`                |

---

## 🔎 What Happens Step-by-Step?

1. 👀 User types a task in input field
2. 🖱️ Clicks on `Add` button
3. 🧠 JS `push()`es the task to the array
4. 🔄 UI refreshes using `dissplayTodos()` function
5. 🪄 All tasks (old + new) are shown on screen

---

## 🔜 Coming in Phase 2

* ✅ Functional **Delete** buttons for each task
* ✅ Input **validation** (ignore empty tasks)
* ✅ Keyboard support (press enter to add)
* ✅ Optional: Save todos to **localStorage**

---

## 📚 Quiz Questions

### Q1. Which function is used to create a new HTML tag in JS?

* A. `createHtml()`
* B. `createElement()` ✅
* C. `newElement()`
* D. `makeTag()`

---

### Q2. What does `textContent` do in JavaScript?

* A. Gets the value of inputs
* B. Adds inline CSS
* C. Sets plain text content ✅
* D. Inserts HTML tags

---

### Q3. Why do we use `innerHTML = ""` before looping todos?

* A. To reset input value
* B. To clear screen before adding new elements ✅
* C. To delete array
* D. To hide errors

---

### Q4. What is the role of `appendChild()`?

* A. Append JS files
* B. Add child tags inside a parent ✅
* C. Remove child
* D. Loop child elements

---

## ✅ Conclusion

You’ve successfully completed **Phase 1** of your To-Do App 🚀.
You can now dynamically:

* Add tasks
* Display them with proper UI
* Prepare for deletion feature in Phase 2

👏 Great work using only **HTML + Bootstrap + Pure JavaScript DOM**!
