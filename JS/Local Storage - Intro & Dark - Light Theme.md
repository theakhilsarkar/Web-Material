## 📝 **Local Storage + Dark/Light Theme Toggle**

### 🔸 What is Local Storage?

* **localStorage** is a browser API that stores data **persistently**.
* Data is saved in **key-value** pairs.
* Data in `localStorage` does **not** expire (until removed manually).
* Limit: **\~5MB**, string-based only.

---

### 🔸 Common localStorage Methods

| Method                             | Description       |
| ---------------------------------- | ----------------- |
| `localStorage.setItem(key, value)` | Stores a value    |
| `localStorage.getItem(key)`        | Retrieves a value |
| `localStorage.removeItem(key)`     | Deletes a key     |
| `localStorage.clear()`             | Clears all keys   |

---

## 💡 Task: Enable Dark & Light Mode Toggle with Save Feature

### ✅ Features:

* Dark/Light mode toggle.
* Save last selected theme in localStorage.
* Automatically load saved theme on page refresh.

---

## 🛠️ **Full Working Example**

### 📄 **HTML**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dark/Light Mode with LocalStorage</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      transition: background-color 0.3s ease, color 0.3s ease;
    }

    .dark-mode {
      background-color: #121212;
      color: #f1f1f1;
    }

    .light-mode {
      background-color: #ffffff;
      color: #000000;
    }

    .container {
      padding: 30px;
    }

    button {
      margin-top: 20px;
      padding: 10px 20px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Theme Toggle (Dark / Light)</h1>
    <p>This website remembers your theme choice.</p>
    <button id="toggleBtn">Toggle Theme</button>
  </div>

  <script src="theme.js"></script>
</body>
</html>
```

---

### 📜 **JavaScript – `theme.js`**

```javascript
const toggleBtn = document.getElementById("toggleBtn");

// Function to set theme
const setTheme = (theme) => {
  document.body.classList.remove("light-mode", "dark-mode");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
};

// Toggle between light and dark
toggleBtn.addEventListener("click", () => {
  const currentTheme = localStorage.getItem("theme");
  const newTheme = currentTheme === "dark-mode" ? "light-mode" : "dark-mode";
  setTheme(newTheme);
});

// Apply saved theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light-mode";
  setTheme(savedTheme);
});
```

---

## 🧠 Summary:

| Concept                | Purpose                                 |
| ---------------------- | --------------------------------------- |
| `localStorage`         | Stores theme preference permanently     |
| `setTheme()`           | Adds theme class & updates localStorage |
| `DOMContentLoaded`     | Ensures theme is applied on load        |
| `classList.add/remove` | Adds/removes appropriate CSS class      |

Here is a **basic and clear table** that summarizes all key **`localStorage` methods** with:

* ✅ Method name
* 🔧 Syntax / Use
* 💡 Use Case
* 🧪 Example

---

### 📦 **localStorage Methods – Table Summary**

| ✅ **Method**   | 🔧 **Syntax / Use**                    | 💡 **Use Case**                  | 🧪 **Example**                                |
| -------------- | -------------------------------------- | -------------------------------- | --------------------------------------------- |
| `setItem()`    | `localStorage.setItem("key", "value")` | Save data to local storage       | `localStorage.setItem("username", "John")`    |
| `getItem()`    | `localStorage.getItem("key")`          | Retrieve stored data             | `let name = localStorage.getItem("username")` |
| `removeItem()` | `localStorage.removeItem("key")`       | Delete a specific item           | `localStorage.removeItem("username")`         |
| `clear()`      | `localStorage.clear()`                 | Remove all items (clear storage) | `localStorage.clear()`                        |
| `key()`        | `localStorage.key(index)`              | Get key name by index (0-based)  | `let key = localStorage.key(0)`               |
| `length`       | `localStorage.length`                  | Get total number of stored items | `console.log(localStorage.length)`            |

---

### ✅ **Simple Explanation:**

* `setItem()` → Add/Update a value
* `getItem()` → Get a value by key
* `removeItem()` → Delete one item
* `clear()` → Delete **all** items
* `key()` → Get a key name using index
* `length` → How many items are stored
