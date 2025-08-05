# 🎓 CSS Lecture 06: **Selectors and Pseudo Classes/Elements**

---

## 🔹 What Are Selectors?

CSS **selectors** are used to target **HTML elements** you want to style.

---

## 🧱 1. **Basic Selectors**

### ✅ `div`

* Selects **all `<div>` elements**.

```css
div {
  background-color: lightblue;
}
```

### ✅ `p`

* Selects **all `<p>` (paragraph) elements**.

```css
p {
  font-size: 16px;
}
```

### ✅ `div p`

* Selects **all `<p>` inside `<div>`**, at any level.

```css
div p {
  color: green;
}
```

### ✅ `div > p`

* Selects **only direct `<p>` children** of `<div>`.

```css
div > p {
  font-weight: bold;
}
```

---

## 🌀 2. **Pseudo-Elements**

### ✅ `::first-letter`

* Styles the **first letter** of a text block.

```css
p::first-letter {
  font-size: 200%;
  color: red;
}
```

### ✅ `::first-line`

* Styles the **first line** of a paragraph.

```css
p::first-line {
  font-weight: bold;
}
```

### ✅ `::selection`

* Styles text when a user selects it (highlight).

```css
p::selection {
  background-color: yellow;
  color: black;
}
```

---

## 🔸 3. **Pseudo-Classes (Dynamic Position Selectors)**

### ✅ `:first-child`

* Selects the **first child** of a parent.

```css
div p:first-child {
  color: blue;
}
```

### ✅ `:last-child`

* Selects the **last child** of a parent.

```css
div p:last-child {
  color: orange;
}
```

### ✅ `:nth-child(n)`

* Selects the **nth child** of its parent (1-based index).

```css
ul li:nth-child(2) {
  color: green;
}
```

### ✅ `:nth-last-child(n)`

* Selects the **nth child from the end**.

```css
ul li:nth-last-child(1) {
  font-style: italic;
}
```

---

## 🧪 Practical Example (All Included)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <style>
    div {
      padding: 10px;
      background: #eef;
      margin-bottom: 20px;
    }

    div p {
      color: black;
    }

    div > p {
      font-weight: bold;
    }

    p::first-letter {
      font-size: 24px;
      color: red;
    }

    p::first-line {
      text-transform: uppercase;
    }

    p::selection {
      background: yellow;
      color: black;
    }

    .list-items li:first-child {
      color: green;
    }

    .list-items li:last-child {
      color: red;
    }

    .list-items li:nth-child(2) {
      font-weight: bold;
    }

    .list-items li:nth-last-child(2) {
      font-style: italic;
    }
  </style>
</head>
<body>

  <div>
    <p>This is a direct paragraph inside div.</p>
    <span>
      <p>This is nested inside span inside div.</p>
    </span>
  </div>

  <ul class="list-items">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
  </ul>

</body>
</html>
```

---

## 📊 Summary Table

| Selector             | Description                | Use Case Example              |
| -------------------- | -------------------------- | ----------------------------- |
| `div`                | Select all divs            | General container styling     |
| `p`                  | Select all paragraphs      | Typography changes            |
| `div p`              | All `<p>` inside `<div>`   | Nested paragraph styling      |
| `div > p`            | Direct child `<p>` only    | Avoid deep nesting targeting  |
| `::first-letter`     | First letter of text       | Stylish headlines             |
| `::first-line`       | First line of text         | Emphasize opening             |
| `::selection`        | Highlighted text           | Custom selection color        |
| `:first-child`       | First child of parent      | First item styling            |
| `:last-child`        | Last child of parent       | End element highlighting      |
| `:nth-child(n)`      | Specific position          | Zebra stripes, alternate rows |
| `:nth-last-child(n)` | From end specific position | Target recent elements        |

