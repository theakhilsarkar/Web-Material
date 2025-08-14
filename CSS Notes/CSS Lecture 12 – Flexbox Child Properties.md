

# **Lecture 12 – Flexbox Child Properties**

---

## **1️⃣ flex-basis**

* Defines the **initial size** of the flex item **before space distribution**.
* Can be **px, %, em, auto**.
* If `flex-direction: row` → **width**.
* If `flex-direction: column` → **height**.

```css
.item {
    flex-basis: 200px; /* Start with 200px width before growing/shrinking */
}
```

---

## **2️⃣ flex-grow**

* Defines **how much the item will grow** compared to others **when extra space is available**.
* Default is `0` (don’t grow).
* If one item has `flex-grow: 2` and another has `1` → first will take **double space** compared to second.

```css
.item {
    flex-grow: 1; /* All items will share extra space equally */
}
```

---

## **3️⃣ flex-shrink**

* Defines **how much the item will shrink** when there’s **not enough space**.
* Default is `1` (shrink allowed).
* `0` means **don’t shrink**.

```css
.item {
    flex-shrink: 0; /* Item won't shrink below its flex-basis */
}
```

---

## **4️⃣ order**

* Changes the **visual order** of items (default is `0`).
* Smaller values appear first, larger values appear later.

```css
.item {
    order: 2; /* This will appear after items with order: 0 or 1 */
}
```

---

## **5️⃣ align-self**

* Overrides **align-items** for a specific item.
* Works on the **cross axis** (vertical by default).

| Value        | Description                      |
| ------------ | -------------------------------- |
| `stretch`    | Stretch to fill container height |
| `center`     | Center vertically                |
| `flex-start` | Align to top                     |
| `flex-end`   | Align to bottom                  |
| `baseline`   | Align text baseline              |

```css
.item {
    align-self: flex-end; /* This single item aligns to bottom */
}
```

---

## **6️⃣ Practical Example (with Comments)**

```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: flex;
    height: 300px;
    background: #f4f4f4;
    gap: 10px;
}

.item {
    background: #3498db;
    color: white;
    text-align: center;
    border-radius: 5px;
    font-size: 18px;
    padding: 10px;
}

/* Flex Child Properties Examples */
.item1 {
    flex-basis: 150px; /* Initial width */
    flex-grow: 1;      /* Will grow if extra space */
}
.item2 {
    flex-basis: 100px;
    flex-grow: 2;      /* Will grow twice as fast as item1 */
}
.item3 {
    flex-basis: 120px;
    flex-shrink: 0;    /* Won't shrink when space is less */
    order: -1;         /* Will appear first */
}
.item4 {
    flex-basis: 100px;
    align-self: flex-end; /* Align bottom regardless of parent alignment */
}
</style>
</head>
<body>

<div class="container">
    <div class="item item1">1</div>
    <div class="item item2">2</div>
    <div class="item item3">3</div>
    <div class="item item4">4</div>
</div>

</body>
</html>
```

---

## **7️⃣ Key Takeaways**

* **`flex-basis`** → Starting size
* **`flex-grow`** → Extra space distribution
* **`flex-shrink`** → Space reduction control
* **`order`** → Change visual order without changing HTML
* **`align-self`** → Individual vertical alignment
