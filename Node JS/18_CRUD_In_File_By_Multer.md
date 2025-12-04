# 📘 **Book Store Management System — Complete Documentation (Express + MongoDB + Mongoose + Multer + MVC)**

This documentation explains how to build a backend project in Node.js that manages books with **image upload** functionality.
Students will learn:
✔ Express
✔ MongoDB + Mongoose
✔ Multer middleware
✔ MVC folder structure
✔ CRUD API

---

## 🎯 **Project Goal**

Create REST APIs to:

| Feature        | Description                       |
| -------------- | --------------------------------- |
| Add a book     | With image upload                 |
| View all books | List of all books                 |
| Update a book  | Optionally update the image too   |
| Delete a book  | Remove book + remove stored image |

---

## 📂 **Final Folder Structure**

```
bookstore/
│
├─ package.json
├─ server.js
│
├─ config/
│   └── db.js
│
├─ models/
│   └── Book.model.js
│
├─ controllers/
│   └── Book.controller.js
│
├─ routes/
│   └── Book.routes.js
│
├─ middleware/
│   └── logger.js
│
└─ uploads/
```

---

## 🚀 Step 1 — Initialize Project

```
npm init -y
npm install express mongoose multer cors
```

---

## 🚀 Step 2 — Create Files and Code (Copy & Paste)

---

### 🔹 `server.js` — Main Application File

```js
import express from "express";
import cors from "cors";
import path from "path";
import bookRoutes from "./routes/Book.routes.js";
import logger from "./middleware/logger.js";
import connectDB from "./config/db.js";

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());
app.use(logger);

app.use("/uploads", express.static("uploads"));
app.use("/api/books", bookRoutes);

connectDB();
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
```

---

### 🔹 `config/db.js` — MongoDB Connection

```js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookstore");
    console.log("📌 MongoDB Connected");
  } catch (err) {
    console.log("Database Error:", err);
  }
};

export default connectDB;
```

---

### 🔹 `models/Book.model.js` — Mongoose Schema

```js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  price: Number,
  coverImage: String,
}, { timestamps: true });

const Book = mongoose.model("Book", bookSchema);
export default Book;
```

---

### 🔹 `middleware/logger.js`

```js
const logger = (req, res, next) => {
  console.log(`${req.method} → ${req.url}`);
  next();
};

export default logger;
```

---

### 🔹 `routes/Book.routes.js`

```js
import express from "express";
import multer from "multer";
import path from "path";
import {
  addBook,
  getBooks,
  updateBook,
  deleteBook
} from "../controllers/Book.controller.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

router.post("/", upload.single("coverImage"), addBook);
router.get("/", getBooks);
router.put("/:id", upload.single("coverImage"), updateBook);
router.delete("/:id", deleteBook);

export default router;
```

---

### 🔹 `controllers/Book.controller.js`

```js
import Book from "../models/Book.model.js";
import fs from "fs";

export const addBook = async (req, res) => {
  try {
    const newBook = await Book.create({
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
      coverImage: req.file.path,
    });
    res.status(201).json({ message: "Book added", book: newBook });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (req.file) {
      if (fs.existsSync(book.coverImage)) fs.unlinkSync(book.coverImage);
      book.coverImage = req.file.path;
    }

    book.title = req.body.title;
    book.author = req.body.author;
    book.price = req.body.price;

    await book.save();
    res.json({ message: "Book updated", book });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (fs.existsSync(book.coverImage)) fs.unlinkSync(book.coverImage);
    await Book.findByIdAndDelete(req.params.id);
    res.json({ message: "Book deleted" });
  } catch (error) {
    res.status(500).json({ error });
  }
};
```

---

## 🧪 **Postman API Testing**

| Operation     | Method | URL              | Body Type                                         |
| ------------- | ------ | ---------------- | ------------------------------------------------- |
| Add book      | POST   | `/api/books`     | form-data (title, author, price, coverImage:file) |
| Get all books | GET    | `/api/books`     | none                                              |
| Update book   | PUT    | `/api/books/:id` | form-data (title, author, price, optional file)   |
| Delete book   | DELETE | `/api/books/:id` | none                                              |

---

## 📷 **How Image Upload Works**

| Step | Action                                                       |
| ---- | ------------------------------------------------------------ |
| 1    | User uploads image using API                                 |
| 2    | Multer stores image in `/uploads`                            |
| 3    | Image path saved in database                                 |
| 4    | View image using: `http://localhost:3000/uploads/<filename>` |

---

## 🔍 **Why this project is valuable**

| Skill                   | Covered |
| ----------------------- | ------- |
| Express backend         | ✔       |
| MVC architecture        | ✔       |
| Multer file uploads     | ✔       |
| Mongoose database usage | ✔       |
| Middleware programming  | ✔       |
| REST API building       | ✔       |

---

## 📌 Summary

This project represents a **real backend** exactly like professional projects:

| Without MVC        | With MVC               |
| ------------------ | ---------------------- |
| Messy code         | Clean folder structure |
| Hard to maintain   | Team ready             |
| Difficult to scale | Easily scalable        |
