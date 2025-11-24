

# ✅ **1. What is a Database?**

A **database** is a **place where data is stored, managed, and organized** so that we can easily **add**, **update**, **delete**, and **retrieve** (get back) information whenever needed.

### 🔸 Example

* Contacts saved in your mobile = database
* Student records in your institute = database
* Twitter tweets = database

### 📌 Why do we need a database?

* To store large amounts of data safely
* To find data quickly
* To avoid losing data
* To share data among multiple users or apps

---

# ✅ **2. Types of Databases**

There are mainly **two types**:

## **A. SQL Databases**

Also called **Relational Databases** because they store data in **tables** (rows & columns) just like Excel.

Examples:

* MySQL
* PostgreSQL
* SQL Server

### 📌 Key Concepts

* **Schema** → The *structure* of data (what fields, data types).
  Example: A student table must have name, email, age → that structure is schema.

* **Queries** → Commands used to interact with the database.
  Example:

  * SELECT → read data
  * INSERT → add data
  * UPDATE → modify data
  * DELETE → remove data

### ⭐ Advantages of SQL

✔ Strong structure
✔ Great for financial apps
✔ Strong data safety
✔ Supports ACID

### ❓ What is ACID?

A set of rules that guarantees data will always be accurate:

| Letter | Meaning     | Simple Explanation                                                  |
| ------ | ----------- | ------------------------------------------------------------------- |
| A      | Atomicity   | A complete operation must either fully happen or not happen at all. |
| C      | Consistency | Data must always remain valid and correct.                          |
| I      | Isolation   | One user’s action doesn’t affect others while processing.           |
| D      | Durability  | Once saved, data will not be lost.                                  |

### ❌ Disadvantages of SQL

✘ Fixed structure → not flexible
✘ Difficult to handle large unstructured data (images, JSON, posts)
✘ Horizontal scaling is difficult (scaling by adding more servers)

---

## **B. NoSQL Databases**

(NoSQL = Not Only SQL)
Instead of tables, NoSQL stores data in flexible formats like:

* Documents (like JSON)
* Key-Value
* Graph
* Wide-column

Examples:

* MongoDB
* Cassandra
* Redis

### ❓ What is JSON?

A lightweight text format that stores data using **key : value** pairs.

### ⭐ Advantages of NoSQL

✔ Flexible (schema-less)
✔ Fast for large-scale apps
✔ Easy to store JSON-like data
✔ Great for real-time apps
✔ Easy to scale horizontally

### ❌ What is Horizontal Scaling?

Adding more machines/servers to handle more users.

### ❓ Disadvantages of NoSQL

✘ Not fully ACID like SQL
✘ Supports **eventual consistency**
✘ Less suited for banking apps

---

# ❓ What is Eventual Consistency?

In NoSQL systems like MongoDB:

👉 When you update data, it may not become immediately correct/updated in every server.
👉 But after a short time, all servers become consistent.

This is useful for large systems like social networks.

---

# 🚀 **3. What is MongoDB?**

MongoDB is a **NoSQL database** that stores data in **documents** similar to **JSON**.
MongoDB is popular in Node.js because:

✔ Fast
✔ Flexible
✔ Easy to use
✔ Works with JavaScript objects

---

# 🧠 MongoDB Concepts (Explained Simply)

| MongoDB Term | Meaning                   | Simple Understanding |
| ------------ | ------------------------- | -------------------- |
| Database     | Collection of collections | Like a folder        |
| Collection   | Group of documents        | Like a table         |
| Document     | A record stored as JSON   | Like a row           |
| Field        | Key/value pair            | Like column          |

---

# 🟢 **4. How to Use MongoDB in Node.js**

There are two popular ways:

## ✔ Method 1: **Using MongoDB Native Driver**

## ✔ Method 2: **Using Mongoose (Most Common & Easy)**

Below is documentation using **Mongoose**, because beginners understand this easily.

---

# 📘 **5. Step-by-Step Guide to Use MongoDB With Node.js**

---

## **Step 1: Install MongoDB**

Install MongoDB software on your system or use MongoDB Atlas (cloud database).

---

## **Step 2: Install Mongoose**

```sh
npm install mongoose
```

---

## **Step 3: Connect Node.js to MongoDB**

```js
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/studentDB")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));
```

---

## **Step 4: Create Schema & Model**

```js
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

const Student = mongoose.model("Student", studentSchema);
```

✔ **Schema** means structure
✔ **Model** means actual collection in DB

---

## **Step 5: Insert Data**

```js
const newStudent = new Student({
    name: "Yash",
    age: 22,
    course: "Full Stack"
});

newStudent.save();
```

---

## **Step 6: Read Data**

```js
Student.find().then(data => console.log(data));
```

---

## **Step 7: Update Data**

```js
Student.updateOne({ name: "Yash" }, { age: 23 });
```

---

## **Step 8: Delete Data**

```js
Student.deleteOne({ name: "Yash" });
```

---

# 📌 **6. Advantages of MongoDB (Beginner-Friendly Explanation)**

✔ **Flexible** – no fixed schema
✔ **Fast for large datasets**
✔ **Stores JSON-like data** – works great with Node.js
✔ **Easy to scale horizontally**
✔ **No complex joins needed**

---

# 📌 **7. Disadvantages of MongoDB**

✘ Not fully ACID
✘ Not suitable for banking
✘ Eventual consistency can delay exact accuracy
✘ Uses more storage space due to JSON format
