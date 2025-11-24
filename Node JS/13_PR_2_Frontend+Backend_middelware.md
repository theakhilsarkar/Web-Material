# 📝 **📌 Full-Stack Practical Assignment (React + Express + Middleware + Modules)**

### **Project Title: Mini Twitter – Tweet Posting App**

---

# 🚀 **Project Overview**

Build a **Mini Twitter Home Page** where users can:

### ✔ Add a Tweet

### ✔ Edit a Tweet

### ✔ Delete a Tweet

### ✔ List All Tweets

The **UI must look similar to Twitter Home Timeline** (simple layout is enough).

---

# 🎯 **Backend (Node + Express) Requirements**

### **1. Use Express + Modules**

Students must use:

* `express`
* `fs` module (core)
* `path` module (core)
* User-defined module (e.g., tweetService.js)

---

# 🌐 **2. Routes Required (CRUD)**

### **1️⃣ GET /api/tweets**

➡ Return all tweets
➡ Data must be read from `tweets.json`

---

### **2️⃣ POST /api/tweets**

➡ Add new tweet
➡ Save into `tweets.json`

**Required fields:**

| Field       | Type   | Required       |
| ----------- | ------ | -------------- |
| `username`  | string | ✔              |
| `tweet`     | string | ✔              |
| `createdAt` | date   | auto-generated |

---

### **3️⃣ PUT /api/tweets/:id**

➡ Update existing tweet
➡ Only `tweet` field can be edited

---

### **4️⃣ DELETE /api/tweets/:id**

➡ Delete tweet by ID

---

# 🛡 **3. Middleware Requirement**

### **Application-level middleware**

* Log each request:
  `METHOD + URL + Time`

Example:

```
POST /api/tweets  10:45:22 AM
```

---

### **Route-level middleware**

Use on **POST & PUT routes**:

1. Check if `tweet` is empty → return error
2. Check minimum tweet length = **5 characters**

---

# 📁 **4. File Structure Must Include**

```
project/
 ├─ backend/
 │    ├─ app.js
 │    ├─ routes/
 │    │     └─ tweetRoutes.js
 │    ├─ middleware/
 │    │     ├─ logger.js
 │    │     └─ validateTweet.js
 │    ├─ services/
 │    │     └─ tweetService.js   (user-defined module)
 │    ├─ data/
 │    │     └─ tweets.json
 │    └─ package.json
 └─ frontend/
      └─ (React project)
```

---

# 🎨 **Frontend (React) Requirements**

🎯 Build a **simple Twitter-like UI**:

### ✔ Tweet Input Box

Fields:

* Username (input)
* Tweet content (textarea)
* Submit button

### ✔ Display Tweets in ListView

Each tweet box should show:

* Username
* Tweet text
* Created time
* Edit button
* Delete button

---

# 🔄 **Frontend Must Use Fetch API**

Example:

```js
fetch("/api/tweets")
```

No need to use full URL (`http://localhost:3000`) if both frontend and backend run via proxy.

---

# ⭐ **Extra Points (Optional)**

* Use Bootstrap or Tailwind for UI
* Show live character count (`280 max like Twitter`)
* Show “Edited” badge on updated tweets

---

# 🧪 **Final Output Expected**

Your students must deliver:

### ✔ Working React App

### ✔ Working Express API

### ✔ Middleware implemented

### ✔ tweets.json used as "database"

### ✔ CRUD working

### ✔ UI similar to Twitter home page

### ✔ Required validations

