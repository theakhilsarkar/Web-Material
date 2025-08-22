# 🚀 Day 13: CSS Units

CSS Units are used to define the size, spacing, and positioning of elements in a webpage.  
They can be **absolute** (fixed) or **relative** (scale with parent/root/viewport).  

---

## 📌 Types of CSS Units

### 🔹 1. Absolute Unit
| Unit | Meaning | Example | Use Case |
|------|----------|---------|----------|
| `px` | Pixels (fixed size) | `width: 200px;` | When you need exact, non-responsive sizes |

---

### 🔹 2. Relative Units
| Unit | Relative To | Example | Explanation |
|------|-------------|---------|-------------|
| `em` | Font-size of **parent element** | `2em` → 2 × parent’s font-size | Scales with parent text size |
| `rem` | Font-size of **root (html)** | `1.5rem` → 1.5 × root font-size | Consistent sizing across app |
| `%`  | Size of **parent container** | `width: 50%` | Responsive widths, paddings, margins |

---

### 🔹 3. Viewport Units
| Unit | Relative To | Example | Use Case |
|------|-------------|---------|----------|
| `vh` | Height of **viewport** | `100vh` | Full screen sections |
| `vw` | Width of **viewport** | `100vw` | Full width banners |

---

### 🔹 4. Constraint Properties
| Property | Description | Example |
|----------|-------------|---------|
| `min-width` | Smallest allowed width | `min-width: 300px;` |
| `max-width` | Largest allowed width | `max-width: 1200px;` |
| `min-height` | Smallest allowed height | `min-height: 200px;` |
| `max-height` | Largest allowed height | `max-height: 600px;` |

---

## 📝 Code Examples

### ✅ Absolute Unit (`px`)
```css
.box {
  width: 200px;
  height: 100px;
}
```

### ✅ Relative Units (`em`, `rem`, `%`)
```css
html {
  font-size: 16px;
}
.parent {
  font-size: 20px;
}
.child {
  font-size: 2em;   /* 40px */
}
.title {
  font-size: 1.5rem; /* 24px (based on root) */
}
.container {
  width: 80%; /* relative to parent */
}
```

### ✅ Viewport Units (`vh`, `vw`)
```css
.full-screen {
  height: 100vh; /* full height of screen */
  width: 100vw;  /* full width of screen */
}
```

### ✅ Min/Max Constraints
```css
.responsive-box {
  width: 80%;
  min-width: 300px;
  max-width: 1200px;
}

.card {
  min-height: 200px;
  max-height: 600px;
  overflow: auto;
}
```

---

## 📖 Summary

* **Absolute:** `px` → fixed, not responsive.  
* **Relative:** `em`, `rem`, `%` → scale with parent/root/relative size.  
* **Viewport:** `vh`, `vw` → scale with browser window.  
* **Constraints:** `min-width`, `max-width`, `min-height`, `max-height`.  

👉 Use **relative & viewport units** for responsive design.  
👉 Use **min/max constraints** to prevent layouts from breaking.  

---
