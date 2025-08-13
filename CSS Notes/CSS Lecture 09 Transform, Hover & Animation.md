
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

 **Build a Quiz card**:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz Flash Card</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: #f4f4f4;
            font-family: Arial, sans-serif;
        }

        .card {
            width: 250px;
            height: 150px;
            perspective: 1000px;
            /* Creates 3D effect */
        }

        .card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            text-align: center;
            transition: transform 0.6s;
            transform-style: preserve-3d;
        }

        .card:hover .card-inner {
            transform: rotateY(180deg);
        }

        .card-front,
        .card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            /* Hide the back side when facing front */
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
            font-weight: bold;
        }

        .card-front {
            background: #ffcc00;
            color: #000;
        }

        .card-back {
            background: #009688;
            color: white;
            transform: rotateY(180deg);
        }
    </style>
</head>

<body>

    <div class="card">
        <div class="card-inner">
            <div class="card-front">
                What is the capital of France?
            </div>
            <div class="card-back">
                Paris 🇫🇷
            </div>
        </div>
    </div>

</body>

</html>
```
 **Build Animated Buttons**:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Button Hover Effects</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: #f4f4f4;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            padding: 50px;
        }

        button {
            padding: 12px 25px;
            font-size: 16px;
            border: none;
            cursor: pointer;
            transition: 0.4s;
        }

        /* 1️⃣ Color Change */
        .btn1 {
            background: #3498db;
            color: white;
        }

        .btn1:hover {
            background: #2ecc71;
        }

        /* 2️⃣ Grow / Scale */
        .btn2 {
            background: #e67e22;
            color: white;
        }

        .btn2:hover {
            transform: scale(1.1);
        }

        /* 3️⃣ Shadow Pop */
        .btn3 {
            background: #8e44ad;
            color: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        .btn3:hover {
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
        }

        /* 4️⃣ Border Expand */
        .btn4 {
            background: white;
            color: black;
            border: 2px solid #000;
        }

        .btn4:hover {
            border-color: red;
            letter-spacing: 2px;
        }

        /* 5️⃣ Slide Background */
        .btn5 {
            position: relative;
            background: transparent;
            color: black;
            border: 2px solid black;
            /* overflow: hidden; */
        }

        .btn5::before {
            content: "";
            position: absolute;
            left: -100%;
            top: 0;
            width: 100%;
            height: 100%;
            background: black;
            z-index: -1;
            transition: 0.4s;
        }

        .btn5:hover {
            color: white;
        }

        .btn5:hover::before {
            left: 0;
        }

        /* 6️⃣ Rotate on Hover */
        .btn6 {
            background: #16a085;
            color: white;
        }

        .btn6:hover {
            transform: rotate(5deg) scale(1.1);
        }

        /* 7️⃣ Glow Effect */
        .btn7 {
            background: #ff4757;
            color: white;
        }

        .btn7:hover {
            box-shadow: 0 0 10px #ff4757, 0 0 20px #ff6b81, 0 0 40px #ff6b81;
        }
    </style>
</head>

<body>

    <button class="btn1">Color Change</button>
    <button class="btn2">Grow</button>
    <button class="btn3">Shadow Pop</button>
    <button class="btn4">Border Expand</button>
    <button class="btn5">Slide Background</button>
    <button class="btn6">Rotate</button>
    <button class="btn7">Glow</button>

</body>

</html>

```

 **Build Image Scale Effect**:
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Hover Zoom</title>
    <style>
        body {
            background: #f4f4f4;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .image-container {
            overflow: hidden;
            /* hides overflow when zooming */
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            width: 300px;
            height: 200px;
        }

        .image-container img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }

        .image-container:hover img {
            transform: scale(1.2);
            /* zoom in */
        }
    </style>
</head>

<body>

    <div class="image-container">
        <img src="https://picsum.photos/600/400" alt="Sample Image">
    </div>

</body>

</html>

```
