# 📘 **Lecture 07: CSS Selectors & Pseudo-Elements**

This lecture covers important CSS selectors and pseudo-elements like `div`, `p`, `div p`, `div > p`, `:first-letter`, `:first-line`, `:first-child`, `:last-child`, `:nth-child()`, `:nth-last-child()`, and `::selection`.

---

## 🔹 1. Basic Selectors

### ✅ `div`

Selects **all `<div>`** elements.

```css
div {
  background-color: lightblue;
}
```

---

### ✅ `p`

Selects **all `<p>`** elements.

```css
p {
  color: darkblue;
}
```

---

## 🔹 2. Combinator Selectors

### ✅ `div p` (Descendant Selector)

Selects all `<p>` elements **inside** any `<div>` (at any depth).

```css
div p {
  font-style: italic;
}
```

---

### ✅ `div > p` (Child Selector)

Selects `<p>` elements that are **direct children** of `<div>` only.

```css
div > p {
  font-weight: bold;
}
```

---

## 🔹 3. Pseudo-Elements

### ✅ `:first-letter`

Applies styles to the **first letter** of the text in an element.

```css
p::first-letter {
  font-size: 2rem;
  color: red;
}
```

---

### ✅ `:first-line`

Applies styles to the **first line** of text in a block-level element.

```css
p::first-line {
  font-weight: bold;
  color: green;
}
```

---

## 🔹 4. Pseudo-Classes (Structural Selectors)

### ✅ `:first-child`

Targets the **first child** of a parent.

```css
p:first-child {
  background: yellow;
}
```

---

### ✅ `:last-child`

Targets the **last child** of a parent.

```css
p:last-child {
  background: lightcoral;
}
```

---

### ✅ `:nth-child(n)`

Selects the **nth child** of a parent.

```css
li:nth-child(2) {
  color: red;
}
```

You can use:

* `:nth-child(odd)` – all odd items
* `:nth-child(even)` – all even items
* `:nth-child(3n)` – every 3rd element

---

### ✅ `:nth-last-child(n)`

Selects the **nth child from the end**.

```css
li:nth-last-child(2) {
  color: blue;
}
```

---

## 🔹 5. `::selection` (Text Highlight Style)

Styles the text when it is **selected by the user** (like dragging with a mouse).

```css
::selection {
  background: black;
  color: white;
}
```

---

## ✅ Full Example (HTML + CSS)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    div {
      padding: 10px;
      border: 2px solid #333;
    }

    div p {
      color: purple;
    }

    div > p {
      background: lightgray;
    }

    p::first-letter {
      font-size: 200%;
      color: red;
    }

    p::first-line {
      font-weight: bold;
      color: green;
    }

    p:first-child {
      background-color: yellow;
    }

    p:last-child {
      background-color: coral;
    }

    p:nth-child(2) {
      font-style: italic;
    }

    p:nth-last-child(2) {
      text-decoration: underline;
    }

    ::selection {
      background: black;
      color: white;
    }
  </style>
</head>
<body>

  <div>
    <p>I'm the first paragraph.</p>
    <p>I'm the second paragraph.</p>
    <section>
      <p>I'm inside a section, still within the div.</p>
    </section>
    <p>I'm the last paragraph.</p>
  </div>

</body>
</html>
```

---

## 🎓 Summary Table

| Selector             | Description                          |
| -------------------- | ------------------------------------ |
| `div`                | Selects all `<div>` tags             |
| `p`                  | Selects all `<p>` tags               |
| `div p`              | All `<p>` inside `<div>` (any depth) |
| `div > p`            | Direct `<p>` child of `<div>`        |
| `::first-letter`     | First letter of text                 |
| `::first-line`       | First line of text                   |
| `:first-child`       | First child of parent                |
| `:last-child`        | Last child of parent                 |
| `:nth-child(n)`      | nth child (1-based index)            |
| `:nth-last-child(n)` | nth child from end                   |
| `::selection`        | Selected text                        |
