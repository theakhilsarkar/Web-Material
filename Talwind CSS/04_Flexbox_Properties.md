
# 🚀 **TAILWIND FLEXBOX — COMPLETE REVISION TABLE**

---

## ✅ **JUSTIFY & ALIGN (Main Axis + Cross Axis)**

### **1. justify-content**

Controls **alignment of items along the main axis** (horizontal in `flex-row`).

| Property          | Real-World Use                     | Example                        |
| ----------------- | ---------------------------------- | ------------------------------ |
| `justify-start`   | Align items left (nav links)       | `class="flex justify-start"`   |
| `justify-center`  | Center buttons, banners            | `class="flex justify-center"`  |
| `justify-end`     | Move items to right (login button) | `class="flex justify-end"`     |
| `justify-between` | Navbar: space between logo & menu  | `class="flex justify-between"` |
| `justify-around`  | Equal spacing around items         | `class="flex justify-around"`  |
| `justify-evenly`  | Even spacing homepage icons        | `class="flex justify-evenly"`  |

---

### **2. justify-items (grid-only, but Tailwind allows)**

Aligns **content inside each item** on main axis (rarely used in flex).

| Property               | Use Case                          | Example                             |
| ---------------------- | --------------------------------- | ----------------------------------- |
| `justify-items-center` | Center content inside child items | `class="grid justify-items-center"` |

---

### **3. justify-self (grid-only)**

Align a **single grid item** on main axis.

| Property           | Use Case                    | Example                    |
| ------------------ | --------------------------- | -------------------------- |
| `justify-self-end` | Align one child (icon etc.) | `class="justify-self-end"` |

---

## ✅ **ALIGNMENT (Cross-Axis)**

### **4. align-items**

Controls items **vertically** (in `flex-row`).

| Property        | Real-World Use                      | Example                      |
| --------------- | ----------------------------------- | ---------------------------- |
| `items-start`   | Align top: card layout              | `class="flex items-start"`   |
| `items-center`  | Perfect vertical alignment (navbar) | `class="flex items-center"`  |
| `items-end`     | Align bottom: pricing tables        | `class="flex items-end"`     |
| `items-stretch` | Make items equal height             | `class="flex items-stretch"` |

---

### **5. align-self**

Align a **single item** vertically.

| Property      | Use Case                        | Example               |
| ------------- | ------------------------------- | --------------------- |
| `self-center` | Center only one item            | `class="self-center"` |
| `self-end`    | Bottom-align only selected item | `class="self-end"`    |

---

### **6. align-content**

Controls **multi-row vertical alignment** when items wrap.

| Property          | Use Case                  | Example                   |
| ----------------- | ------------------------- | ------------------------- |
| `content-center`  | Center wrapped items      | `class="content-center"`  |
| `content-between` | Even spacing between rows | `class="content-between"` |

---

## ✅ **PLACE UTILITIES (Shortcut for justify + align)**

### **7. place-content**

Shortcut for `align-content + justify-content`.

| Property               | Use Case                           | Example                        |
| ---------------------- | ---------------------------------- | ------------------------------ |
| `place-content-center` | Center full grid or flex container | `class="place-content-center"` |

---

### **8. place-items**

Shortcut for `align-items + justify-items`.

| Property             | Use Case                  | Example                      |
| -------------------- | ------------------------- | ---------------------------- |
| `place-items-center` | Center items in both axes | `class="place-items-center"` |

---

### **9. place-self**

Shortcut for `justify-self + align-self`.

| Property         | Use Case                   | Example                  |
| ---------------- | -------------------------- | ------------------------ |
| `place-self-end` | Push one item bottom-right | `class="place-self-end"` |

---

## ✅ **FLEX DIRECTION, WRAP, BASIS, GROW, SHRINK**

### **10. flex-direction**

Controls item direction.

| Property           | Use Case                    | Example                         |
| ------------------ | --------------------------- | ------------------------------- |
| `flex-row`         | Horizontal layout (navbar)  | `class="flex flex-row"`         |
| `flex-col`         | Vertical layout (sidebar)   | `class="flex flex-col"`         |
| `flex-row-reverse` | Icon on left, text on right | `class="flex flex-row-reverse"` |

---

### **11. flex-wrap**

Wrap to next line when needed.

| Property      | Use Case                   | Example                    |
| ------------- | -------------------------- | -------------------------- |
| `flex-wrap`   | Responsive card rows       | `class="flex flex-wrap"`   |
| `flex-nowrap` | Prevent wrapping in navbar | `class="flex flex-nowrap"` |

---

### **12. flex-basis**

Controls default size of flex items.

| Property    | Use Case            | Example             |
| ----------- | ------------------- | ------------------- |
| `basis-1/2` | Two equal columns   | `class="basis-1/2"` |
| `basis-1/3` | Three cards per row | `class="basis-1/3"` |

---

### **13. flex-grow**

Item can grow to fill remaining space.

| Property | Use Case                               | Example        |
| -------- | -------------------------------------- | -------------- |
| `grow`   | Input expands while button stays fixed | `class="grow"` |

---

### **14. flex-shrink**

Shrink item if needed.

| Property | Use Case                                   | Example          |
| -------- | ------------------------------------------ | ---------------- |
| `shrink` | Adjust text while keeping icon size stable | `class="shrink"` |

---

### **15. order**

Change display order visually.

| Property             | Use Case                       | Example                      |
| -------------------- | ------------------------------ | ---------------------------- |
| `order-1`, `order-2` | Reverse items in mobile layout | `class="order-1 md:order-2"` |

---

# 🎉 **REAL-WORLD PRACTICAL EXAMPLE**

### Responsive Hero Section with Flexbox Utilities

```html
<div class="flex flex-col md:flex-row items-center justify-between p-8 bg-white">
  
  <!-- Text -->
  <div class="basis-1/2 order-2 md:order-1">
    <h1 class="text-4xl font-bold mb-4">Welcome to ERP App</h1>
    <p class="text-gray-600 mb-6">
      Track homework, attendance, timetable and notifications easily.
    </p>
    <button class="bg-red-600 text-white px-6 py-3 rounded-lg">
      Download APK
    </button>
  </div>

  <!-- Image -->
  <img 
    src="https://source.unsplash.com/random/400x400/?school"
    class="basis-1/2 object-cover object-center rounded-xl shadow-lg order-1 md:order-2"
  />
</div>
```

---

# 📝 **TASK FOR YOU**

Build a **responsive card section** using Tailwind Flex utilities:

### Requirements:

✔ 3 cards in a row on desktop
✔ 1 card in a column on mobile
✔ Use the following utilities:

* `flex`, `flex-col`, `flex-row`, `flex-wrap`
* `justify-between`, `items-center`
* `basis-1/3`
* `order`
* `object-cover`
* `place-items-center`
