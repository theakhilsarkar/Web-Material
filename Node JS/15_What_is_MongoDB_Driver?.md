# 🚀 **What is MongoDB Driver?**

MongoDB Driver allows Node.js to connect directly to MongoDB without using any ORM (like mongoose).
It gives **full control over database operations**.

To install:

```sh
npm install mongodb
```

---

## 📌 Step 1 — Import and Connect to MongoDB

```js
import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017";   // MongoDB connection URL
const client = new MongoClient(url);
const dbName = "mydb";                     // Database name
```

---

## 📌 Step 2 — Create a Reusable DB Connection Function

```js
export const connectDB = async () => {
  await client.connect();                // connect to MongoDB
  console.log("MongoDB Connected...");
  return client.db(dbName);              // return db reference
};
```

---

# 🔥 CRUD Operations Using MongoDB Driver

We will perform CRUD on a collection named **users**.

---

## 1️⃣ **C – CREATE (Insert Data)**

```js
import { connectDB } from "./db.js";

export const addUser = async () => {
  const db = await connectDB();
  const result = await db.collection("users").insertOne({
    name: "John",
    age: 25,
    email: "john@gmail.com"
  });

  console.log("User Inserted:", result.insertedId);
};
```

---

## 2️⃣ **R – READ (Get Data)**

### 🔹 Get All Users

```js
export const getUsers = async () => {
  const db = await connectDB();
  const users = await db.collection("users").find().toArray();
  console.log("Users:", users);
};
```

### 🔹 Get User by Condition

```js
export const getSingleUser = async () => {
  const db = await connectDB();
  const user = await db.collection("users").findOne({ name: "John" });
  console.log("Single User:", user);
};
```

---

## 3️⃣ **U – UPDATE (Modify Data)**

```js
export const updateUser = async () => {
  const db = await connectDB();
  const result = await db.collection("users").updateOne(
    { name: "John" },             // search condition
    { $set: { age: 30 } }         // updated values
  );

  console.log("Updated Count:", result.modifiedCount);
};
```

---

## 4️⃣ **D – DELETE (Remove Data)**

```js
export const deleteUser = async () => {
  const db = await connectDB();
  const result = await db.collection("users").deleteOne({ name: "John" });

  console.log("Deleted Count:", result.deletedCount);
};
```

---

# 📌 Execute Functions (Testing)

Create a **main.js** file:

```js
import { addUser, getUsers, getSingleUser, updateUser, deleteUser } from "./operations.js";

// Run one function at a time
addUser();
// getUsers();
// getSingleUser();
// updateUser();
// deleteUser();
```

Run server:

```sh
node main.js
```

---

# 🧠 Summary Table

| Operation | Method              | Function Example       |
| --------- | ------------------- | ---------------------- |
| Create    | `insertOne()`       | Add new user           |
| Read      | `find(), findOne()` | Get all or single user |
| Update    | `updateOne()`       | Modify user            |
| Delete    | `deleteOne()`       | Remove user            |

---

# ⚠ Important Notes

🔹 Every time you call `connectDB()`, MongoDB must be running
🔹 Use **127.0.0.1** instead of **localhost** because sometimes localhost causes connection delays
🔹 CRUD operations always happen on **collections** inside the database
