

# 📘 CSS Lecture 1 – Complete Guide

**Topic:** Introduction to CSS
**Includes:** History of CSS, Types of CSS, Text Properties, Selectors, and Practical Examples



## ✅ 1. What is CSS?

CSS (**Cascading Style Sheets**) is a styling language used to **control the look and feel** of HTML elements on a webpage.

It **separates content (HTML)** from **presentation (Design)**, making websites easier to maintain and visually appealing.



## 🏛 2. Brief History of CSS

* **1994** – CSS was proposed by *Håkon Wium Lie*.
* **1996** – CSS1 released by W3C.
* **1998** – CSS2 introduced with positioning, media types.
* **1999-2001** – CSS2.1 improved compatibility.
* **2011 onwards** – CSS3 introduced with modules (Flexbox, Grid, Animations).
* **Today** – CSS is still evolving with **CSS4 modules**.

## ✅ 3. Types of CSS

There are **three ways** to apply CSS:

### 🔹 **1. Inline CSS**

Applied directly inside HTML tags using the `style` attribute.
✅ Example:

```html
<p style="color: blue; font-size: 18px;">This is inline CSS</p>
```

**Use Case:** Quick styling, testing.
**Drawback:** Hard to maintain, not reusable.



### 🔹 **2. Internal CSS**

Defined inside `<style>` tag in `<head>`.
✅ Example:

```html
<head>
  <style>
    p {
      color: green;
      font-size: 20px;
    }
  </style>
</head>
```

**Use Case:** Single-page websites.
**Drawback:** Not reusable across multiple pages.



### 🔹 **3. External CSS**

Defined in a separate `.css` file and linked using `<link>`.
✅ Example:
**HTML File:**

```html
<link rel="stylesheet" href="styles.css">
<p>This text will use external CSS</p>
```

**styles.css:**

```css
p {
  color: red;
  font-size: 22px;
}
```

**Use Case:** Large projects.
**Advantage:** Clean and reusable.



## ✅ 4. CSS Selectors

Selectors define which HTML elements to style:

* **Tag Selector:** `p { color: blue; }`
* **Class Selector:** `.myClass { color: green; }`
* **ID Selector:** `#myId { color: red; }`



## ✅ 5. Text Properties in CSS

Below are the common **text-related CSS properties**:

| Property          | Description                    | Example                           |
| ----------------- | ------------------------------ | --------------------------------- |
| `font-family`     | Font type                      | `font-family: Arial, sans-serif;` |
| `font-size`       | Size of text                   | `font-size: 18px;`                |
| `font-weight`     | Boldness                       | `font-weight: bold;`              |
| `font-style`      | Italic style                   | `font-style: italic;`             |
| `text-align`      | Alignment                      | `text-align: center;`             |
| `text-transform`  | Uppercase/Lowercase/Capitalize | `text-transform: uppercase;`      |
| `text-decoration` | Underline, line-through        | `text-decoration: underline;`     |
| `line-height`     | Space between lines            | `line-height: 1.5;`               |
| `letter-spacing`  | Space between letters          | `letter-spacing: 2px;`            |
| `word-spacing`    | Space between words            | `word-spacing: 5px;`              |
| `color`           | Text color                     | `color: blue;`                    |



## ✅ 6. List Properties

Used for styling lists:

* `list-style-type: circle;`
* `list-style-image: url('icon.png');`
* `list-style-position: inside;`



## ✅ 7. Practical Example – CSS Types & Text Properties

```html
<!DOCTYPE html>
<html>
<head>
  <title>CSS Example</title>
  <style>
    /* Internal CSS */
    h1 {
      text-align: center;
      color: darkblue;
      text-transform: uppercase;
    }
    .highlight {
      color: green;
      font-size: 20px;
      font-weight: bold;
    }
    #special {
      color: red;
      text-decoration: underline;
      letter-spacing: 3px;
    }
  </style>
  <link rel="stylesheet" href="style.css"> <!-- External CSS -->
</head>
<body>
  <h1>Welcome to CSS Lecture</h1>
  <p class="highlight">This paragraph uses class selector.</p>
  <p id="special">This paragraph uses ID selector.</p>
  <p style="color: purple; font-style: italic;">This paragraph uses inline CSS.</p>
</body>
</html>
```

**External CSS File (style.css):**

```css
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
  line-height: 1.6;
}
```

## ✅ 8. Key Points for Developers

✔ Always **keep CSS in a separate file** for better maintenance.
✔ Use **classes** instead of IDs for styling multiple elements.
✔ Follow **responsive design principles** (use `em`, `rem`, `%` instead of fixed `px`).
✔ Always **test CSS on multiple browsers**.
