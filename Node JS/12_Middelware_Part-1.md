# 🚀 1. How to Run Node.js Server Continuously

When you normally run:

```bash
node server.js
```

❌ If you make any code change → server stops
❌ You must restart manually → irritating for development

---

## ✅ Solution: Use **nodemon**

Nodemon automatically restarts your server whenever you change your file.

### 🔧 Install nodemon (dev dependency)

```bash
npm install -D nodemon
```

### ⚙️ Add script in package.json

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### ▶️ Run development server

```bash
npm run dev
```

Now:

✔ Server keeps running
✔ Auto-restarts on file changes
✔ No manual restart
✔ Best for development

---

# 🧠 2. What is Middleware in Express?

Middleware = **function that sits between the request and response**.

It can:

✔ Modify request
✔ Validate data
✔ Check authentication
✔ Log request
✔ Block requests
✔ Serve static files
✔ Handle errors

### Signature:

```js
(req, res, next) => { ... }
```

### VERY IMPORTANT

You must call **next()** to move forward.

---

# 🎯 3. Types of Middleware (Simple Explanation)

## 1️⃣ Application-Level Middleware

Applies to whole app.

```js
app.use((req, res, next) => {
  console.log("Request received at:", new Date());
  next();
});
```

👉 Every request will print time.

---

## 2️⃣ Route-Level Middleware

Only for specific routes.

```js
const checkUser = (req, res, next) => {
  console.log("Checking user access...");
  next();
};

app.get("/dashboard", checkUser, (req, res) => {
  res.send("Dashboard Loaded");
});
```

---

## 3️⃣ Built-in Middleware

Express provides some middleware:

### ✔ JSON parser

```js
app.use(express.json());
```

### ✔ URL encoded parser

```js
app.use(express.urlencoded({ extended: true }));
```

### ✔ Static file serving

```js
app.use(express.static("public"));
```

---

## 4️⃣ Third-Party Middleware

Example: **cors**, **helmet**, **morgan**.

```js
import morgan from "morgan";
app.use(morgan("dev"));
```

This logs requests like:

```
GET /home 200 12ms
```

---

# 🔥 4. Real-World Middleware Examples (Simple & Practical)

## 📌 Example 1 — Logging Middleware

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});
```

✔ Shows every request in terminal
✔ Good for debugging

---

## 📌 Example 2 — Block Website Until 10 AM (Custom Middleware)

```js
const timeCheck = (req, res, next) => {
  const hour = new Date().getHours();
  if (hour < 10) {
    return res.send("Website allowed only after 10 AM.");
  }
  next();
};

app.use(timeCheck);
```

✔ Students love this example
✔ Shows power of middleware
✔ Real business logic example

---

## 📌 Example 3 — Protect Route (Authorization Middleware)

```js
const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (token !== "12345") {
    return res.status(401).send("Unauthorized");
  }

  next();
};

app.get("/admin", auth, (req, res) => {
  res.send("Admin Panel Access Granted");
});
```

---

## 📌 Example 4 — Validate Input Middleware

```js
const validateUser = (req, res, next) => {
  if (!req.body.name) {
    return res.status(400).send("Name is required");
  }
  next();
};

app.post("/register", validateUser, (req, res) => {
  res.send("User registered");
});
```

✔ Checks if name exists
✔ Prevents bad data

---

# 🖼 5. Visual Flow of Middleware (Very Easy Diagram)

```
Client Request
      ↓
[Middleware 1] → logs request
      ↓
[Middleware 2] → validates input
      ↓
[Middleware 3] → check auth
      ↓
[Route Controller] → send response
      ↓
Client
```

---

# 🎉 Summary for Quick Revision

| Topic      | Explanation                                     |
| ---------- | ----------------------------------------------- |
| Nodemon    | Used to run server continuously without restart |
| Middleware | Function between request & response             |
| next()     | Moves request to next step                      |
| Use Cases  | Logging, auth, validation, static files         |
| Types      | App-level, route-level, built-in, third-party   |

