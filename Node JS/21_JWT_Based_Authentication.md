# 🔐 JWT Token Based Authentication – Practical Guide

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

📌 This middleware:

* Extracts token from header
* Verifies token
* Attaches user data to `req.user`

---

## 8️⃣ Authentication Routes (`routes/auth.routes.js`)

```js
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User.model.js";
import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

/* SIGNUP */
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = new User({ email, password: hashedPassword });
  await user.save();

  res.json({ message: "User registered" });
});

/* LOGIN */
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
    { userId: user._id, email: user.email },
    "SECRET_KEY",
    { expiresIn: "1h" }
  );

  res.json({ message: "Login success", token });
});

/* PROTECTED ROUTE */
router.get("/profile", authMiddleware, (req, res) => {
  res.json({
    message: "Protected data",
    user: req.user
  });
});

export default router;
```

---

## 9️⃣ Server Setup (`server.js`)

```js
import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();
const PORT = 3000;

connectDB();

app.use(express.json());
app.use("/api/auth", authRoutes);

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
```

---

## 🔄 Authentication Flow (Explain in Class)

### Signup

1. Password hashed
2. Stored in DB

### Login

1. User verified
2. JWT created
3. Token sent to client

### Protected API

1. Token sent in request header
2. Token verified
3. Access granted

---

## 🧪 Postman Testing Guide

### Signup

```
POST /api/auth/signup
{
  "email": "test@gmail.com",
  "password": "123456"
}
```

### Login

```
POST /api/auth/login
```

Response:

```
{
  "token": "eyJhbGciOi..."
}
```

### Protected API

```
GET /api/auth/profile
Header:
Authorization: Bearer <TOKEN>
```

---

## 🆚 JWT vs Session (Explain Difference)

| JWT              | Session          |
| ---------------- | ---------------- |
| Stateless        | Stateful         |
| Scales well      | Server memory    |
| Used in APIs     | Used in web apps |
| Stored in client | Stored in server |

---

## ⚠️ Security Notes (Must Teach)

* Never store passwords in plain text
* Keep JWT secret in `.env`
* Set token expiry
* Avoid storing JWT in localStorage (XSS risk)

---

## 📘 When to Use JWT?

* REST APIs
* Mobile apps
* React / Angular frontend
