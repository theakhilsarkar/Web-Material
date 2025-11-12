# 🚀 Express.js Introduction

## 📘 Introduction

**Express.js** is a **fast, unopinionated, and minimalist web framework** for **Node.js**.
It helps developers build **web servers**, **REST APIs**, and **backend applications** easily — with less code and better structure.

---

## ⚙️ What is Express.js?

Express.js is a **framework built on top of Node.js** that simplifies the process of:

* Handling HTTP requests and responses
* Managing routes (URLs)
* Serving HTML, JSON, or files
* Working with middleware (functions that process requests)

It’s like a **smart layer** that sits on top of the Node.js `http` module to make server development faster and easier.

---

## 💡 Why Should We Use Express.js?

| Without Express                                                | With Express                                          |
| -------------------------------------------------------------- | ----------------------------------------------------- |
| You have to handle routes manually using `http.createServer()` | Express provides `app.get()`, `app.post()`, etc.      |
| You need to handle content type, status codes manually         | Express automates it                                  |
| No clear structure for routes and middleware                   | Express gives organized routing and middleware system |
| Hard to integrate with frontend or database                    | Express integrates easily with MongoDB, React, etc.   |

✅ **In short:** Express = Node.js made simple, fast, and developer-friendly.

---

## 🔧 Installing Express

### Step 1 — Initialize Node Project

```bash
npm init -y
```

### Step 2 — Install Express

```bash
npm install express
```

### Step 3 — Verify in `package.json`

```json
"dependencies": {
  "express": "^4.21.2"
}
```

---

## 🧩 Basic Express Server Example

```js
// app.js
const express = require("express");
const app = express();

// Route
app.get("/", (req, res) => {
  res.send("Welcome to Express.js Server 🚀");
});

// Start Server
app.listen(5000, () => {
  console.log("Server is running at http://localhost:5000");
});
```

✅ Open your browser → `http://localhost:5000`

---

## 🌐 Express Routing

Routing means **deciding how your server responds to different URLs**.

```js
app.get("/", (req, res) => res.send("Home Page"));
app.get("/about", (req, res) => res.send("About Page"));
app.get("/contact", (req, res) => res.send("Contact Page"));
```

### Handling Other Methods

```js
app.post("/submit", (req, res) => res.send("Data Submitted"));
app.put("/update", (req, res) => res.send("Data Updated"));
app.delete("/delete", (req, res) => res.send("Data Deleted"));
```

---

## 🧠 Middleware in Express

Middleware are functions that run **between the request and the response**.

Example:

```js
app.use((req, res, next) => {
  console.log(`Request received at: ${new Date()}`);
  next(); // Pass control to next middleware or route
});
```

💡 **Use cases:**

* Logging requests
* Parsing JSON data
* Authentication checks

---

## 📄 Serving JSON Response

```js
app.get("/api/user", (req, res) => {
  res.json({ name: "Boss", role: "Trainer", city: "Surat" });
});
```

---

## 📁 Serving Static Files

If you have HTML, CSS, or JS files to serve:

```js
app.use(express.static("public"));
```

Now everything in the `public` folder can be accessed via the browser.

---

## 🧱 Handling 404 Error Pages

```js
app.use((req, res) => {
  res.status(404).send("404 - Page Not Found");
});
```

---

## 🔌 Express with `fs` Module Example

```js
const express = require("express");
const fs = require("fs");
const app = express();

app.get("/log", (req, res) => {
  const log = `Visited at ${new Date()}\n`;
  fs.appendFileSync("server.log", log);
  res.send("Log updated successfully");
});

app.listen(5000, () => console.log("Server running on 5000"));
```

✅ Each time you visit `/log`, a timestamp will be saved in `server.log`.

---

## ⚙️ Real-Life Use Cases

* REST API development
* Authentication systems (JWT, Passport)
* Chat or real-time applications
* File upload and form handling
* Integration with frontend (React, Angular, Vue)

---

## 🚀 Advantages of Express.js

- ✅ Easy and fast to set up
- ✅ Large ecosystem (middleware, plugins)
- ✅ Works well with databases like MongoDB
- ✅ Handles routing and middleware efficiently
- ✅ Highly scalable

---

## ⚠️ Disadvantages

- ❌ Not suitable for CPU-heavy tasks
- ❌ Less structured for very large apps (need extra setup)
- ❌ Need external libraries for advanced features (security, validation)
