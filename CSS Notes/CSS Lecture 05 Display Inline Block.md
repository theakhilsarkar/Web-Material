
# 🎓 **CSS Lecture 05: Display Properties**

---

## 📖 **Introduction to Display in CSS**

The `display` property in CSS determines how an element is visually represented and behaves in the layout. It is one of the most commonly used properties to control **how elements are rendered in the document flow**.

---

## 🏷️ **Common Display Values**

### ✅ 1. `block`

* **Definition:** Elements with `display: block` take up the full width available, starting on a new line.
* **Examples of Block Elements:** `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<article>`

#### 🧠 Features:

* Always starts on a new line.
* Can set `width`, `height`, `margin`, `padding`.
* Stretches to full width of parent container by default.

#### 🧪 Example:

```html
<div style="display: block; background-color: lightblue; width: 300px;">
  This is a block element.
</div>
```

---

### ✅ 2. `inline`

* **Definition:** Elements with `display: inline` do **not start on a new line** and take up only as much width as necessary.
* **Examples of Inline Elements:** `<span>`, `<a>`, `<b>`, `<i>`

#### 🧠 Features:

* Cannot set `width` and `height`.
* Flows with surrounding content like words in a sentence.

#### 🧪 Example:

```html
<span style="display: inline; background-color: yellow;">
  This is an inline element.
</span>
```

---

### ✅ 3. `inline-block`

* **Definition:** Combines features of both `inline` and `block`.
* Sits inline like `inline`, but you **can set width and height** like `block`.

#### 🧠 Features:

* Flows with text but behaves like a block for sizing.
* Useful for buttons, cards, or small boxes.

#### 🧪 Example:

```html
<div style="display: inline-block; width: 150px; height: 100px; background-color: orange; margin: 5px;">
  This is inline-block.
</div>
```

---

### ✅ 4. `none`

* **Definition:** Completely removes the element from the document **visually and structurally**.
* **Used For:** Hiding elements dynamically, such as through JavaScript or responsive design.

#### 🧠 Features:

* Element is not visible and takes up no space.
* Different from `visibility: hidden` (which hides but keeps space).

#### 🧪 Example:

```html
<div style="display: none;">
  This is hidden and removed from layout.
</div>
```

---

## ⚖️ **Display Property Comparison Table**

| Property       | New Line | Width/Height | Flow With Text | Visible | Use Case                    |
| -------------- | -------- | ------------ | -------------- | ------- | --------------------------- |
| `block`        | Yes      | Yes          | No             | Yes     | Layout containers, sections |
| `inline`       | No       | No           | Yes            | Yes     | Styling text, links         |
| `inline-block` | No       | Yes          | Yes            | Yes     | Buttons, inline boxes       |
| `none`         | N/A      | N/A          | N/A            | No      | Hide elements dynamically   |

---

## 🧪 Practical Exercise for Students

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .block-box {
      display: block;
      background: lightblue;
      margin-bottom: 10px;
      width: 300px;
    }
    .inline-box {
      display: inline;
      background: yellow;
    }
    .inline-block-box {
      display: inline-block;
      width: 150px;
      height: 80px;
      background: orange;
      margin: 5px;
    }
    .hidden-box {
      display: none;
    }
  </style>
</head>
<body>

  <div class="block-box">Block Box (Takes full line)</div>

  <span class="inline-box">Inline Box</span>
  <span class="inline-box">Another Inline Box</span>

  <div class="inline-block-box">Inline Block 1</div>
  <div class="inline-block-box">Inline Block 2</div>

  <div class="hidden-box">You cannot see me!</div>

</body>
</html>
```

---

## ✅ Developer Notes / Facts

* `inline-block` is useful for responsive layouts where you want items on the same line but with full sizing control.
* `display: none` is great for dropdown menus, modals, or mobile nav menus that appear on user action.
* `display` can also take advanced values like `flex`, `grid`, and `table` (covered in later lectures).
