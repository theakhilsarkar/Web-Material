# 🎨 Random Color Generator - JavaScript DOM Project

## 📌 Project Overview

This simple project demonstrates how to use DOM manipulation in JavaScript to:

* Generate random colors on button click 🎲
* Change the background color of the webpage 🎨
* Show the color code on the button itself 🔤
* (Optionally) Copy the color code to clipboard 📋

---

## ⚙️ Technologies Used

* HTML5
* JavaScript (Vanilla)
* DOM (Document Object Model)

---

## 🧠 DOM Concepts Covered

| Concept                  | Description                        |
| ------------------------ | ---------------------------------- |
| `getElementById()`       | Access elements using their ID.    |
| `.textContent`           | Modify the text inside an element. |
| `.addEventListener()`    | Add event to a DOM element.        |
| `.style.backgroundColor` | Dynamically change styles.         |

---

## 💻 Live Project Flow

1. Click the **"Generate Color"** button.
2. A random hex color will be generated.
3. The background will change to that color.
4. The hex code will appear as button text.

---

## 🧾 HTML Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Random Color Generator</title>
  <style>
    body {
      text-align: center;
      padding: 50px;
      transition: background-color 0.5s ease;
    }

    #submit-btn {
      padding: 15px 30px;
      font-size: 1.2rem;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      background-color: #444;
      color: #fff;
    }
  </style>
</head>
<body>
  <h1>🎨 Random Color Generator</h1>
  <button id="submit-btn">Generate Color</button>

  <script src="script.js"></script>
</body>
</html>
```

---

## 📜 JavaScript Code (script.js)

```js
const submit = document.getElementById("submit-btn");

submit.addEventListener('click', () => {
  // Generate random number from 0 to 16777215 (max hex color)
  let randomNumber = Math.floor(Math.random() * 16777216);
  
  // Convert number to hexadecimal and prepend #
  let color = "#" + randomNumber.toString(16).padStart(6, '0');

  // Update button text
  submit.textContent = color;

  // Change background color
  document.body.style.backgroundColor = color;
});
```

---

## 🧪 How DOM is Used Here?

| Element/Method Used              | Purpose                                             |
| -------------------------------- | --------------------------------------------------- |
| `getElementById("submit-btn")`   | To select the Generate button 🎯                    |
| `addEventListener('click', ...)` | To listen for clicks on the button 🖱️              |
| `textContent`                    | To show the hex color on the button                 |
| `style.backgroundColor`          | To change the page background color dynamically 🖌️ |

---

## 🧩 Optional Bonus Feature

Add this line to copy the color code to clipboard:

```js
navigator.clipboard.writeText(color);
```

You can also add a tooltip or toast that says “Copied!” when clicked.

---

## 📦 Output Example

* Hex Color: `#3af5cd`
* Background changes to mint
* Button now says `#3af5cd`
