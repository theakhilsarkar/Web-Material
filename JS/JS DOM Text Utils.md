
## 📘 TextUtils - DOM Project Documentation

### 🌟 Project Name: TextUtils - DOM Practice Tool

> A simple and interactive web tool built using **HTML, Bootstrap & JavaScript** to manipulate and analyze text input. It's a great project to learn and practice **DOM (Document Object Model)** methods like `getElementById`, `addEventListener`, and `style` manipulation.

---

### 🔧 Technologies Used

* 🟦 **HTML**
* 🎨 **Bootstrap 5** (for layout & styling)
* 🟨 **JavaScript (Vanilla)**

---

### 💻 How It Works

#### 🧾 User can:

* 🖊 **Enter text** in a textarea
* ⬆️ **Convert to Upper Case**
* ➕ **Add Text** to preview
* 🧹 **Clear the Text**
* 🔢 See **Word Count**, **Character Count**, and **Estimated Read Time**

---

### 🧠 DOM Concepts Practiced

| DOM Method           | Purpose                                                                  |
| -------------------- | ------------------------------------------------------------------------ |
| `getElementById()`   | To select specific elements (like input box, buttons, output paragraphs) |
| `addEventListener()` | To trigger actions when a user clicks a button                           |
| `.textContent`       | To display or update text on the page                                    |
| `.value`             | To get or set the value of the textarea                                  |
| `.split()`           | To split text into an array (used for word count)                        |
| `.toUpperCase()`     | To transform string to upper case                                        |

---

## 📁 Files Included

```
/Text-Utils
│
├── index.html     ➤ UI layout using Bootstrap
├── script.js      ➤ JavaScript logic and DOM manipulation
└── README.md      ➤ Project explanation (with output video)
```

---

### ✅ How to Use

#### 1. 📝 Type text into the **textarea**

#### 2. 🔵 Click **Add Text** → Shows text in preview and displays:

* Total Characters
* Total Words (split by ` ` space)
* Read Time (0.25s per word)

#### 3. 🟡 Click **To Upper Case** → Converts preview text to uppercase

#### 4. 🔴 Click **Clear Text** → Clears input and preview

---

### 🔍 Code Explanation

#### 📜 HTML Snippet:

```html
<textarea class="form-control" id="input"></textarea>
<button class="btn btn-primary" id="addBtn">Add Text</button>
<p id="preview"></p>
<p id="words"></p>
<p id="char"></p>
<p id="time"></p>
```

#### 📘 JS Summary:

```js
// DOM Selection
const input = document.getElementById("input");
const addBtn = document.getElementById("addBtn");

// Event: Add Text
addBtn.addEventListener('click', () => {
  const newText = input.value;
  preview.textContent = newText;
  char.textContent = "Total Characters : " + newText.length;

  // Splitting using spaces (can improve to use space)
  const textArray = newText.split(" ");
  words.textContent = "Total Words : " + textArray.length;
  time.textContent = "Time to read : " + textArray.length * 0.25 + "s";
});
```

---

✅ Let's improve by using **space (" ")** for word split and removing empty words:

```js
const textArray = newText.trim().split(/\s+/); // split by any whitespace
const wordCount = textArray.filter(word => word !== "").length;
```

✅ You can format the reading time in `mm:ss` using:

```js
let seconds = wordCount * 0.25;
let mins = Math.floor(seconds / 60);
let sec = Math.floor(seconds % 60);
time.textContent = `Reading Time: ${mins}m ${sec}s`;
```

---

### 📚 Final Thoughts

This project helps you:

* 💪 Build strong understanding of **DOM selection and manipulation**
* 🎯 Practice real-world event-driven programming
* 🧩 Work with string and array methods
* 🛠 Design UI with Bootstrap

---

### 🏁 Conclusion

**TextUtils** is a great beginner project to play with text and learn DOM! 🧠💻
Keep building more tools like word counter, to-do list, or quiz apps using the same techniques! 🚀
