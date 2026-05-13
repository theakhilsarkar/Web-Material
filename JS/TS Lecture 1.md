# 🚀 Step 1: What is TypeScript (very quick)

TypeScript = **JavaScript + Types**

It helps you:

* catch errors early
* write clean & scalable code
* build real apps (React, Node, etc.)

Example:

```js
// JavaScript
let name = "Boss";
name = 123; // allowed (bad)
```

```ts
// TypeScript
let name: string = "Boss";
name = 123; // ❌ error
```

---

# ⚙️ Step 2: Setup TypeScript (DO THIS FIRST)

### 1. Install Node.js (if not installed)

Check:

```bash
node -v
```

---

### 2. Install TypeScript globally

```bash
npm install -g typescript
```

---

### 3. Check installation

```bash
tsc -v
```

---

### 4. Create your first project

```bash
mkdir ts-learning
cd ts-learning
```

---

### 5. Create file

```bash
touch index.ts
```

---

### 6. Write this code inside `index.ts`

```ts
let message: string = "Hello TypeScript";
console.log(message);
```

---

### 7. Compile it

```bash
tsc index.ts
```

👉 It will create:

```
index.js
```

---

### 8. Run it

```bash
node index.js
```

