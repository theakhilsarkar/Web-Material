



# 📘 JavaScript Lecture: Introduction to API and JSON

---

## 📌 What is JSON?

**JSON** stands for **JavaScript Object Notation**
✅ Format to represent **data** using **objects and arrays**
✅ Used widely to exchange data between **server and client**

```json
{
  "name": "Alice",
  "age": 25
}
```

---

## 🌐 What is an API?

**API** = Application Programming Interface
✅ A **URL** used to **communicate with the server**
✅ Acts as a **bridge** between **client** and **server**

> Think of API as a *waiter* in a restaurant — takes your request to the kitchen (server) and brings back the food (response).

---

## 🧱 Structure of Web Communication

```
User -> Client (browser/mobile) -- Request --> Server (24x7)
                                <-- Response --
```

* **User** – real person
* **Client** – device or browser sending request
* **Server** – stores/manages data and gives back a response
* **API** – URL through which request/response happens

---

## 🧠 Example Concepts

| Term     | Meaning                             |
| -------- | ----------------------------------- |
| Variable | Holds a single value                |
| Array    | Holds multiple values (same type)   |
| Object   | Key-value pairs                     |
| JSON     | Data format used for APIs           |
| API      | Medium to interact with server data |
| Request  | Ask data from server                |
| Response | Server’s reply                      |

---

## 🔁 Network Request Cycle

1. **API Call** using URL
2. Server processes request
3. **Response** comes in the form of a **Promise**
4. `.json()` to extract usable data
5. Use data in HTML/JS

---

## 📦 Example 1: Using `fetch()` to get posts

```js
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())  // Convert to JSON
  .then((value) => {
    console.log(value);  // Show data in console
    value.map((item) => {
      document.writeln(item.title + "<br>");
    });
  });
```

### 🧪 What is `.then()`?

* Used to **handle promises**
* Runs **after** the fetch is successful

---

## 🔂 Async/Await Version

```js
async function fetchPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const json = await response.json();
  return json;
}

async function starter() {
  const posts = await fetchPost();
  posts.map((post, index) => {
    document.writeln(index + 1 + ". " + post.title + "<br>");
  });
}

starter(); // Start the process
```

## 🛒 Practice Task (Fake Store API)

Try this to display product titles:

```js
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((products) => {
    products.map((product) => {
      document.writeln(product.title + "<br>");
    });
  });
```

---

## ✅ Summary

| Concept     | Description                         |
| ----------- | ----------------------------------- |
| API         | URL to interact with server         |
| JSON        | Format to send/receive data         |
| fetch()     | Built-in function to make API calls |
| .then()     | Used to handle promise (response)   |
| async/await | Modern way to handle async code     |

