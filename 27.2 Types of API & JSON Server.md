

# **Lecture 27.2 – Types of API & Working with JSON Server** 🚀

## **1️⃣ Types of API**

An **API** (Application Programming Interface) acts like a **bridge** that allows two software applications to communicate with each other.
In the context of **web development**, most APIs are **web APIs** used to send and receive data between client and server.

---

### **A. Based on Communication Style**

#### 1. **REST API** 🌐

* **Full form:** Representational State Transfer
* **Data Format:** Mostly JSON (sometimes XML)
* **Protocol:** HTTP/HTTPS
* **Stateless:** Server does not remember previous requests.
* **Example:**
  `GET https://api.example.com/products` → Fetch products
  `POST https://api.example.com/products` → Add a product
* **Used in:** Most modern web apps (React, Angular, Vue, Mobile apps)

✅ **Pros:** Easy to use, widely adopted
⚠ **Cons:** No real-time communication (only request-response)

---

#### 2. **SOAP API** 📦

* **Full form:** Simple Object Access Protocol
* **Data Format:** XML
* **Strict Rules:** Needs a defined **contract** (WSDL file)
* **Example:** Used in **banking systems, payment gateways** where security and standardization are important.

✅ **Pros:** Very secure, reliable for enterprise
⚠ **Cons:** Heavy data (XML), complex

---

#### 3. **GraphQL API** 🎯

* Developed by **Facebook**
* Client can **ask exactly what they need** (avoids over-fetching/under-fetching)
* **Single endpoint:** `/graphql`
* Example Query:

  ```graphql
  {
    products {
      name
      price
    }
  }
  ```

✅ **Pros:** Efficient data fetching
⚠ **Cons:** More complex to set up

---

#### 4. **gRPC API** ⚡

* Uses **Protocol Buffers (Protobuf)** instead of JSON
* Very fast (binary data transfer)
* Mostly used in **microservices & internal server communication**

✅ **Pros:** High performance, small data size
⚠ **Cons:** Not beginner-friendly

---

### **B. Based on Usage**

* **Public API:** Open for everyone (e.g., GitHub API, OpenWeather API)
* **Private API:** Internal use within a company
* **Partner API:** Shared with selected partners only

---

## **2️⃣ JSON Server – Simulating a Real API** 🛠

**JSON Server** is a tool that lets you create a **fake REST API** from a simple JSON file.
It’s great for **learning, prototyping, and testing** without needing a backend.

---

### **Step-by-Step Guide to Use JSON Server** ⚙

#### **Step 1: Install JSON Server**

```bash
npm install -g json-server
```

or (locally in a project)

```bash
npm install json-server
```

---

#### **Step 2: Create a `db.json` File**

```json
{
  "products": [
    { "id": 1, "name": "Laptop", "price": 50000 },
    { "id": 2, "name": "Phone", "price": 25000 }
  ]
}
```

---

#### **Step 3: Start the Server**

```bash
json-server --watch db.json --port 5000
```

* API will run at:
  `GET http://localhost:5000/products`

---

#### **Step 4: Test in Postman**

* **GET:** `http://localhost:5000/products` → Fetch all products
* **POST:** `http://localhost:5000/products` → Add a new product
* **PUT/PATCH:** Update existing product
* **DELETE:** Remove a product

---

#### **Step 5: Example React Fetch**

```jsx
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>🛒 Product List</h1>
      {products.map(p => (
        <li key={p.id}>{p.name} - ₹{p.price}</li>
      ))}
    </div>
  );
}
```

---

## **3️⃣ Industry-Level Use Case**

* Frontend developers often **don’t have backend ready** in early stages.
* JSON Server helps to:

  * Mock API calls
  * Test CRUD operations
  * Share consistent fake data with team
* Once backend is ready, you just change the API URL.

---

## **📌 Key Differences Table**

| Feature     | REST API        | SOAP API | GraphQL                           | gRPC          |
| ----------- | --------------- | -------- | --------------------------------- | ------------- |
| Data Format | JSON/XML        | XML      | Custom Query                      | Protobuf      |
| Performance | Medium          | Low      | Medium-High                       | Very High     |
| Flexibility | Medium          | Low      | High                              | Low           |
| Common Use  | Web/Mobile Apps | Banking  | Modern apps needing specific data | Microservices |

