## 📌 Project Name: **Book Store Management System**

### 🧾 Technologies Used

* **Node.js + Express** → Backend server & routing
* **MongoDB** → Database
* **Mongoose** → ODM (Object Data Modeling)
* **Postman** (optional) → API testing

---

## 📂 Folder Structure (well-explained)

```
bookstore/
│
├─ package.json              → Project dependencies & scripts
├─ server.js                 → Main entry point (starts the server)
│
├─ config/
│   └── db.js                → MongoDB connection setup
│
├─ models/
│   └── Book.model.js        → Mongoose schema & model for books
│
├─ controllers/
│   └── Book.controller.js   → Logical code: add, update, get, delete books
│
├─ routes/
│   └── Book.routes.js       → API routes for books
│
└─ middleware/
    └── logger.js            → Custom middleware example (optional)
```

---

## 🧾 Step-by-Step Code

### 1️⃣ Install Dependencies

```bash
npm init -y
npm install express mongoose cors nodemon
```

### 2️⃣ **package.json** update for Nodemon (scripts)

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### 3️⃣ **server.js** (Start server + register routes + middleware)

```js
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/Book.routes.js";
import logger from "./middleware/logger.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);  // custom middleware

connectDB(); // connect mongoDB

app.use("/api/books", bookRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
```

---

### 4️⃣ **config/db.js** (MongoDB connection)

```js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/bookstore");
    console.log("MongoDB connected ✔");
  } catch (err) {
    console.log("DB connection failed ❌", err);
  }
};

export default connectDB;
```

---

### 5️⃣ **models/Book.model.js** (Book schema)

```js
import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String },
    publishYear: { type: Number }
  },
  { timestamps: true }
);

export default mongoose.model("Book", bookSchema);
```

---

### 6️⃣ **controllers/Book.controller.js**

```js
import Book from "../models/Book.model.js";

export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book added", book });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

export const updateBook = async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json({ message: "Book updated", updated });
};

export const deleteBook = async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ message: "Book deleted" });
};
```

---

### 7️⃣ **routes/Book.routes.js**

```js
import express from "express";
import { addBook, getBooks, updateBook, deleteBook } from "../controllers/Book.controller.js";

const router = express.Router();

router.post("/", addBook);
router.get("/", getBooks);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;
```

---

### 8️⃣ ⭐ Optional Middleware - **middleware/logger.js**

```js
const logger = (req, res, next) => {
  console.log(`Visited → [${req.method}] ${req.url}`);
  next();
};

export default logger;
```

---

## 🚀 API Endpoints (use in Postman)

| Method | Route            | Description   |
| ------ | ---------------- | ------------- |
| POST   | `/api/books/`    | Add new book  |
| GET    | `/api/books/`    | Get all books |
| PUT    | `/api/books/:id` | Update book   |
| DELETE | `/api/books/:id` | Delete book   |

---

## ✔ How to Run the Project

```bash
npm run dev
```

If everything is OK:

```
Server running on port 5000
MongoDB connected ✔
```

---

## 🔥 Final Notes

| Folder      | Responsibility                      |
| ----------- | ----------------------------------- |
| config      | DB connection                       |
| models      | Structure of data                   |
| controllers | Logic/database operations         |
| routes      | HTTP API paths                      |
| middleware  | Extra processing (logs, auth, etc.) |
