

# 📘 JavaScript Functions: Complete Guide

JavaScript functions are essential building blocks for structuring and organizing your code. This document explains everything you need to know about **functions**, their **types**, **syntax**, **usage**, and **practical examples**.

---

## 📖 What is a Function?

🔹 **Definition:**
A **function** is a reusable block of code designed to perform a particular task when called.

🔹 **Purpose:**

* 🧩 Reduce redundancy
* 🛠️ Break down complex problems into manageable tasks
* 🧼 Keep code DRY (Don't Repeat Yourself)
* 📦 Modularize the program

---

## 🛠️ Function Syntax in JavaScript

```js
function functionName(parameters) {
    // code to be executed
}
```

### Example:

```js
function greet() {
    document.writeln("Hello, World!");
}

greet(); // Output: Hello, World!
```

---

## ✅ Why Use Functions?

| Feature               | Description                            |
| --------------------- | -------------------------------------- |
| 🔁 **Reusability**    | Write once, use many times             |
| 📚 **Modularity**     | Break big problems into smaller tasks  |
| ⚡ **Maintainability** | Easier to fix and improve code         |
| 💡 **Clarity**        | Makes code readable and understandable |
| 🔍 **Testability**    | Easier to test specific blocks         |

---

## 🧠 Function Types

| Type                   | Description                                         |
| ---------------------- | --------------------------------------------------- |
| 🧱 **User-defined**    | Functions created by users using `function` keyword |
| 🏗️ **Built-in**       | Functions like `alert()`, `prompt()`, `parseInt()`  |
| 🔁 **Recursive**       | Function that calls itself                          |
| 📦 **Anonymous**       | Functions without names, often used in expressions  |
| 🪜 **Arrow Functions** | ES6 feature using `=>` syntax                       |

---

## 🧮 Parameters and Arguments

🔹 **Parameter:** Variable in the function definition
🔹 **Argument:** Actual value passed to the function when called

```js
function add(a, b) {
    return a + b;
}
add(5, 10); // a and b are parameters, 5 and 10 are arguments
```

---

## 🔄 The `return` Statement

🔹 **Definition:** Used to return a value from the function to the caller
🔹 Once `return` is executed, the function stops running.

```js
function square(x) {
    return x * x;
}
let result = square(4); // result = 16
```

---

## 🔂 Recursive Functions

🔹 **Definition:** A function that calls itself until a condition is met
🔹 Commonly used for problems like factorial, sum of natural numbers, etc.

```js
function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
```

---

## 🧱 Nested Functions

🔹 **Definition:** When a function is called inside another function

```js
function outer() {
    function inner() {
        document.writeln("Hello from inner function!");
    }
    inner();
    document.writeln("Outer function executed");
}
outer();
```

---

## 🧪 Practical Programs

### 1️⃣ Multiplication Table

```js
function table(x) {
    for (let i = 1; i <= 10; i++) {
        document.writeln(`${x} * ${i} = ${x * i}<br>`);
    }
}
table(8);
```

---

### 2️⃣ Sum of 1 to N

```js
function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
document.writeln(sumToN(100)); // 5050
```

---

### 3️⃣ Factorial using Iteration

```js
function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}
```

---

### 4️⃣ Armstrong Number Check

```js
function countDigits(num) {
    let count = 0;
    while (num > 0) {
        num = Math.floor(num / 10);
        count++;
    }
    return count;
}

function isArmstrong(num) {
    let temp = num, arm = 0, digits = countDigits(num);
    while (temp > 0) {
        let rem = temp % 10, pow = 1;
        for (let i = 0; i < digits; i++) pow *= rem;
        arm += pow;
        temp = Math.floor(temp / 10);
    }
    return arm === num;
}
```

---

### 5️⃣ Calculator Using Functions and Switch

```js
function add(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mul(a, b) { return a * b; }

let a = 10, b = 5, operator = "*";

switch (operator) {
    case "+": document.writeln(add(a, b)); break;
    case "-": document.writeln(sub(a, b)); break;
    case "*": document.writeln(mul(a, b)); break;
    default: document.writeln("Invalid Operation");
}
```

---

### 6️⃣ Time Converter (Seconds to HH\:MM\:SS)

```js
function timeConverter(seconds) {
    let h = Math.floor(seconds / 3600);
    let m = Math.floor((seconds % 3600) / 60);
    let s = seconds % 60;
    document.writeln(`${h}:${m}:${s}`);
}
```

---

## ❓ Practice Questions for You

Try solving these with functions:

1. 🔢 Print multiplication table of any number.
2. 🔂 Convert inches to feet and inches.
3. ➕ Calculator with all operations using switch-case and functions.
4. 🔁 Check if number is palindrome.
5. 📥 Convert string to number using `parseInt()`.
6. 🔁 Print 1 to N using recursion.
7. 🔢 Count digits in a number using function.
8. ✳️ Check if number is Armstrong.
9. 🧠 Build a function that greets user with name.
10. 🎯 Create nested function: greeting → intro → message

---

## 🧠 Best Practices

✅ Use meaningful function names (e.g., `calculateInterest`, not `ci`)
✅ Keep functions **small and focused**
✅ Use **parameters** for input and **return** for output
✅ Avoid global variables inside functions
✅ Reuse code with functions to prevent duplication

---

## 📌 Summary Table

| Concept      | Example                          | Notes           |
| ------------ | -------------------------------- | --------------- |
| `function`   | `function greet() {}`            | Declaration     |
| `parameters` | `function greet(name)`           | Input           |
| `arguments`  | `greet("Alex")`                  | Passed value    |
| `return`     | `return result;`                 | Outputs value   |
| `call`       | `greet();`                       | Execute         |
| `recursion`  | `function f(n){ return f(n-1);}` | Calls itself    |
| `nested`     | Function inside another          | Organized logic |
