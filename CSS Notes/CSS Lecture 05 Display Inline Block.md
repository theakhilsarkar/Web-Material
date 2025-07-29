# 🎓 **CSS Lecture 05: Display Properties – Complete Guide**

---

## 📘 **What is `display` in CSS?**

The `display` property determines **how an element is rendered** on the web page. It's one of the most essential CSS properties for layout and structure.

---

## 🧱 **Basic Display Types**

### 1. `block`

* **Starts on a new line**, takes up full width.
* You can set `width`, `height`, `margin`, `padding`.
* Default for: `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, etc.

```html
<div style="display: block; background: #add8e6;">Block Element</div>
```

---

### 2. `inline`

* **Does not start on a new line**, takes only the space it needs.
* Cannot set `width` or `height`.
* Default for: `<span>`, `<a>`, `<b>`, `<i>`

```html
<span style="display: inline; background: yellow;">Inline Text</span>
```

---

### 3. `inline-block`

* Behaves like `inline` but **supports width and height**.
* Great for buttons, badges, or small card layouts.

```html
<div style="display: inline-block; width: 100px; height: 50px; background: orange;">
  Inline-Block Box
</div>
```

---

### 4. `none`

* **Completely hides** the element. It's removed from layout and flow.
* Unlike `visibility: hidden` (which keeps space).

```html
<div style="display: none;">Hidden Content</div>
```

---

## 🧩 **Advanced Display Types**

### 5. `flex`

* Enables **flexbox layout**, allowing you to align items easily in rows or columns.
* Parent becomes a **flex container**, and children become **flex items**.

```html
<div style="display: flex; gap: 10px;">
  <div style="background: #ffa;">Item 1</div>
  <div style="background: #aaf;">Item 2</div>
</div>
```

Use with properties like:

* `justify-content`
* `align-items`
* `flex-direction`

---

### 6. `grid`

* Creates a **two-dimensional layout**, perfect for web pages, galleries, and dashboards.

```html
<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px;">
  <div style="background: #f99;">Grid 1</div>
  <div style="background: #9f9;">Grid 2</div>
  <div style="background: #99f;">Grid 3</div>
</div>
```

Use with properties like:

* `grid-template-rows`, `grid-template-columns`
* `gap`, `grid-area`, `grid-row`, `grid-column`

---

### 7. `table`, `table-row`, `table-cell`

* Makes elements behave like HTML table elements.
* Useful when building table-like layouts without using actual `<table>`.

```html
<div style="display: table;">
  <div style="display: table-row;">
    <div style="display: table-cell; padding: 10px; background: #eee;">Cell 1</div>
    <div style="display: table-cell; padding: 10px; background: #ccc;">Cell 2</div>
  </div>
</div>
```

---

## 🧠 Summary Table

| Display Value  | Starts New Line | Can Set Width/Height | Layout Type   | Use Case                     |
| -------------- | --------------- | -------------------- | ------------- | ---------------------------- |
| `block`        | ✅               | ✅                    | Basic         | Layout sections/divs         |
| `inline`       | ❌               | ❌                    | Text flow     | Links, highlighted text      |
| `inline-block` | ❌               | ✅                    | Text + Layout | Buttons, labels, nav links   |
| `none`         | ❌               | ❌                    | Hidden        | Hide/show elements           |
| `flex`         | ❌               | ✅                    | 1D Layout     | Navbars, cards, UI alignment |
| `grid`         | ❌               | ✅                    | 2D Layout     | Complex layouts, galleries   |
| `table`        | ✅ (rows)        | ✅                    | Table-like    | Table-style layouts          |

---

## 🧪 Final Practical Code (All Display Types)

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .block {
      display: block;
      background: #f9c;
      padding: 10px;
    }

    .inline {
      display: inline;
      background: #ffc;
      padding: 5px;
    }

    .inline-block {
      display: inline-block;
      width: 100px;
      height: 60px;
      background: #cfc;
      margin: 5px;
    }

    .flexbox {
      display: flex;
      gap: 10px;
      background: #e0f7fa;
      padding: 10px;
    }

    .flexbox div {
      background: #80deea;
      padding: 10px;
      flex: 1;
    }

    .gridbox {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 10px;
      background: #fff3e0;
      padding: 10px;
    }

    .gridbox div {
      background: #ffb74d;
      padding: 10px;
    }

    .tablebox {
      display: table;
      width: 100%;
    }

    .tablerow {
      display: table-row;
    }

    .tablecell {
      display: table-cell;
      padding: 10px;
      border: 1px solid #999;
    }
  </style>
</head>
<body>

  <div class="block">Block Element</div>

  <span class="inline">Inline 1</span>
  <span class="inline">Inline 2</span>

  <div class="inline-block">Inline-Block A</div>
  <div class="inline-block">Inline-Block B</div>

  <div class="flexbox">
    <div>Flex Item 1</div>
    <div>Flex Item 2</div>
    <div>Flex Item 3</div>
  </div>

  <div class="gridbox">
    <div>Grid 1</div>
    <div>Grid 2</div>
    <div>Grid 3</div>
  </div>

  <div class="tablebox">
    <div class="tablerow">
      <div class="tablecell">Cell 1</div>
      <div class="tablecell">Cell 2</div>
    </div>
  </div>

</body>
</html>
```
