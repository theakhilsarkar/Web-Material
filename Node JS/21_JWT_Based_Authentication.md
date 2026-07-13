# 🔐 JWT Token Based Authentication – Practical Guide (With Frontend Integration)

---

## 1️⃣ What is JWT?

JWT (JSON Web Token) is a **stateless authentication mechanism**.

* After login, server generates a **token**
* Token is sent to client
* Client sends token in every request
* Server **verifies token** instead of storing session

📌 **No server-side session storage**

---

## 2️⃣ JWT Structure

A JWT has **3 parts**:

```
HEADER.PAYLOAD.SIGNATURE
```

Example:

```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
.eyJ1c2VySWQiOiI2NTFhYmM...IiwiaWF0IjoxNjk5fQ
.VdNf9...
```

* **Header** → algorithm (HS256)
* **Payload** → user data (id, role)
* **Signature** → secret key + payload (prevents tampering)

---

## 3️⃣ Project Structure

```
jwt-auth/
│
├── server.js
├── config/
│   └── db.js
│
├── models/
│   └── User.model.js
│
├── routes/
│   └── auth.routes.js
│
├── middleware/
│   └── auth.middleware.js
│
└── package.json
```

---

## 4️⃣ package.json

```json
{
  "name": "jwt-auth",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "bcrypt": "^5.1.0",
    "express": "^5.2.1",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^9.0.1"
  }
}
```

---

## 5️⃣ Database Connection (`config/db.js`)

```js
import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/jwtAuth");
  console.log("MongoDB connected");
};
```

---

## 6️⃣ User Model (`models/User.model.js`)

```js
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

export const User = mongoose.model("User", userSchema);
```

---

## 7️⃣ JWT Auth Middleware (`middleware/auth.middleware.js`)

```js
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
```

---

## 8️⃣ Authentication Routes (`routes/auth.routes.js`)

### 🔹 OPTION 1: Token in Response (Basic)

```js
res.json({ message: "Login success", token });
```

---

### 🔹 OPTION 2: Store Token in Cookie (Recommended for Web Apps)

```js
res.cookie("token", token, {
  httpOnly: true,
  secure: false,      // true in production (HTTPS)
  sameSite: "Lax"     // "None" if frontend & backend different domain
});

res.json({ message: "Login success" });
```

---

## 9️⃣ Server Setup (`server.js`)

```js
import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use("/api/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
```

---

# 🌐 FRONTEND INTEGRATION (React)

---

## 🔟 How to Store JWT in Cookie (Automatically)

👉 When backend sends cookie using `res.cookie()`, frontend does NOT manually store it.

### Important:

You must enable credentials in frontend request.

---

## 1️⃣1️⃣ Login API Call (React)

### Using fetch

```js
fetch("http://localhost:3000/api/auth/login", {
  method: "POST",
  credentials: "include", // VERY IMPORTANT
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    email,
    password
  })
});
```

---

### Using axios

```js
import axios from "axios";

axios.post(
  "http://localhost:3000/api/auth/login",
  { email, password },
  { withCredentials: true } // VERY IMPORTANT
);
```

---

## 1️⃣2️⃣ How Cookie Works

* Browser automatically stores cookie
* You **cannot access httpOnly cookie using JS**
* Cookie is automatically sent in every request

---

## 1️⃣3️⃣ Access Protected API (Frontend)

```js
fetch("http://localhost:3000/api/auth/profile", {
  method: "GET",
  credentials: "include"
});
```

👉 No need to manually attach token

---

## 1️⃣4️⃣ Backend Middleware Update (for Cookies)

If using cookies instead of headers:

```js
export const authMiddleware = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Token missing" });
  }

  try {
    const decoded = jwt.verify(token, "SECRET_KEY");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
};
```

---

## 1️⃣5️⃣ Enable Cookie Parser

```bash
npm install cookie-parser
```

```js
import cookieParser from "cookie-parser";
app.use(cookieParser());
```

---

# ⚠️ IMPORTANT CONFIGURATION (VERY COMMON ERRORS)

---

## 🔴 If Cookie Not Storing

### Fix checklist:

### 1. Frontend

```
credentials: "include"
withCredentials: true
```

### 2. Backend CORS

```
credentials: true
origin: frontend URL
```

### 3. Cookie Settings

#### Local (HTTP)

```
secure: false
sameSite: "Lax"
```

#### Production (HTTPS)

```
secure: true
sameSite: "None"
```

---

## 🔴 If Frontend & Backend Different Domain

Must use:

```
sameSite: "None"
secure: true
```

---

## 🔄 Authentication Flow (Updated)

### Signup

1. Password hashed
2. Stored in DB

### Login

1. User verified
2. JWT created
3. Cookie set in browser

### Protected API

1. Cookie automatically sent
2. Token verified
3. Access granted

---

## 🧪 Testing Guide

### Using Postman

* Works without CORS issues

### Using Browser

* Requires:

  * credentials
  * proper cookie setup
  * correct CORS

---

## 🆚 Cookie vs LocalStorage

| Cookie (httpOnly)     | LocalStorage           |
| --------------------- | ---------------------- |
| Secure (no JS access) | Accessible via JS      |
| Prevents XSS          | Vulnerable to XSS      |
| Auto sent in request  | Manual attach required |

---

## ⚠️ Security Notes

* Never store passwords in plain text
* Keep JWT secret in `.env`
* Set token expiry
* Prefer **httpOnly cookies** over localStorage
* Use HTTPS in production

---

## 📘 When to Use JWT?

* REST APIs
* Mobile apps
* React / Angular frontend

---

## ✅ FINAL SUMMARY

If using JWT with cookies:

✔ Backend sets cookie
✔ Frontend sends `credentials: include`
✔ Cookie auto-sent in requests
✔ Middleware verifies token

---
