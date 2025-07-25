
# **CSS Lecture 3 – Box Model**

## ✅ **What is the CSS Box Model?**

The **CSS Box Model** describes how every HTML element is treated as a rectangular box. It defines the layout and spacing of elements using:

* **Content**
* **Padding**
* **Border**
* **Margin**

---

### ✅ **Box Model Structure**

```
+-----------------------+
|      Margin           |
|  +-----------------+  |
|  |    Border       |  |
|  | +------------+  |  |
|  | |  Padding   |  |  |
|  | |+---------+ |  |  |
|  | || Content | |  |  |
|  | |+---------+ |  |  |
|  | +------------+  |  |
|  +-----------------+  |
+-----------------------+
```

---

## ✅ **Properties in Box Model**

### 1. **Content**

* The actual text, image, or other media inside the element.

```css
div {
  width: 200px;
  height: 100px;
}
```

---

### 2. **Padding**

* The space **inside the element**, between the content and the border.

```css
div {
  padding: 20px; /* Adds space inside the box */
}
```

---

### 3. **Border**

* The line surrounding the padding (and content).

```css
div {
  border: 3px solid black;
}
```

---

### 4. **Margin**

* The space **outside the element**, separating it from other elements.

```css
div {
  margin: 15px; /* Adds outer spacing */
}
```

---

### 5. **Box-Sizing**

* **content-box** (default): width/height applies to content only.
* **border-box**: width/height includes padding and border.

```css
div {
  box-sizing: border-box;
}
```

---

### 6. **Border Radius**

* Rounds the corners of the element.

```css
div {
  border-radius: 10px;
}
```

---

## ✅ **Full Example – Create a Styled Box**

```html
<!DOCTYPE html>
<html>
<head>
<style>
.box {
  width: 300px;
  height: 150px;
  background-color: #f4f4f4;
  padding: 20px;
  border: 5px solid #333;
  margin: 30px auto;
  border-radius: 15px;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
  font-family: Arial, sans-serif;
}
</style>
</head>
<body>

<div class="box">
  <h2>Box Model Example</h2>
  <p>This box demonstrates padding, margin, border, and border-radius.</p>
</div>

</body>
</html>
```

---

## ✅ **How Box-Sizing Affects Layout**

* **content-box**: Total width = width + padding + border
* **border-box**: Total width = width (already includes padding and border)

---
