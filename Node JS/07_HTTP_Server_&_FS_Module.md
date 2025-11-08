
# 🚀 Node.js HTTP Server + File System (FS) Practical Guide

## 🧩 Overview

The `http` module allows Node.js to act as a **web server**, while the `fs` (File System) module enables **reading, writing, and managing files** on your system.

When combined, they let you:

* Serve files like HTML, CSS, or JSON
* Store or update data received from users
* Create APIs without needing any external frameworks

---

## ⚙️ 1️⃣ Understanding How an HTTP Server Works

When you create a Node.js server:

1. It **listens** on a port (like 3000)
2. When a **client (browser)** sends a request
3. The server **processes the request**
4. It sends a **response** (HTML, JSON, or text)

### 🧠 Request-Response Flow:

```
Client  →  Server (request received)
Server  →  Client (response sent)
```

---

## 🧩 2️⃣ Basic HTTP Server Example

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Boss! 🚀 Your HTTP server is live!");
});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

✅ Output:
Open browser → `http://localhost:3000`
You’ll see:

```
Hello Boss! 🚀 Your HTTP server is live!
```

---

## 🧠 3️⃣ How HTTP Server Works Internally

| Step | What Happens            | Example                                 |
| ---- | ----------------------- | --------------------------------------- |
| 1    | Server starts listening | `server.listen(3000)`                   |
| 2    | Request received        | `req.url`, `req.method`                 |
| 3    | Process request         | You write logic for routing, data, etc. |
| 4    | Send response           | `res.write()`, `res.end()`              |
| 5    | Close request           | Server waits for next request           |

---

## 💡 4️⃣ Adding Routes (Simple Routing)

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("🏠 Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ℹ️ About Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("❌ Page Not Found");
  }
});

server.listen(4000, () => console.log("Server running on http://localhost:4000"));
```

✅ Try visiting `/`, `/about`, and any random path.

---

## 📂 5️⃣ Using FS Module with HTTP Server

You can read and send HTML or JSON files as responses.
This makes your server **dynamic** — capable of serving real pages.

### Example:

```js
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./index.html", (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(5000, () => console.log("Server running on http://localhost:5000"));
```

✅ When you open your browser, Node serves your **index.html** file directly!

---

## 🧱 6️⃣ Real-Life Project: Mini Content Management Server

Let’s build a practical mini project combining:

* `http` module for server
* `fs` module for file management
* `path` for handling file locations

---

### 🎯 Project Goal

Create a **Node.js HTTP server** that allows you to:

1. Read a list of notes (from `notes.json`)
2. Add a new note
3. Delete a note by ID

---

### 📁 Project Structure

```
node_project/
│
├── app.js
├── data/
│   └── notes.json
```

**notes.json**

```json
[
  { "id": 1, "title": "Learn Node.js", "content": "Start with HTTP module" },
  { "id": 2, "title": "Practice FS Module", "content": "File operations are powerful" }
]
```

---

### ⚙️ app.js Code

```js
const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "data", "notes.json");

const server = http.createServer((req, res) => {
  if (req.url === "/notes" && req.method === "GET") {
    // Read and send all notes
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Internal Server Error" }));
      }
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(data);
    });
  }

  else if (req.url === "/add" && req.method === "POST") {
    // Add new note
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const newNote = JSON.parse(body);
      fs.readFile(filePath, (err, data) => {
        const notes = JSON.parse(data);
        newNote.id = notes.length + 1;
        notes.push(newNote);
        fs.writeFile(filePath, JSON.stringify(notes, null, 2), err => {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Note added successfully!" }));
        });
      });
    });
  }

  else if (req.url.startsWith("/delete/") && req.method === "DELETE") {
    // Delete note by ID
    const id = parseInt(req.url.split("/")[2]);
    fs.readFile(filePath, (err, data) => {
      const notes = JSON.parse(data);
      const updatedNotes = notes.filter(note => note.id !== id);
      fs.writeFile(filePath, JSON.stringify(updatedNotes, null, 2), err => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: `Note with ID ${id} deleted!` }));
      });
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(7000, () => console.log("Server running on http://localhost:7000"));
```

---

### 🧪 How to Test

* **GET /notes** → Get all notes
* **POST /add** → Add a new note
  Example body:

  ```json
  {
    "title": "New Task",
    "content": "Learn Node.js Routing"
  }
  ```
* **DELETE /delete/2** → Delete note with ID = 2

---

### 🧠 What You Learned

| Concept                             | Description              |
| ----------------------------------- | ------------------------ |
| `http.createServer()`               | Creates a backend server |
| `req.url`                           | Detects route            |
| `req.method`                        | Detects request type     |
| `fs.readFile()`                     | Reads data from file     |
| `fs.writeFile()`                    | Writes data to file      |
| `JSON.parse()` / `JSON.stringify()` | Handles JSON format      |
| `path.join()`                       | Safely builds file paths |

---

### ⚡ Real-Life Use Case

This same pattern is used in:

* Blog content management systems
* File-based local databases
* Simple backend prototypes without MongoDB/MySQL
