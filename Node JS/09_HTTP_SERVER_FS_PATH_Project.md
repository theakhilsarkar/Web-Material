# 🌐 Project: File-Based Web Server

## 🎯 Objective

Create a simple HTTP server using **Node.js core modules** — `http`, `fs`, and `path`.

---

## 📁 Folder Structure

```
file-server/
│
├── app.js
├── pages/
│   ├── index.html
│   ├── about.html
│   ├── contact.html
│   └── 404.html
└── logs/
    └── server.log
```

---

## 🧩 Tasks

1. Create an HTTP server using the `http` module on port **5000**.
2. Serve HTML pages using `fs.readFile()`:

   * `/` → `index.html`
   * `/about` → `about.html`
   * `/contact` → `contact.html`
   * Any other → `404.html`
3. Use `path` module to handle file paths.
4. Log each request (URL + time) in `logs/server.log`.
5. (Bonus) Add `/data` route that returns JSON response.

---

## ⚙️ Modules to Use

`http`, `fs`, `path`
