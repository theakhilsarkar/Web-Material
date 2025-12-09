
# 🔥 Authentication Using Cookies in Node.js (Signup + Signin — No Password Hashing)

---

## 📌 Why Should We Use Cookies?

Cookies are used to store small information on the browser and are **automatically sent along with every HTTP request** to the server.

Use cases of cookies:

* To maintain login session (authenticate users)
* To identify returning users
* To store short-term preferences

In authentication systems, cookies help the server **identify who is making the request**.

---

## 🔍 Local Storage vs Session Storage vs Cookies

| Feature                      | Local Storage        | Session Storage          | Cookies         |
| ---------------------------- | -------------------- | ------------------------ | --------------- |
| Storage Limit                | High (5–10 MB)       | High (5–10 MB)           | Low (4 KB)      |
| Expiry                       | Never unless deleted | Until browser/tab closed | Based on expiry |
| Sent to Server Automatically | ❌                    | ❌                        | ✔               |
| Best Used For                | Preferences          | Temporary page data      | Authentication  |

📌 **Only cookies get attached with backend requests automatically → ideal for login/session management.**

---

## 🍪 `res.cookie()` — Syntax

```js
res.cookie(name, value, options);
```

### Common Options:

| Option           | Description                                                   |
| ---------------- | ------------------------------------------------------------- |
| `httpOnly: true` | Protects cookies from being read by JavaScript (prevents XSS) |
| `secure: true`   | Only sent on HTTPS                                            |
| `maxAge`         | Cookie expiry duration in milliseconds                        |
| `sameSite`       | Protects from CSRF by restricting cross-site requests         |

---

## 🍪 Reading cookies

```js
req.cookies.cookieName;
```

---

# 🚀 Cookie Authentication Project (Signup + Login — without password hashing)

### Install packages

```
npm install express cookie-parser
```

---

### ▶ `app.js`

```js
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

let users = []; // Mock database
```

---

### 🟢 SIGNUP (Register)

```js
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  const existing = users.find(u => u.email === email);
  if (existing) return res.status(400).json({ message: "User already exists" });

  const newUser = { id: Date.now(), name, email, password };
  users.push(newUser);

  return res.json({ message: "Signup successful" });
});
```

---

### 🔵 SIGNIN (Login + Set Cookie)

```js
app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: "Invalid email or password" });

  // Use user.id as token
  res.cookie("auth_token", user.id, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    sameSite: "strict",
  });

  return res.json({ message: "Login successful" });
});
```

---

### 🔐 Middleware — Protect Routes

```js
function isAuthenticated(req, res, next) {
  const token = req.cookies.auth_token;
  if (!token) return res.status(401).json({ message: "Not logged in" });

  const user = users.find(u => u.id == token);
  if (!user) return res.status(401).json({ message: "Invalid user" });

  req.user = user;
  next();
}
```

---

### 🔸 Protected Route

```js
app.get("/profile", isAuthenticated, (req, res) => {
  res.json({ message: "Welcome", user: req.user });
});
```

---

### 🔴 Logout

```js
app.get("/logout", (req, res) => {
  res.clearCookie("auth_token");
  res.json({ message: "Logged out successfully" });
});
```

---

### 🚀 Start Server

```js
app.listen(5000, () => console.log("Server running on 5000"));
```

---

# ⚠ Security Concepts (Very Important)

### 🔥 What is XSS (Cross-Site Scripting)?

XSS is an attack where hackers insert **malicious JavaScript code** into a website.

For example:

```html
<input value="<script>alert('Hacked')</script>">
```

If the website prints this without sanitization, the script will run in the victim's browser.

🔹 Attackers can steal cookies through XSS if cookies are readable via JavaScript.

🛡 Prevention:

* Use `httpOnly: true` cookie → so JS cannot read it
* Sanitize inputs (remove scripts)

---

### 🔥 What is CSRF (Cross-Site Request Forgery)?

CSRF forces a **logged-in user** to unknowingly perform an action.

Example:
If user is logged in and cookie is stored, hacker might create a webpage that secretly sends:

```
POST https://bank.com/transfer?amount=5000
```

Browser sends cookies automatically, so bank thinks user did this.

🛡 Prevention:

* `sameSite: "strict"` cookies
* CSRF token system
* Don't allow critical requests without user confirmation

---

# 📌 Final Summary

| Attack | How it happens                             | Prevention                          |
| ------ | ------------------------------------------ | ----------------------------------- |
| XSS    | Injecting malicious JavaScript             | httpOnly cookies, sanitizing inputs |
| CSRF   | Making browser send authenticated requests | sameSite cookies, CSRF token        |
