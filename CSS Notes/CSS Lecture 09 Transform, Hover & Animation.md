# 🎓 CSS LECTURE 09: Pseudo-elements, Transform, Hover, and Transition

---

## 📌 Topics Covered

1. `::before` and `::after`
2. `:hover`
3. `transform` → `translate`, `rotate`, `scale`, `skew`
4. `transition` → `property`, `duration`, `timing-function`, `delay`
5. 🎯 Combined Practical Example

---

## 🧩 1. `::before` and `::after` (Pseudo-elements)

### ✅ What:

Used to insert content **before or after** an element’s actual content.

### ✅ Syntax:

```css
selector::before {
  content: "";
  /* other styling */
}

selector::after {
  content: "";
  /* other styling */
}
```

### ✅ Notes:

* Always require `content` property.
* Inline by default; often used with `display: block` or `inline-block`.

### ✅ Practical Example:

```css
.card::before {
  content: "🌟 ";
  font-size: 20px;
  color: gold;
}

.card::after {
  content: " 🔥";
  font-size: 20px;
  color: red;
}
```

---

## 🧩 2. `:hover` (Pseudo-class)

### ✅ What:

Used to style an element when the mouse is over it.

```css
.button:hover {
  background-color: blue;
  color: white;
}
```

---

## 🧩 3. `transform` Property

Transforms an element in 2D or 3D space.

| Property          | Use Case                        | Example                            |
| ----------------- | ------------------------------- | ---------------------------------- |
| `translate(x, y)` | Move element on X and/or Y axis | `transform: translate(20px, 10px)` |
| `rotate(angle)`   | Rotate element by angle (deg)   | `transform: rotate(45deg)`         |
| `scale(x, y)`     | Resize (zoom in/out)            | `transform: scale(1.2)`            |
| `skew(x, y)`      | Skew (tilt) element             | `transform: skew(10deg, 5deg)`     |

---

## 🧩 4. `transition` Property

Allows smooth changes over time instead of instantly.

| Property                     | Use                      | Example                        |
| ---------------------------- | ------------------------ | ------------------------------ |
| `transition-property`        | What to animate          | `background-color`             |
| `transition-duration`        | How long (time) it takes | `0.3s` or `300ms`              |
| `transition-delay`           | Wait before starting     | `0.2s`                         |
| `transition-timing-function` | How animation progresses | `ease`, `linear`, `ease-in`... |

### ✅ Shorthand:

```css
transition: background-color 0.3s ease-in 0.1s;
```

---

## 🎨 Practical Example – Hover Card Zoom with Before/After Ribbon

### ✅ HTML

```html
<div class="card">
  <h2>Special Offer</h2>
  <p>Get 50% off on your first order!</p>
</div>
```

---

### ✅ CSS

```css
body {
  background: #f0f0f0;
  font-family: sans-serif;
  padding: 40px;
}

.card {
  position: relative;
  background: white;
  padding: 20px;
  width: 300px;
  margin: auto;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05) rotate(1deg);
  box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

/* Ribbon using ::before */
.card::before {
  content: "🎉 OFFER";
  position: absolute;
  top: -10px;
  left: -10px;
  background: crimson;
  color: white;
  padding: 5px 10px;
  font-size: 12px;
  transform: rotate(-10deg);
  border-radius: 5px;
}
```

---

## 🧠 Summary Table

| Feature        | Property                         | Usage                      |
| -------------- | -------------------------------- | -------------------------- |
| Pseudo         | `::before`, `::after`            | Insert decoration content  |
| Hover effect   | `:hover`                         | Style on mouse over        |
| Transformation | `transform: translate/scale/...` | Move/resize/rotate element |
| Animation      | `transition`                     | Smooth property change     |

---

## 🧪 Student Practice Task

🔧 **Build a card component** with:

* `::before` for a top-left badge
* `:hover` zoom + color change
* `transform` with rotate and scale
* `transition` on hover for smoothness
