
# **Lecture 11 – Flexbox Parent Alignment Properties**

---

## **1️⃣ Justify Content**

Controls alignment of **flex items along the main axis** (horizontal by default if `flex-direction: row`).

| Value           | Description                                                     |
| --------------- | --------------------------------------------------------------- |
| `flex-start`    | Items packed at the **start** of main axis (default)            |
| `flex-end`      | Items packed at the **end** of main axis                        |
| `center`        | Items centered on main axis                                     |
| `space-between` | First item at start, last at end, equal space **between** items |
| `space-around`  | Equal space **around** each item (half-space on ends)           |
| `space-evenly`  | Equal space **between and around** all items                    |

---

## **2️⃣ Align Items**

Controls alignment of **flex items along the cross axis** (vertical by default if `flex-direction: row`).

| Value        | Description                                      |
| ------------ | ------------------------------------------------ |
| `stretch`    | Items stretch to fill container height (default) |
| `center`     | Items centered on cross axis                     |
| `flex-start` | Items aligned to start of cross axis             |
| `flex-end`   | Items aligned to end of cross axis               |
| `baseline`   | Items aligned by their text baseline             |

---

## **3️⃣ Align Content**

Controls spacing **between multiple lines of flex items** along the cross axis.
⚠ Works **only** when `flex-wrap: wrap` is applied and there are **multiple rows**.

| Value           | Description                                     |
| --------------- | ----------------------------------------------- |
| `stretch`       | Lines stretch to fill container space (default) |
| `center`        | All lines packed in the center of cross axis    |
| `flex-start`    | Lines packed at start of cross axis             |
| `flex-end`      | Lines packed at end of cross axis               |
| `space-between` | Equal space between lines                       |
| `space-around`  | Equal space around lines                        |
| `space-evenly`  | Equal space between and around lines            |

---

## **4️⃣ Practical Example with Comments**

```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: flex;                  /* Enable flexbox */
    flex-direction: row;            /* Main axis: horizontal */
    flex-wrap: wrap;                 /* Allow multiple rows for align-content to work */
    justify-content: space-between; /* Horizontal alignment along main axis */
    align-items: center;            /* Vertical alignment along cross axis */
    align-content: space-around;    /* Vertical alignment of multiple lines */
    
    height: 400px;                  /* To see vertical alignment clearly */
    background: #f4f4f4;
    padding: 10px;
    gap: 10px;                      /* Space between items */
}

.item {
    background: #3498db;
    color: white;
    font-size: 18px;
    text-align: center;
    border-radius: 5px;
    flex: 0 0 120px; /* fixed width items */
    height: 60px;    /* fixed height */
    display: flex;   /* to center text inside box */
    justify-content: center;
    align-items: center;
}
</style>
</head>
<body>

<div class="container">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
    <div class="item">9</div>
</div>

</body>
</html>
```

---

## **5️⃣ Key Learning Flow for Students**

1. **`justify-content`** → Main axis alignment.
2. **`align-items`** → Single-line vertical alignment.
3. **`align-content`** → Multi-line vertical alignment.

💡 **Tip:** Always check the difference between `align-items` and `align-content` — many beginners get confused because `align-content` only works with wrapping and multiple lines.
