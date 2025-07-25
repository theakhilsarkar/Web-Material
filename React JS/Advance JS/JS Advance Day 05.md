# 📘 JavaScript Modules: `import` & `export`

---

## ✅ **What are JavaScript Modules?**

JavaScript **Modules** allow us to **split code into separate files** and reuse them easily. Instead of writing everything in one file, we organize the code into **reusable pieces** called **modules**.

---

### **Why do we need Modules?**

* **Code Organization:** Easier to maintain and read.
* **Reusability:** Functions or components can be reused in multiple files.
* **Avoid Conflicts:** Prevents global scope pollution.
* **Helps in Large Apps:** Frameworks like **React, Angular, Vue** depend on modules.

---

## ✅ **How Modules Work**

* A **module** is simply a JavaScript file.
* To **share code** from one file to another, we use:

  * **`export`** → Makes variables, functions, or classes available to other files.
  * **`import`** → Brings those exports into another file.

---

## 🔹 **Types of Exports & Imports**

---

### **1. Named Export**

Export multiple things **by name**.

#### Syntax:

```javascript
// math.js
export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

#### Import:

```javascript
import { add, multiply } from './math.js';
console.log(add(2, 3));      // 5
console.log(multiply(4, 2)); // 8
```

✅ You must use **same names** when importing.

---

### **2. Default Export**

Each file can have **one default export**.

#### Syntax:

```javascript
// math.js
export default function subtract(a, b) {
  return a - b;
}
```

#### Import:

```javascript
import subtract from './math.js'; // No curly braces
console.log(subtract(10, 5)); // 5
```

✅ You can rename the default import.

---

### **3. Mixed Export (Default + Named)**

```javascript
// math.js
export default function divide(a, b) { return a / b; }
export const add = (a, b) => a + b;
```

Import:

```javascript
import divide, { add } from './math.js';
```

---

### **4. Import Everything as Object**

```javascript
import * as MathUtils from './math.js';
MathUtils.add(3, 4);
```

---

### **5. Re-export**

Forward exports from another file:

```javascript
export * from './math.js';
```

---

### **6. Dynamic Import (Lazy Loading)**

Loads only when needed:

```javascript
async function loadMath() {
  const math = await import('./math.js');
  console.log(math.add(5, 5));
}
loadMath();
```

✅ Used for performance optimization (React uses this).

---

## ✅ Diagram: How It Works

```
math.js  -->  [ export functions ]
 ↓
app.js   -->  [ import and use ]
```

---

## ✅ Role in Development

* **React Components:** `import Header from './Header.js';`
* **APIs & Utilities:** Store API calls in one file, reuse everywhere.
* **Maintainable Code:** Separate concerns into modules.

---

## ✅ Common Mistakes

❌ Forgetting `type="module"` in HTML:

```html
<script type="module" src="app.js"></script>
```

❌ Using incorrect paths:

* Correct: `./math.js`
* Wrong: `math.js` (without `./`)

---

## ✅ Practice Section

---

### **🟢 Easy**

1. Create `math.js` with `add` and `subtract` functions. Import and log results in `app.js`.
2. Export a string variable and import it in another file.

---

### **🟡 Medium**

3. Create `utils.js` with:

   * `capitalize(text)` → capitalizes first letter.
   * `reverse(text)` → reverses string.
     Use these in `main.js` to format user input.

---

### **🔴 Tough**

4. **Dynamic Import Project:**

   * Create two modules: `math.js` (with add, multiply) and `string.js` (with uppercase, lowercase).
   * On a button click, **dynamically load** `math.js` or `string.js` and perform the operation.
   * Store the result in **Local Storage** and show it in the DOM.
