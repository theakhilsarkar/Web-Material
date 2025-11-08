
# 🧭 Handling URL Parameters & Query Strings in Node.js

## 🧠 Overview

When a client (like a browser or app) makes a request to a server, it often sends extra information in the **URL** —
like IDs, names, or filters.

Example:

```
http://localhost:4000/user?id=10&name=Boss
```

To handle this kind of data, Node.js provides the **`url`** and **`querystring`** modules.

These help you extract:

* The **pathname** (`/user`)
* The **query parameters** (`id=10`, `name=Boss`)

---

## ⚙️ 1️⃣ Core Modules Used

| Module          | Purpose                                       |
| --------------- | --------------------------------------------- |
| **http**        | Creates server and listens for requests       |
| **url**         | Parses the incoming request URL               |
| **querystring** | Helps extract key-value pairs from query data |

---

## 💻 2️⃣ Example: Basic URL Parsing

```js
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // 'true' gives query as an object
  const pathName = parsedUrl.pathname;
  const query = parsedUrl.query;

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({
    path: pathName,
    query: query
  }));
});

server.listen(3000, () => console.log("Server running on http://localhost:3000"));
```

✅ Test in browser:

```
http://localhost:3000/user?id=7&name=Boss
```

🧾 Output:

```json
{
  "path": "/user",
  "query": {
    "id": "7",
    "name": "Boss"
  }
}
```

---

## 🧩 3️⃣ Extracting and Using Query Parameters

Let’s use query data for real logic:

```js
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const name = parsed.query.name;
  const age = parsed.query.age;

  res.writeHead(200, { "Content-Type": "text/plain" });
  if (name && age) {
    res.end(`Hello ${name}! You are ${age} years old.`);
  } else {
    res.end("Please provide name and age in URL, e.g., /?name=Boss&age=25");
  }
});

server.listen(4000, () => console.log("Server running on http://localhost:4000"));
```

✅ Test in browser:

```
http://localhost:4000/?name=Boss&age=25
```

🧾 Output:

```
Hello Boss! You are 25 years old.
```

---

## 🧩 4️⃣ Handling Dynamic Pathnames (like `/user/10`)

For URLs with parameters inside the path (not query string):

```js
const http = require("http");

const server = http.createServer((req, res) => {
  const urlParts = req.url.split("/"); // e.g. /user/10 → ["", "user", "10"]

  if (urlParts[1] === "user" && urlParts[2]) {
    const userId = urlParts[2];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`You requested details for User ID: ${userId}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Invalid Route");
  }
});

server.listen(5000, () => console.log("Server running on http://localhost:5000"));
```

✅ Test in browser:

```
http://localhost:5000/user/15
```

🧾 Output:

```
You requested details for User ID: 15
```

---

## 🧠 5️⃣ Combining Query + Dynamic Path

You can handle both **path** and **query** data together.

```js
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const parsed = url.parse(req.url, true);
  const pathParts = parsed.pathname.split("/");

  if (pathParts[1] === "product" && pathParts[2]) {
    const productId = pathParts[2];
    const { color, size } = parsed.query;

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Product ID: ${productId}, Color: ${color}, Size: ${size}`);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Invalid product request");
  }
});

server.listen(6000, () => console.log("Server running on http://localhost:6000"));
```

✅ Example URL:

```
http://localhost:6000/product/101?color=black&size=L
```

🧾 Output:

```
Product ID: 101, Color: black, Size: L
```

---

## 🧱 6️⃣ Real-Life Project: Simple Log Viewer API

Now let’s combine:

* `http` for routes
* `url` for parsing
* `fs` for reading/writing logs

We’ll create a **Log Management Server** that:

* Adds a new log entry
* Displays all logs
* Filters logs by username using query params

---

### 📁 Folder Structure

```
log_server/
│
├── app.js
└── logs.json
```

**logs.json**

```json
[
  { "id": 1, "user": "Boss", "message": "Server started", "time": "2025-11-02T09:00:00Z" }
]
```

---

### ⚙️ app.js

```js
const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const filePath = path.join(__dirname, "logs.json");

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const route = parsedUrl.pathname;

  // 1️⃣ GET /logs → Show all logs
  if (route === "/logs" && req.method === "GET") {
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        return res.end(JSON.stringify({ message: "Error reading logs" }));
      }
      const { user } = parsedUrl.query;
      let logs = JSON.parse(data);

      // Filter logs if user is provided
      if (user) {
        logs = logs.filter(l => l.user.toLowerCase() === user.toLowerCase());
      }

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(logs, null, 2));
    });
  }

  // 2️⃣ POST /add → Add a new log
  else if (route === "/add" && req.method === "POST") {
    let body = "";
    req.on("data", chunk => (body += chunk));
    req.on("end", () => {
      const newLog = JSON.parse(body);
      fs.readFile(filePath, (err, data) => {
        const logs = JSON.parse(data);
        newLog.id = logs.length + 1;
        newLog.time = new Date().toISOString();
        logs.push(newLog);
        fs.writeFile(filePath, JSON.stringify(logs, null, 2), () => {
          res.writeHead(201, { "Content-Type": "application/json" });
          res.end(JSON.stringify({ message: "Log added successfully!" }));
        });
      });
    });
  }

  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
  }
});

server.listen(7000, () =>
  console.log("Log Server running at http://localhost:7000")
);
```

---

### 🧪 How to Test

#### ➤ Get All Logs

`GET http://localhost:7000/logs`

#### ➤ Get Logs by User

`GET http://localhost:7000/logs?user=Boss`

#### ➤ Add a Log (POST)

```
POST http://localhost:7000/add
Body:
{
  "user": "Ravi",
  "message": "User logged in successfully"
}
```

---

### 🧠 What You Learned

| Concept                    | Description                                 |
| -------------------------- | ------------------------------------------- |
| `url.parse(req.url, true)` | Splits URL into path + query object         |
| `req.method`               | Identifies HTTP method (GET, POST, etc.)    |
| `query` object             | Holds parameters like `?id=5`               |
| `pathname`                 | Holds route like `/user/5`                  |
| Combining fs + url         | Dynamic and data-driven server logic        |
| Real-life logic            | Filtering, adding, reading data dynamically |

---

## ⚡ Summary

✅ You can now:

* Parse URLs and extract parameters
* Read query strings
* Use query data in logic
* Combine `http`, `fs`, and `url` for API-style behavior
