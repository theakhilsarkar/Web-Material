

# 🌐 Building & Handling HTTP Servers in Node.js

## 🧠 Overview

The **HTTP module** in Node.js allows us to create a **web server** — without needing any external library like Express.

A web server:

* Listens for **client requests** (from browsers or apps)
* Processes the request
* Sends back a **response** (HTML, JSON, file, etc.)

---

## 🧩 1️⃣ Importing the HTTP Module

```js
const http = require("http");
```

This module lets you create servers and handle HTTP requests directly.

---

## 🧱 2️⃣ Creating a Basic Web Server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Boss! 👋 Welcome to Node.js Server.");
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
```

✅ Output:

* Visit 👉 **[http://localhost:3000](http://localhost:3000)**
* You’ll see:

  ```
  Hello Boss! 👋 Welcome to Node.js Server.
  ```

---

## 🧩 3️⃣ Understanding the `createServer()` Function

```js
http.createServer((req, res) => { ... });
```

* **req (Request):** contains data sent from the client (URL, headers, body)
* **res (Response):** used to send back data to the client

Every request triggers this callback function.

---

## 🔄 4️⃣ Handling Different Routes (Simple Routing)

You can serve **different content** based on the requested URL.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("🏠 Home Page");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("ℹ️ About Page");
  } else if (req.url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("📞 Contact Page");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("❌ Page Not Found");
  }
});

server.listen(4000, () => console.log("Server running on http://localhost:4000"));
```

✅ Try opening:

* `/` → Home Page
* `/about` → About Page
* `/contact` → Contact Page
* Anything else → 404 Page Not Found

---

## 🧠 5️⃣ Sending HTML Responses

Instead of plain text, you can send HTML content directly:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1 style="color: purple;">Welcome Boss!</h1>
    <p>This page is served using Node.js</p>
  `);
});

server.listen(5000, () => console.log("Server running on http://localhost:5000"));
```

✅ Output:
HTML page displayed in the browser.

---

## 📄 6️⃣ Serving External HTML Files

You can serve a full HTML file using the `fs` module.

```js
const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const filePath = path.join(__dirname, "index.html");

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(data);
    }
  });
});

server.listen(6000, () => console.log("Server running on http://localhost:6000"));
```

✅ This loads your local `index.html` file and serves it to the browser.

---

## ⚙️ 7️⃣ Sending JSON Data (For APIs)

Node.js servers can send JSON — useful for APIs and applications.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/api") {
    const data = {
      name: "Boss",
      role: "Trainer",
      topic: "Node.js HTTP Module",
    };

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("API route not found");
  }
});

server.listen(7000, () => console.log("Server running on http://localhost:7000"));
```

✅ Visit: **[http://localhost:7000/api](http://localhost:7000/api)**
You’ll see:

```json
{
  "name": "Boss",
  "role": "Trainer",
  "topic": "Node.js HTTP Module"
}
```

---

## 🧭 8️⃣ Request Methods — GET, POST, PUT, DELETE

You can handle different HTTP **methods** with `req.method`.

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.end("GET Request received");
  } else if (req.method === "POST") {
    res.end("POST Request received");
  } else {
    res.end("Other Request received");
  }
});

server.listen(8000, () => console.log("Server running on http://localhost:8000"));
```

✅ Try sending GET or POST requests using tools like **Postman** or **cURL**.

---

## 🧩 9️⃣ Combining URL and Method

Real-world example combining both route and method:

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/users" && req.method === "GET") {
    res.end("Fetching user list...");
  } else if (req.url === "/users" && req.method === "POST") {
    res.end("Creating new user...");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(9000, () => console.log("Server running on http://localhost:9000"));
```

---

## 💡 1️⃣0️⃣ Tips for HTTP Servers

✅ Always set correct **Content-Type** (`text/html`, `application/json`, etc.)
✅ Use **asynchronous fs methods** for better performance
✅ Avoid blocking code inside request handlers
✅ For large projects → use **Express.js** (we’ll learn soon)
✅ Use **different ports** for practice (3000, 4000, 5000, …)

---

## 🧾 Summary Table

| Concept             | Description                                      |
| ------------------- | ------------------------------------------------ |
| **HTTP Module**     | Built-in Node.js module to create servers        |
| **req / res**       | Handles incoming requests and outgoing responses |
| **Routing**         | Serve different pages using `req.url`            |
| **Response Type**   | `text`, `html`, `json`, etc.                     |
| **Ports**           | Unique numbers on which servers listen           |
| **Method Handling** | `req.method` identifies GET, POST, etc.          |

---

## 🧠 Recap Example

Here’s a simple combined version 👇

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  const response = {
    url: req.url,
    method: req.method,
    message: "Node.js Server is working perfectly, Boss!"
  };

  res.end(JSON.stringify(response));
});

server.listen(5050, () => console.log("Server running on http://localhost:5050"));
```

✅ Output (when you visit browser):

```json
{
  "url": "/",
  "method": "GET",
  "message": "Node.js Server is working perfectly, Boss!"
}
```

---

## ✅ Summary Recap

| Topic           | Key Takeaway              |
| --------------- | ------------------------- |
| Server Creation | Use `http.createServer()` |
| Request Object  | Holds URL and method      |
| Response Object | Sends output to client    |
| Routing         | Handle multiple URLs      |
| Response Types  | Text, HTML, JSON          |
| Async Behavior  | Fast and non-blocking     |
