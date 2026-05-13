# 📘 TypeScript Beginner Guide (Setup + Basics + Practice)

---

# 🔧 1. Setup (with ts-node fix)

## Install

```bash
npm install -g typescript
npm install -g ts-node
```

## Verify

```bash
tsc -v
ts-node -v
```

---

# ▶️ How to Run Code

## Method 1 (Recommended)

```bash
tsc index.ts
node index.js
```

## Method 2 (Direct)

```bash
ts-node index.ts
```

## ❌ Wrong

```bash
node index.ts
```

---

# 📂 2. First Program

```ts
let message: string = "Hello TypeScript";
console.log(message);
```

---

# 🧠 3. Data Types (VERY IMPORTANT)

## 1. String

```ts
let name: string = "Boss";
```

## 2. Number

```ts
let age: number = 25;
```

## 3. Boolean

```ts
let isActive: boolean = true;
```

## 4. Any (avoid mostly)

```ts
let data: any = "Hello";
data = 123;
```

---

# 🎯 Practice 1

👉 Create variables:

* yourName (string)
* yourAge (number)
* isStudent (boolean)

Print all using `console.log()`

---

# 🔁 4. Swapping Program

## With temp variable

```ts
let a: number = 10;
let b: number = 20;

let temp: number = a;
a = b;
b = temp;

console.log(a, b);
```

## Without temp

```ts
let a: number = 10;
let b: number = 20;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);
```

---

# ⚙️ 5. Functions

```ts
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(5, 3));
```

---

# 🎯 Practice 2

👉 Create function:

* multiply 2 numbers
* return result

---

# 📦 6. Arrays

```ts
let numbers: number[] = [1, 2, 3, 4];
let names: string[] = ["A", "B", "C"];
```

---

# 🎯 Practice 3

👉 Create array of 5 numbers
👉 Print all values using loop

---

# 🔄 7. Loop

```ts
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

# 🧱 8. Object (Basic)

```ts
let user: { name: string; age: number } = {
  name: "Boss",
  age: 25
};
```

---

# 🎯 Practice 4

👉 Create object:

* product (name, price)

---

# 🚀 What You Learned

✔ Setup (with ts-node fix)
✔ Running TS
✔ Types
✔ Functions
✔ Arrays
✔ Loop
✔ Object
✔ Swapping logic

---

# 🎯 Your Task (IMPORTANT)

Complete:

1. Practice 1 (variables)
2. Swapping program
3. Practice 2 (function)
4. Practice 3 (array + loop)
5. Practice 4 (object)

