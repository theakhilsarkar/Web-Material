# 🌐 **HTML Basics - Complete Documentation**

---

## 🧱 1. HTML Structure

Every HTML page follows a basic structure:

```html
<!DOCTYPE html> <!-- HTML5 Declaration -->
<html>
  <head>
    <title>Page Title</title>
  </head>
  <body>
    <!-- Visible content goes here -->
  </body>
</html>
```

| Tag               | Purpose                          |
| ----------------- | -------------------------------- |
| `<!DOCTYPE html>` | Declares HTML5 version           |
| `<html>`          | Root of the document             |
| `<head>`          | Metadata, title, links to CSS/JS |
| `<title>`         | Sets the browser tab title       |
| `<body>`          | Holds all visible content        |

---

## 🧩 2. Block-Level Elements

Block elements **occupy the full width** of their container and start on a **new line**.

| Tag              | Description                             |
| ---------------- | --------------------------------------- |
| `<h1>` to `<h6>` | Headings (from most important to least) |
| `<p>`            | Paragraph                               |
| `<hr/>`          | Horizontal line (thematic break)        |
| `<br/>`          | Line break                              |
| `<ul>`           | Unordered List (bullets)                |
| `<ol>`           | Ordered List (numbers)                  |
| `<li>`           | List item                               |
| `<dl>`           | Description List                        |
| `<dt>`           | Description Term                        |
| `<dd>`           | Description Definition                  |

### ✅ Example:

```html
<h2>Shopping List</h2>
<ul>
  <li>Bread</li>
  <li>Milk</li>
</ul>
<ol type="A" start="3">
  <li>Install Software</li>
  <li>Start Coding</li>
</ol>
```

---

## 🎯 3. Common Attributes

Attributes add **extra meaning or behavior** to HTML tags.

| Attribute     | Commonly Used In          | Purpose                                 |
| ------------- | ------------------------- | --------------------------------------- |
| `type="..."`  | `<ol>`, `<ul>`, `<input>` | Defines type                            |
| `start="..."` | `<ol>`                    | Sets starting number                    |
| `align="..."` | (Deprecated)              | Aligns text (`left`, `right`, `center`) |

---

## 🧵 4. Inline Elements

Inline elements **don’t break lines**, only take up the space they need.

| Tag        | Meaning                 |
| ---------- | ----------------------- |
| `<i>`      | Italics                 |
| `<em>`     | Emphasized text         |
| `<b>`      | Bold                    |
| `<strong>` | Strong importance       |
| `<big>`    | Larger font             |
| `<small>`  | Smaller font            |
| `<sub>`    | Subscript               |
| `<sup>`    | Superscript             |
| `<u>`      | Underline               |
| `<ins>`    | Inserted text           |
| `<del>`    | Deleted (strikethrough) |
| `<s>`      | Strikethrough           |
| `<mark>`   | Highlight               |

### ✅ Example:

```html
<p>This is <b>bold</b>, <i>italic</i>, and <u>underlined</u> text.</p>
<p>Water formula: H<sub>2</sub>O</p>
<p>Square of X: X<sup>2</sup></p>
<p>This is <mark>highlighted</mark> text.</p>
```

---

## 💡 Creative Summary in One Block

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Demo</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is a <strong>basic</strong> HTML structure. Let's <em>explore</em> more!</p>

    <hr/>

    <h2>Types of Fruits</h2>
    <ul type="circle">
      <li>Apple</li>
      <li>Banana</li>
    </ul>

    <h2>Steps to Learn</h2>
    <ol type="A" start="2">
      <li>Understand Tags</li>
      <li>Practice Daily</li>
    </ol>

    <p>Water Formula: H<sub>2</sub>O | Power: x<sup>2</sup></p>
    <p>This text is <mark>important</mark>.</p>
  </body>
</html>
```
## 💡 Lab Work

🔗 **Read-only Link:**
[https://docs.google.com/document/d/13y8RlvZH9BH\_CXspofsfxNjqedcgPxHA3KSlVjmj0J4/view](https://docs.google.com/document/d/13y8RlvZH9BH_CXspofsfxNjqedcgPxHA3KSlVjmj0J4/view)


