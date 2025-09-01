
# 📘 Media Query Conditions: max-width vs min-width (and height)

Media queries check **conditions about the screen size** (or device).
The two most used conditions are:

---

## 🔹 1. `max-width`

👉 Means: *Apply the CSS if the screen width is **less than or equal to** the value.*

* Think: "**Maximum allowed width**"
* Example: `@media (max-width: 600px)` → apply only when the screen is **600px wide or smaller**.

📌 Example:

```css
@media (max-width: 600px) {
  body {
    background: yellow; /* shows only on small screens */
  }
}
```

✅ Works on **mobiles** and narrow browser windows.
❌ Won’t work on big desktops.

---

## 🔹 2. `min-width`

👉 Means: *Apply the CSS if the screen width is **greater than or equal to** the value.*

* Think: "**Minimum required width**"
* Example: `@media (min-width: 600px)` → apply only when the screen is **600px wide or bigger**.

📌 Example:

```css
@media (min-width: 600px) {
  body {
    background: lightblue; /* shows only on bigger screens */
  }
}
```

✅ Works on **tablets, desktops**.
❌ Won’t work on small mobiles.

---

## 🔹 Difference in Simple Words

| Condition     | Meaning                               | When it applies       |
| ------------- | ------------------------------------- | --------------------- |
| **max-width** | Screen size is **at most** X px (≤X)  | Smaller or equal to X |
| **min-width** | Screen size is **at least** X px (≥X) | Larger or equal to X  |

---

## 🔹 3. `max-height` / `min-height`

These work the same way, but with **height** (useful for landscape vs portrait screens).

* `max-height: 500px` → applies only if the screen’s **height ≤ 500px**
* `min-height: 500px` → applies only if the screen’s **height ≥ 500px**

📌 Example:

```css
@media (max-height: 400px) {
  body {
    background: pink; /* small height devices */
  }
}
```

---

## 🔹 Visual Example

Imagine a **box** that changes color:

```css
.box {
  width: 200px;
  height: 200px;
  background: gray;
}

/* Small screens */
@media (max-width: 600px) {
  .box {
    background: red;
  }
}

/* Big screens */
@media (min-width: 601px) {
  .box {
    background: green;
  }
}
```

👉 On a **mobile (≤600px)** → box = red
👉 On a **desktop (≥601px)** → box = green

---

## 🔹 Easy Trick to Remember

* **max-width** → "up to this size" (small screens and below)
* **min-width** → "starting from this size" (bigger screens and above)

---

⚡ Quick Test for You:
If I write:

```css
@media (max-width: 768px) { ... }
```

➡ Do you think it applies to **mobile** or **desktop**?
