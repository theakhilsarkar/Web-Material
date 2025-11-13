
# 📥 Getting Data from Request (`req`) in Express.js

## 🧩 Introduction

In Express.js, the `req` (short for **request**) object represents the **HTTP request** made by the client (browser, frontend, API tool, etc.).

It contains all details like:

* URL
* Query parameters
* Form data
* JSON data
* Headers

---

## ⚙️ Common Ways to Get Data from `req`

There are mainly **4 important ways** to access incoming data in Express:

| Type               | Syntax        | Example                                          |
| ------------------ | ------------- | ------------------------------------------------ |
| 1️⃣ URL Parameters | `req.params`  | `/users/:id` → `req.params.id`                   |
| 2️⃣ Query Strings  | `req.query`   | `/users?name=Boss&city=Surat` → `req.query.name` |
| 3️⃣ Request Body   | `req.body`    | `{ "name": "Boss" }` (from POST/PUT)             |
| 4️⃣ Headers        | `req.headers` | `req.headers['content-type']`                    |

---

## 🧱 1️⃣ URL Parameters → `req.params`

Used when data is part of the **URL path**.

### 🧩 Example:

```js
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is ${userId}`);
});
```

### 🧪 Test:

`GET http://localhost:5000/user/101`
👉 Output → `User ID is 101`

✅ Use case: When you need **specific resource IDs**, e.g. `/product/:id`, `/user/:id`.

---

## 🔍 2️⃣ Query Parameters → `req.query`

Used when data is sent in the **URL after ?**

### 🧩 Example:

```js
app.get("/search", (req, res) => {
  const { name, city } = req.query;
  res.send(`Searching for ${name} in ${city}`);
});
```

### 🧪 Test:

`GET http://localhost:5000/search?name=Boss&city=Surat`
👉 Output → `Searching for Boss in Surat`

✅ Use case: Filtering, searching, or sorting data (e.g., `/users?city=Surat`)

---

## 📦 3️⃣ Request Body → `req.body`

Used when data is sent from frontend (like forms or JSON via POST/PUT).
To access this, use the **JSON middleware** first:

```js
app.use(express.json());
```

### 🧩 Example:

```js
app.post("/user", (req, res) => {
  const { name, city } = req.body;
  res.send(`User created: ${name} from ${city}`);
});
```

### 🧪 Test:

**POST → `http://localhost:5000/user`**
Body (JSON):

```json
{ "name": "Boss", "city": "Surat" }
```

👉 Output → `User created: Boss from Surat`

✅ Use case: Form submissions, login, registration, CRUD create/update.

---

## 📩 4️⃣ Headers → `req.headers`

Used to read **extra metadata** sent with the request (like token, content type, etc.)

### 🧩 Example:

```js
app.get("/check", (req, res) => {
  const token = req.headers["authorization"];
  res.send(`Your token is: ${token}`);
});
```

### 🧪 Test:

Add header → `Authorization: mySecretToken123`
👉 Output → `Your token is: mySecretToken123`

✅ Use case: Authentication, API keys, content-type checks.

---

## 🧠 Bonus: Combine All Together

```js
app.post("/info/:id", (req, res) => {
  const userId = req.params.id;         // URL param
  const { name } = req.body;            // Body data
  const { city } = req.query;           // Query param
  const token = req.headers["auth"];    // Header data

  res.json({
    message: "Data received successfully",
    data: { userId, name, city, token },
  });
});
```

### 🧪 Test:

**POST → `http://localhost:5000/info/22?city=Surat`**
Headers → `auth: secret123`
Body:

```json
{ "name": "Boss" }
```

👉 Output:

```json
{
  "message": "Data received successfully",
  "data": {
    "userId": "22",
    "name": "Boss",
    "city": "Surat",
    "token": "secret123"
  }
}
```

---

## ⚡ Summary Table

| Source        | Example              | Access Using       | Method Type      |
| ------------- | -------------------- | ------------------ | ---------------- |
| URL Parameter | `/user/:id`          | `req.params.id`    | GET, PUT, DELETE |
| Query String  | `/user?name=Boss`    | `req.query.name`   | GET              |
| Request Body  | `{ "name": "Boss" }` | `req.body.name`    | POST, PUT        |
| Header        | `auth: token123`     | `req.headers.auth` | ALL              |

---

## 🧩 Key Notes

* Always use `express.json()` before reading `req.body`.
* `req.params` is for **route variables**.
* `req.query` is for **search/filter data**.
* `req.headers` is used for **authorization or metadata**.
* You can combine multiple data sources in one API.
