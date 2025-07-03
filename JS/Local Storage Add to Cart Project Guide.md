
## 🛒 Add to Cart using Local Storage – JavaScript DOM Project

### 📚 Project Summary

This project helps students understand how to:

* Create an Add to Cart system using JavaScript.
* Store cart items in **Local Storage**.
* Work with **DOM manipulation**, **events**, and **dynamic HTML rendering**.

### 📁 Folder Structure

```
add-to-cart-project/
│
├── index.html         # Main HTML page
├── style.css          # Optional styling
└── script.js          # Core logic (DOM + Local Storage)
```

---

### 🔧 Technologies Used

* HTML
* CSS (optional, for UI)
* JavaScript (DOM + Local Storage)

---

## 🔥 Features

| Feature        | Description                                             |
| -------------- | ------------------------------------------------------- |
| Add Product    | Click "Add to Cart" → product is saved in Local Storage |
| View Cart      | Products are fetched from Local Storage and shown       |
| Delete Product | Removes selected product from Local Storage             |
| Clear Cart     | Removes **all** items from Local Storage                |

---

## 🧠 JavaScript Logic Breakdown

### ✅ Product Structure

Each product is stored as an object:

```js
{
  name: "Product Name",
  price: "Product Price",
  image: "Image URL"
}
```

### 📥 1. Add Product to Cart

```js
function addToCart(name, price, image) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.push({ name, price, image });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  showCart(); // updates cart UI
}
```

**Explanation:**

* `JSON.parse()` reads cart from Local Storage.
* `cartItems.push()` adds a new item.
* `JSON.stringify()` stores the updated array back.
* `showCart()` re-renders the cart list.

---

### 🖥️ 2. Show Cart Items

```js
function showCart() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let cartList = document.getElementById("cartList");
  cartList.innerHTML = "";

  cartItems.forEach((item, index) => {
    cartList.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}" width="50">
        <p>${item.name} - ₹${item.price}</p>
        <button onclick="deleteItem(${index})">❌ Delete</button>
      </div>
    `;
  });

  document.getElementById("cartCount").textContent = cartItems.length;
}
```

**Explanation:**

* Loops through `cartItems[]` and renders each item using template literals.
* Shows image, name, price, and a delete button.
* `cartCount` shows how many items are in the cart.

---

### 🗑️ 3. Delete Individual Item

```js
function deleteItem(index) {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  cartItems.splice(index, 1);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  showCart();
}
```

**Explanation:**

* `splice(index, 1)` removes the clicked item.
* Then re-updates the cart in Local Storage.
* Cart is re-rendered.

---

### 🧹 4. Clear Cart

```js
function clearCart() {
  localStorage.removeItem("cartItems");
  showCart();
}
```

**Explanation:**

* `removeItem()` clears everything from Local Storage for the cart.
* Then refreshes the UI with `showCart()`.

---

### ✨ HTML Snippets

```html
<h2>Available Products</h2>
<div id="productSection">
  <div>
    <h3>Book</h3>
    <img src="book.jpg">
    <p>₹150</p>
    <button onclick="addToCart('Book', 150, 'book.jpg')">Add to Cart</button>
  </div>
</div>

<h2>🛒 Cart (<span id="cartCount">0</span>)</h2>
<div id="cartList"></div>
<button onclick="clearCart()">Clear Cart</button>
```

---

## 🎯 Learning Outcomes

✅ Understand:

* `localStorage` (get, set, remove)
* JSON `stringify()` and `parse()`
* DOM access: `getElementById`, `innerHTML`, `textContent`
* Creating dynamic HTML via JavaScript
* Using `onclick` and custom functions

---

## 🧪 Bonus Student Tasks

1. **Add Quantity Counter**
2. **Add Total Price Calculation**
3. **Store Products in an API (advanced)**
4. **Build a responsive UI using Bootstrap**
