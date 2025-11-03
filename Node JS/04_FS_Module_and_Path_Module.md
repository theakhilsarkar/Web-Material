
# 📂 Node.js File System (fs) & Path Handling

## 🧠 Overview

Working with **files and folders** is a common need in any backend system — for reading configs, saving user uploads, logs, etc.

Node.js gives us two powerful core modules to handle this easily:

* **`fs`** → File System operations
* **`path`** → File and directory path management

Let’s explore both step by step. 👇

---

## 🧩 1️⃣ File System Module — `fs`

The **File System (`fs`) module** lets you interact with your computer’s files —
you can **create**, **read**, **update**, **delete**, and **rename** files.

### 🔹 Importing fs

```js
const fs = require("fs");
```

You can use two types of methods:

* **Synchronous (Blocking)** → ends with `Sync`
* **Asynchronous (Non-blocking)** → uses callbacks

---

## ✏️ 2️⃣ Writing Files

### ➤ Synchronous (Blocking)

```js
fs.writeFileSync("message.txt", "Hello, Boss!");
console.log("File created successfully!");
```

✅ This creates a file `message.txt` with text inside.
It **blocks** other code until the writing finishes.

---

### ➤ Asynchronous (Non-Blocking)

```js
fs.writeFile("note.txt", "This is async text.", (err) => {
  if (err) throw err;
  console.log("File created asynchronously!");
});
```

✅ Doesn’t block the program — continues running while the file is written in the background.

---

## 📖 3️⃣ Reading Files

### ➤ Synchronous

```js
const data = fs.readFileSync("message.txt", "utf8");
console.log(data);
```

### ➤ Asynchronous

```js
fs.readFile("note.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

🧠 **Tip:** Always use the async version in real applications — it’s faster and scalable.

---

## 🧮 4️⃣ Appending (Adding Text)

```js
fs.appendFileSync("message.txt", "\nLearning Node.js File System!");
```

✅ Adds more content at the end of an existing file.

---

## 🗑️ 5️⃣ Deleting Files

```js
fs.unlinkSync("note.txt");
console.log("File deleted!");
```

---

## 🏷️ 6️⃣ Renaming Files

```js
fs.renameSync("message.txt", "newMessage.txt");
console.log("File renamed!");
```

---

## 📂 7️⃣ Working with Directories (Folders)

### ➤ Create a Folder

```js
fs.mkdirSync("myFolder");
```

### ➤ Create a File Inside It

```js
fs.writeFileSync("myFolder/info.txt", "Folder created successfully!");
```

### ➤ Read Folder Content

```js
const files = fs.readdirSync("myFolder");
console.log(files);
```

### ➤ Delete File + Folder

```js
fs.unlinkSync("myFolder/info.txt");
fs.rmdirSync("myFolder");
```

---

## ⚙️ 8️⃣ Real Example — Mini File Manager

```js
const fs = require("fs");

if (!fs.existsSync("data")) {
  fs.mkdirSync("data");
}

fs.writeFileSync("data/info.txt", "Boss’s File System Example");
const content = fs.readFileSync("data/info.txt", "utf8");
console.log("File Content:", content);

fs.renameSync("data/info.txt", "data/updated.txt");
fs.appendFileSync("data/updated.txt", "\nFile updated successfully!");

console.log("All files:", fs.readdirSync("data"));
```

✅ Output:

```
File Content: Boss’s File System Example
All files: [ 'updated.txt' ]
```

---

## 🗺️ 9️⃣ Path Module — `path`

The **Path Module** helps you work with file and directory paths safely —
important when your code runs on **different operating systems** (Windows, macOS, Linux).

### 🔹 Importing path

```js
const path = require("path");
```

---

### 📍 Common Path Methods

| Method                | Description            | Example                                        |
| --------------------- | ---------------------- | ---------------------------------------------- |
| **`path.basename()`** | Returns file name      | `path.basename(__filename)` → `"app.js"`       |
| **`path.dirname()`**  | Returns directory path | `path.dirname(__filename)`                     |
| **`path.extname()`**  | Returns file extension | `path.extname("index.html")` → `.html`         |
| **`path.join()`**     | Joins paths safely     | `path.join(__dirname, "public", "index.html")` |
| **`path.resolve()`**  | Returns absolute path  | `path.resolve("app.js")`                       |

---

### 🧮 Example: Using `path` with `fs`

```js
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "example.txt");

fs.writeFileSync(filePath, "This file was created using path + fs!");
console.log("File Path:", filePath);
```

✅ Output Example:

```
File Path: /Users/Boss/Projects/data/example.txt
```

---

## 🧠  🔟 Key Difference Between `fs` and `path`

| Feature         | `fs`                      | `path`                         |
| --------------- | ------------------------- | ------------------------------ |
| **Purpose**     | Manage files and folders  | Manage file and folder *paths* |
| **Type**        | File System API           | Path Utility API               |
| **Example Use** | Create, read, delete file | Join, resolve, get file name   |

---

## 🧾 Summary

| Concept                         | Description                                             |
| ------------------------------- | ------------------------------------------------------- |
| **`fs` Module**                 | Used for file operations                                |
| **Synchronous vs Asynchronous** | Blocking vs Non-blocking methods                        |
| **`path` Module**               | Used for handling file paths safely                     |
| **Best Practice**               | Always prefer async methods for real-world apps         |
| **Common Operations**           | Create, Read, Update, Delete, Rename, Folder management |

---

## 💡 Quick Real-Life Example

👉 **Scenario:** You want to store logs for your app.

```js
const fs = require("fs");
const path = require("path");

const logDir = path.join(__dirname, "logs");
if (!fs.existsSync(logDir)) fs.mkdirSync(logDir);

const logFile = path.join(logDir, "app.log");
fs.appendFileSync(logFile, "Server started at " + new Date() + "\n");
```

✅ Output in `app.log`:

```
Server started at Sat Nov 02 2025 21:45:10 GMT+0530 (India Standard Time)
```

---

## 🧾 Summary Recap

| Topic                | Key Point                          |
| -------------------- | ---------------------------------- |
| File Operations      | Create, Read, Update, Delete files |
| Directory Operations | Create and remove folders          |
| Synchronous          | Slower, blocks code                |
| Asynchronous         | Faster, non-blocking               |
| Path Module          | Manages cross-platform paths       |
