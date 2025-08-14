# **Lecture 10 – Display Flex (Parent Properties)**

## **1️⃣ What is Flexbox?**

Flexbox (**Flexible Box Layout**) is a CSS layout model that arranges elements **in a line (row)** or **a column** and makes them flexible to adjust automatically to available space.

---

## **2️⃣ `display: flex`**

* Makes an element a **flex container**.
* All direct children become **flex items**.

```css
.container {
    display: flex; /* turns children into flex items */
}
```

---

## **3️⃣ `flex-direction`**

Defines the **main axis** direction — how items are placed in the container.

| Value            | Description                         | Visual |
| ---------------- | ----------------------------------- | ------ |
| `row`            | Default, items placed left to right | →      |
| `row-reverse`    | Items placed right to left          | ←      |
| `column`         | Items placed top to bottom          | ↓      |
| `column-reverse` | Items placed bottom to top          | ↑      |

```css
.container {
    display: flex;
    flex-direction: row; /* change this to see effect */
}
```

---

## **4️⃣ `flex-wrap`**

Controls whether items **wrap** onto multiple lines.

| Value          | Description                                   |
| -------------- | --------------------------------------------- |
| `nowrap`       | Default, all items in one line (may overflow) |
| `wrap`         | Items wrap onto new lines when space runs out |
| `wrap-reverse` | Wraps onto new lines in reverse order         |

```css
.container {
    display: flex;
    flex-wrap: wrap; /* allows multi-line layout */
}
```

---

## **5️⃣ `flex-flow`**

Shorthand for **`flex-direction`** and **`flex-wrap`**.

```css
/* Instead of writing: */
.container {
    flex-direction: row;
    flex-wrap: wrap;
}

/* We can write: */
.container {
    flex-flow: row wrap;
}
```

---

## **6️⃣ Practical Example**

```html
<!DOCTYPE html>
<html>
<head>
<style>
.container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    background: #eee;
    padding: 10px;
}

.item {
    background: #3498db;
    color: white;
    padding: 20px;
    border-radius: 5px;
    flex: 1 1 150px; /* grow shrink basis */
}
</style>
</head>
<body>

<div class="container">
    <div class="item">Box 1</div>
    <div class="item">Box 2</div>
    <div class="item">Box 3</div>
    <div class="item">Box 4</div>
    <div class="item">Box 5</div>
</div>

</body>
</html>
```

---

## **7️⃣ Key Points for Students**

* Always start with **`display: flex`**.
* Use **`flex-direction`** to set row/column layout.
* Enable **`flex-wrap`** to make responsive grids.
* Use **`flex-flow`** as a shorthand to save code.
