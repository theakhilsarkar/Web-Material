# 📘 Node.js — What are the Modules? and Types.

## 📦 Node.js Modules

Modules are the **building blocks** of any Node.js application.
They help you **organise your code**, **reuse logic**, and **keep your project clean and maintainable**.

---

## 🧩 What is a Module?

A **module** in Node.js is simply a **reusable block of code** that performs a specific task.

👉 Think of modules like **separate tools in a toolbox**.
Each tool (module) does one thing well — and you can use multiple tools to build something big.

---

## 🧱 Why Use Modules?

✅ To **organize your code** into smaller, logical parts
✅ To **reuse code** easily
✅ To **avoid repeating code (DRY principle)**
✅ To **share functionality** between files
✅ To **make debugging easier**

---

## ⚙️ Types of Modules in Node.js

Node.js provides three types of modules:

| Type                                  | Description                                     | Example                                    |
| ------------------------------------- | ----------------------------------------------- | ------------------------------------------ |
| **1️⃣ Core (Built-in) Modules**       | Provided by Node.js itself — no need to install | `fs`, `http`, `path`, `os`, `url`          |
| **2️⃣ Custom (User-defined) Modules** | You create these in your own files              | `./math.js`, `./utils/logger.js`           |
| **3️⃣ Third-Party Modules**           | Installed from npm                              | `express`, `mongoose`, `nodemon`, `dotenv` |

---

## 🧰 1️⃣ Core (Built-in) Modules

Node.js has many built-in modules that handle different system-level tasks.

Let’s look at a few commonly used ones 👇

### 📂 Example 1: `fs` (File System Module)

Used to **read**, **write**, **update**, or **delete** files.

```js
const fs = require("fs");

// Write to a file
fs.writeFileSync("notes.txt", "Hello, Node.js!");

// Read file content
const data = fs.readFileSync("notes.txt", "utf8");
console.log(data);

// Append more text
fs.appendFileSync("notes.txt", "\nLearning Modules in Node.js");
```

✅ Output in `notes.txt`:

```
Hello, Node.js!
Learning Modules in Node.js
```

---

### 🗺️ Example 2: `path` (Path Module)

Helps work with file and folder paths.

```js
const path = require("path");

console.log(path.basename(__filename)); // Output: app.js
console.log(path.dirname(__filename));  // Folder path
console.log(path.extname(__filename));  // Output: .js
console.log(path.join(__dirname, "public", "index.html"));
// Combines folder paths safely
```

---

### 🌐 Example 3: `http` (HTTP Module)

Used to create a simple **web server** in Node.js.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js Server!");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

✅ Open your browser → visit
👉 **[http://localhost:3000](http://localhost:3000)**
You’ll see:

```
Hello from Node.js Server!
```

🎉 You just built your first Node.js web server!

---

## 🧠 2️⃣ Custom (User-Defined) Modules

You can create your own modules to separate logic between files.

### Example:

#### ➤ File: `math.js`

```js
// Define functions
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Export them
module.exports = { add, subtract };
```

#### ➤ File: `app.js`

```js
const math = require("./math");

console.log("Addition:", math.add(10, 5));
console.log("Subtraction:", math.subtract(10, 5));
```

✅ Output:

```
Addition: 15
Subtraction: 5
```

📘 Tip:
You can export multiple values using `module.exports = {}`
and import them anywhere using `require()`.

---

## 📦 3️⃣ Third-Party Modules (npm Packages)

### 🔹 What is npm?

`npm` stands for **Node Package Manager** —
it’s a tool that comes with Node.js and lets you **install external packages** created by other developers.

### 🪄 Example: Installing and Using `chalk`

```bash
npm install chalk
```

#### app.js

```js
import chalk from 'chalk'; // IMPORTANT: Chalk 5 is ESM.

console.log(chalk.green("Success!"));
console.log(chalk.red("Error!"));
console.log(chalk.blue("Information message"));
```

✅ Output (colored text in terminal):

```
Success!   → green
Error!     → red
Information → blue
```

---

## 🧠 Behind the Scenes: The `require()` System

When you use `require("something")`, Node.js searches for the module in this order:

1. **Built-in modules** (like `fs`, `path`)
2. **Your own files** (`./filename.js`)
3. **node_modules folder** (npm packages)

---

## ⚡ Summary Table

| Concept                 | Description                                  |
| ----------------------- | -------------------------------------------- |
| **Core Modules**        | Built-in Node.js modules (no install needed) |
| **Custom Modules**      | Created by developers for reusability        |
| **Third-Party Modules** | Installed using npm                          |
| **require()**           | Used to import modules                       |
| **module.exports**      | Used to export values or functions           |

---

## 🧾 Example Folder Structure

```
my-node-app/
│
├── app.js
├── math.js
├── package.json
└── node_modules/
```

✅ `app.js` → imports `math.js`
✅ `package.json` → stores project info and dependencies
✅ `node_modules/` → holds installed npm packages

---

## 🧩 Real-World Example: Combining Modules

Let’s use multiple modules together!

```js
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(4000, () => {
  console.log("Server running on http://localhost:4000");
});
```

✅ Opens `index.html` file from your project directory and serves it in the browser.

---

## 🧾 Summary Recap

| Concept                 | Key Point                                       |
| ----------------------- | ----------------------------------------------- |
| **Modules**             | Small reusable pieces of code                   |
| **Built-in Modules**    | Provided by Node.js (no install)                |
| **Custom Modules**      | Created by you                                  |
| **Third-party Modules** | Installed using npm                             |
| **Export / Import**     | `module.exports` and `require()`                |
| **Benefits**            | Code reusability, organization, maintainability |
