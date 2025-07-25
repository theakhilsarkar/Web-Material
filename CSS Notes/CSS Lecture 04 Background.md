# **CSS Lecture 4 – Background & Gradient, Advanced Selectors, and Parallax Effect**



## ✅ **1. Background Properties**

The `background` property in CSS is used to set images, colors, and other effects behind elements.

### **a) background-image**

Sets an image as the background.

```css
body {
  background-image: url('background.jpg');
}
```

---

### **b) background-size**

Controls the size of the background image.

* `auto` (default): Original image size
* `cover`: Scales image to cover entire area
* `contain`: Scales image to fit inside the container

```css
body {
  background-size: cover;
}
```

---

### **c) background-repeat**

Specifies how the image repeats.

* `repeat` (default): Repeats both horizontally and vertically
* `repeat-x`: Repeats horizontally only
* `repeat-y`: Repeats vertically only
* `no-repeat`: Does not repeat

```css
body {
  background-repeat: no-repeat;
}
```

---

### **d) background-position**

Controls where the image is placed.

* Values: `top left`, `center`, `bottom right`

```css
body {
  background-position: center;
}
```

---

### **e) background-attachment**

Controls if the background scrolls or is fixed.

* `scroll`: Moves with content
* `fixed`: Stays fixed while scrolling
* `local`: Moves with the element's scroll

```css
body {
  background-attachment: fixed;
}
```

---

## ✅ **2. CSS Gradients**

Gradients create smooth color transitions.

### **a) Linear Gradient**

Colors transition in a straight line.

```css
div {
  background: linear-gradient(to right, red, blue);
}
```

---

### **b) Radial Gradient**

Colors spread from the center in a circular pattern.

```css
div {
  background: radial-gradient(circle, red, blue);
}
```

---

### **c) Conic Gradient**

Colors arranged in a circular (pie-like) manner.

```css
div {
  background: conic-gradient(red, yellow, green);
}
```

---

## ✅ **3. Two Class Property**

Apply multiple classes to one element.

```html
<div class="box shadow"></div>
```

```css
.box {
  width: 200px;
  height: 200px;
  background-color: lightblue;
}
.shadow {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
```

---

## ✅ **4. Parent-Child Property**

Style elements based on hierarchy.

```css
.parent p {
  color: blue;
}
```

This applies \*\*only to `<p>` inside `.parent`.

---

## ✅ **5. Parallax Scrolling Effect**

Background image stays fixed while content scrolls.

```html
<!DOCTYPE html>
<html>
<head>
<style>
.parallax {
  background-image: url('parallax.jpg');
  height: 500px;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}
.content {
  height: 300px;
  background: white;
  padding: 20px;
}
</style>
</head>
<body>

<div class="parallax"></div>
<div class="content">
  <h2>Parallax Effect Example</h2>
  <p>This section scrolls while background image remains fixed.</p>
</div>
<div class="parallax"></div>

</body>
</html>
```
