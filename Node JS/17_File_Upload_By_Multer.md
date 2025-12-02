Below is a **complete beginner-friendly documentation guide for students** on **image upload using Multer middleware in Express + Mongo
# 📘 Documentation — Upload Image in Express using Multer Middleware

## 🔥 1. What is Multer?

`Multer` is a **middleware for Express** that allows us to **upload files from client to server**.

Think of Multer as a **delivery boy**:

* Client uploads a file → Multer receives it → stores it in our server folder → we get file information in `req.file`.

---

## ⭐ Why do we need Multer?

Because Express **cannot handle image/file upload directly**.
It only accepts **JSON / Form data**, not files.
So Multer converts the uploaded file into a format Express can handle.

---

## 📦 2. Installation

Run in terminal:

```
npm install multer
```

---

## 📂 3. Folder Structure Example

```
project/
 ├─ server.js
 ├─ uploads/   <-- Uploaded images will be stored here
```

> If uploads folder doesn’t exist → create it manually.

---

## 🧠 4. Key Terms Used in Multer

| Term            | Meaning                                     |
| --------------- | ------------------------------------------- |
| Destination     | Folder where file will be stored            |
| Filename        | Name given to uploaded file                 |
| diskStorage()   | Storage engine for saving files to computer |
| single("image") | Upload only 1 file with field name `image`  |
| req.file        | Contains uploaded file details              |

---

## ⚙️ 5. Full Code Example with Explanation

### `server.js`

```js
import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 3000;

// 1️⃣ MongoDB Connection
mongoose.connect("mongodb://localhost:27017/multerExample")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// 2️⃣ Schema for storing image information
const fileSchema = new mongoose.Schema({
  filename: String,
  imagePath: String
});
const File = mongoose.model("File", fileSchema);

// 3️⃣ Path setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadPath = path.join(__dirname, "uploads");

// 4️⃣ Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

// 5️⃣ Serve upload folder publicly
app.use("/uploads", express.static(uploadPath));

// 6️⃣ Upload Route (POST)
app.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const file = new File({
      filename: req.file.filename,
      imagePath: req.file.path
    });
    await file.save();
    res.json({ message: "Image uploaded successfully", file });
  } catch (error) {
    res.status(500).json({ message: "Upload failed", error });
  }
});

// 7️⃣ Fetch Uploaded Images (GET)
app.get("/files", async (req, res) => {
  const files = await File.find();
  res.json(files);
});

// 8️⃣ Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

## 🧪 6. How to Test with Postman

### **Method:** POST

### **URL:** `http://localhost:3000/upload`

**Body → form-data**

| Key   | Value       | Type |
| ----- | ----------- | ---- |
| image | select file | File |

⚠️ The field name **must be the same** as the name written in code:

```js
upload.single("image")
```

Otherwise → Multer throws error **Field name missing**

---

## 📤 7. How to View Uploaded Image in Browser

If uploaded file name is:

```
1712345678123.jpg
```

Open in browser:

```
http://localhost:3000/uploads/1712345678123.jpg
```

---

## 🧾 8. Common Errors & Fixes

| Error                           | Reason                             | Fix                     |
| ------------------------------- | ---------------------------------- | ----------------------- |
| MulterError: Field name missing | Wrong key in Postman               | Must use `image`        |
| ENOENT: uploads not found       | uploads folder not created         | Create folder manually  |
| req.file undefined              | Used raw/JSON instead of form-data | Must use form-data File |

---

## 🔥 Revision Summary

| Purpose       | Technology                 |
| ------------- | -------------------------- |
| Node server   | Express                    |
| Upload image  | Multer middleware          |
| Save metadata | MongoDB & Mongoose         |
| Access image  | Make uploads folder public |

---

## 💡 Student Assignment Idea

📌 Build **Student Profile Upload System**
Fields: name, email, phone, profile image
Features: upload, get, update image, delete image
