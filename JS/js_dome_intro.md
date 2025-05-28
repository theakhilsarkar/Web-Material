# 📘 DOM (Document Object Model) - Complete Guide

The **DOM (Document Object Model)** is a programming interface for web documents. It represents the structure of a webpage so that programs (like JavaScript) can change the document structure, style, and content.

---

## 📖 What is the DOM?

* DOM stands for **Document Object Model**.
* It is a **tree-like structure** where each node represents part of the page.
* The DOM allows **JavaScript to access and manipulate HTML and CSS**.

### 🧠 Real Life Example:

Think of your HTML page as a house and DOM as its blueprint. JavaScript is like an interior designer who reads the blueprint and modifies furniture, walls, colors (elements, text, styles).

---

## 🏗️ DOM Tree Example

```html
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a paragraph.</p>
  </body>
</html>
```

Structure:

* Document

  * html

    * head

      * title
    * body

      * h1
      * p

---

## 🔧 Accessing DOM Elements

### 1. `getElementById()`

* 📌 Selects an element by its ID.

```js
let title = document.getElementById("main-title");
title.style.color = "red";
```

### 2. `getElementsByClassName()`

* 📌 Returns a collection of all elements with a given class name.

```js
let items = document.getElementsByClassName("item");
items[0].style.backgroundColor = "yellow";
```

### 3. `getElementsByTagName()`

* 📌 Returns all elements with a specific tag name.

```js
let paras = document.getElementsByTagName("p");
console.log(paras.length);
```

### 4. `querySelector()`

* 📌 Returns the **first** matching element using CSS selector.

```js
let heading = document.querySelector("h1");
heading.innerText = "Updated Title";
```

### 5. `querySelectorAll()`

* 📌 Returns **all** matching elements as a NodeList.

```js
let allDivs = document.querySelectorAll("div");
allDivs.forEach(div => div.style.border = "1px solid black");
```

---

## 🛠️ Manipulating DOM Elements

### 🔄 Change Text

```js
document.getElementById("main").innerText = "Welcome to DOM";
```

### 🎨 Change Styles

```js
document.querySelector("p").style.color = "blue";
```

### ➕ Add Elements

```js
let newDiv = document.createElement("div");
newDiv.innerText = "I am new!";
document.body.appendChild(newDiv);
```

### ❌ Remove Elements

```js
let para = document.querySelector("p");
para.remove();
```

---

## 🎯 Event Handling

Events are actions like click, hover, input, etc.

### Example: Click Event

```html
<button id="clickMe">Click Me</button>
```

```js
document.getElementById("clickMe").addEventListener("click", function() {
  alert("Button Clicked!");
});
```

### Example: Mouseover

```js
document.getElementById("clickMe").addEventListener("mouseover", function() {
  console.log("Mouse is over the button");
});
```

---

## 💼 Practical Example

### Form Validation

```html
<form onsubmit="return validateForm()">
  <input type="text" id="username" />
  <button type="submit">Submit</button>
</form>
```

```js
function validateForm() {
  let user = document.getElementById("username").value;
  if (user === "") {
    alert("Username is required!");
    return false;
  }
  return true;
}
```

---

## 🧰 Most Useful DOM Methods

| Method               | Description                        |
| -------------------- | ---------------------------------- |
| `getElementById()`   | Get element by ID                  |
| `querySelector()`    | Get first match using CSS selector |
| `createElement()`    | Create new HTML element            |
| `appendChild()`      | Add element at the end             |
| `removeChild()`      | Remove child element               |
| `innerText`          | Get/Set text content               |
| `innerHTML`          | Get/Set HTML content               |
| `classList.add()`    | Add class to element               |
| `classList.remove()` | Remove class from element          |
| `setAttribute()`     | Set attribute like href, id        |

---

## 🚀 Real Life Use Cases

* Changing themes in a webpage
* Form validations before submit
* Showing/hiding modals and popups
* Live search filters
* Building dynamic dashboards

---

> 📝 DOM makes your webpage interactive. Without DOM, your HTML is just a static page!
