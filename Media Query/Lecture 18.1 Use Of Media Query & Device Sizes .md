
# 📘 Introduction to Media Queries

A **media query** in CSS allows you to apply styles depending on the **device type** (screen, print, etc.) and its **characteristics** (like width, height, orientation, resolution).

It’s mostly used in **Responsive Web Design** (RWD) to make web pages look good on **desktop, laptop, tablet, and mobile devices**.

---

## 🔹 Viewport Meta Tag

Before media queries can work properly on mobile devices, you must add this line inside your HTML `<head>`:

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

✔ This tells the browser:

* Use the **device’s screen width** instead of scaling down the desktop version.
* `initial-scale=1.0` ensures the zoom level starts at 100%.

---

## 🔹 Breakpoints (Common Device Sizes)

Websites adapt their design at certain **breakpoints** (specific widths). Frameworks like **Bootstrap** use standard breakpoints:

| Breakpoint | Devices (examples)            | CSS width |
| ---------- | ----------------------------- | --------- |
| **xs**     | Extra small (portrait phones) | `<576px`  |
| **sm**     | Small (landscape phones)      | `≥576px`  |
| **md**     | Medium (tablets)              | `≥768px`  |
| **lg**     | Large (desktops)              | `≥992px`  |
| **xl**     | Extra large (large desktops)  | `≥1200px` |
| **xxl**    | Very large screens / TVs      | `≥1400px` |

---

## 🔹 Media Query Syntax

Basic format:

```css
@media (condition) {
  /* CSS rules here */
}
```

Examples of conditions:

* `max-width` → apply styles when screen is smaller than X px
* `min-width` → apply styles when screen is larger than X px
* `orientation` → landscape or portrait

---

## 🔹 Practical Example

Imagine a **single heading** that changes its style depending on device size.

### HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Query Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Responsive Heading</h1>
</body>
</html>
```

### CSS (style.css)

```css
/* Default (desktop first) */
h1 {
  font-size: 40px;
  color: navy;
  text-align: center;
}

/* For tablets (medium devices) */
@media (max-width: 992px) {
  h1 {
    font-size: 32px;
    color: darkgreen;
  }
}

/* For mobile landscape */
@media (max-width: 768px) {
  h1 {
    font-size: 24px;
    color: orange;
  }
}

/* For mobile portrait */
@media (max-width: 576px) {
  h1 {
    font-size: 18px;
    color: red;
  }
}
```

---

## 🔹 How It Works

* On a **desktop (≥992px)** → heading is **40px navy**
* On a **tablet (768px–991px)** → heading is **32px darkgreen**
* On a **mobile landscape (577px–767px)** → heading is **24px orange**
* On a **mobile portrait (≤576px)** → heading is **18px red**

Try resizing the browser window or testing on Chrome DevTools (press **F12 → Toggle device toolbar**).

---

## 🔹 Orientation Example

You can also style based on **landscape/portrait**:

```css
@media (orientation: landscape) {
  body {
    background: lightblue;
  }
}

@media (orientation: portrait) {
  body {
    background: lightcoral;
  }
}
```

---

✅ **Summary:**

* Always use the **viewport meta tag**.
* Use **media queries** with `min-width`, `max-width`, and `orientation`.
* Adjust design at **breakpoints** for responsive layouts.
* Test with **DevTools device simulator**.
