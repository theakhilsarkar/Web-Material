## 📌 What is DOM? - Create Element & Appen Child

**DOM (Document Object Model)** is a way to access and manipulate HTML elements using JavaScript.
It lets us **add, remove, or change content and structure** of web pages dynamically.


## 🧠 DOM Concepts Used in This Code

Let's understand each important concept/method used in your examples:

---

### 1️⃣ `document.getElementById("id")`

🔍 **Use**: To select an HTML element by its ID.

🧾 **Example**:

```js
const counter = document.getElementById("counter");
```

🎯 **Why we use it**: So we can perform actions like adding child elements or changing its content.

---

### 2️⃣ `document.querySelector("selector")`

🔍 **Use**: To select the **first matching element** using CSS-style selectors (like `#id`, `.class`, `tag`).

🧾 **Example**:

```js
const input = document.querySelector("#input");
```

🎯 **Why we use it**: More flexible and powerful for targeting elements.

---

### 3️⃣ `document.createElement("tag")`

🔧 **Use**: To **create a new HTML element** in JavaScript.

🧾 **Example**:

```js
const span = document.createElement("span");
```

🎯 **Why we use it**: When we want to add new tags dynamically to the webpage.

---

### 4️⃣ `.textContent`

📝 **Use**: To set or get **only the text** inside an element (without HTML formatting).

🧾 **Example**:

```js
span.textContent = value;
```

🎯 **Why we use it**: To safely insert text without worrying about HTML injection.

---

### 5️⃣ `.appendChild()`

🔗 **Use**: To **insert a new child** element into a parent element.

🧾 **Example**:

```js
counter.appendChild(span);
```

🎯 **Why we use it**: Adds the created element to the page visually.

---

### 6️⃣ `.value`

🧪 **Use**: To get or set the **value** entered in input fields.

🧾 **Example**:

```js
const value = input.value;
```

🎯 **Why we use it**: Needed to get user input from forms or text boxes.

---

### 7️⃣ `.addEventListener('event', function)`

🔔 **Use**: To run some code **when an event happens**, like clicking a button.

🧾 **Example**:

```js
button.addEventListener('click', () => {
  // do something
});
```

🎯 **Why we use it**: It's how websites **respond to user actions**.

---

## 💡 Real Code Examples

---

### 🧮 Row Counter (Add numbers one by one)

```js
const counter = document.getElementById("counter");
const add = document.getElementById("add");
let count = 0;

add.addEventListener('click', () => {
    count++;
    const span = document.createElement("span");
    span.textContent = count;
    counter.appendChild(span);
});
```

👆 Every time user clicks the button, a number is added using DOM methods.

---

### 📝 Note Maker (Input to Paragraph)

```js
const input = document.querySelector("#input");
const button = document.querySelector("#add");
const output = document.querySelector("#output");

button.addEventListener('click', () => {
    const value = input.value;
    const span = document.createElement("p");
    span.textContent = value;
    output.appendChild(span);
    input.value = "";
});
```

👆 Whatever user types is shown as a new paragraph.

---

### 💬 Quotes Display (Author & Quote)

```js
const container = document.querySelector(".container");

quotesList.forEach((quote) => {
    const div = document.createElement("div");
    const q = document.createElement("p");
    const a = document.createElement("p");

    q.textContent = quote.quote;
    a.textContent = "- " + quote.author;

    div.appendChild(q);
    div.appendChild(a);

    container.appendChild(div);
});
```

👆 Automatically shows all quotes from a list using `forEach()` and DOM.

---

## ❓ Quiz Based on This Documentation

Test yourself or your students with these simple questions based on the examples above.

### Q1. 🤔 Which method is used to create a new HTML element in JS?

* A. `createHtml()`
* B. `makeElement()`
* C. `createElement()` ✅ (Correct)
* D. `makeTag()`

---

### Q2. 🧠 What does `.textContent` do?

* A. Inserts HTML
* B. Removes text
* C. Sets/gets text content ✅ (Correct)
* D. Adds styles

---

### Q3. 💡 What is `appendChild()` used for?

* A. Removing children
* B. Adding new element into parent ✅ (Correct)
* C. Selecting a child
* D. Changing styles

---

### Q4. 💬 Which event is handled using `addEventListener('click', ... )`?

* A. Form submission
* B. Page load
* C. Button click ✅ (Correct)
* D. Mouse hover

---

### Q5. 🧪 How do you access the value entered in an input field?

* A. `input.text`
* B. `input.value` ✅ (Correct)
* C. `input.data`
* D. `getValue(input)`
