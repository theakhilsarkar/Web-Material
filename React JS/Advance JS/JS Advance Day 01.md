# 📘 **Day 1 - Modern JavaScript (ES6+) Concepts**

JavaScript has evolved significantly over the years. ES6 (ECMAScript 2015) introduced **powerful features** that make code **cleaner, more readable, and easier to maintain**, especially for **React, Node.js, and modern frameworks**.


## ✅ **Topics Covered**

1. `let` and `const`
2. Arrow Functions
3. Template Literals
4. Destructuring
5. Spread & Rest Operators





## **1. let and const**

### **Definition**

* `let` and `const` are **block-scoped** variable declarations introduced in ES6.
* **let** → for variables that can be reassigned.
* **const** → for constants (cannot be reassigned).



### **Why use it?**

* **Avoids issues with `var` (function scope, hoisting bugs).**
* Ensures better **scope control** and **code safety**.



### **Example**

```javascript
let name = "Rahul";
name = "Amit"; // ✅ allowed

const age = 25;
// age = 30; ❌ Error: Assignment to constant variable
```



### **Role in Development**

* Prevents accidental overwriting of important variables.
* Makes your code predictable and bug-free.



### **Practice Question**

```javascript
// Q1: What will be the output?
let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);
```




## **2. Arrow Functions**

### **Definition**

Arrow functions provide a **shorter syntax** for writing functions and **do not bind their own `this`**.


### **Why use it?**

* **Cleaner code** and **better for callbacks** (React event handlers).
* Automatically binds `this` from surrounding context.



### **Example**

```javascript
const add = (a, b) => a + b;
console.log(add(5, 10)); // 15
```



### **Role in Development**

* **React components** use arrow functions for event handling.
* **Callbacks** in promises, APIs, setTimeout.



### **Practice Question**

Convert this function into an arrow function:

```javascript
function greet(name) {
  return "Hello " + name;
}
```




## **3. Template Literals**

### **Definition**

Template literals allow **string interpolation** using backticks `` ` `` and `${}` for variables.



### **Why use it?**

* Easier to **combine variables and strings**.
* Allows **multi-line strings** without `+` concatenation.



### **Example**

```javascript
const name = "Rahul";
console.log(`Hello, ${name}! Welcome to ES6.`);
```



### **Role in Development**

* Used in **dynamic HTML rendering**, **React JSX**, **API URLs**.



### **Practice Question**

```javascript
// Write a template literal for:
let product = "Laptop";
let price = 50000;
// Output: Laptop costs ₹50000
```



## **4. Destructuring**

### **Definition**

Destructuring allows you to **extract values from arrays or objects** into separate variables.

### **Why use it?**

* Reduces repetitive code.
* Makes **data extraction from API responses** easy.

### **Example**

```javascript
const user = { name: "Rahul", age: 22 };
const { name, age } = user;
console.log(name, age);
```

### **Role in Development**

* Essential in **React props and state**.
* Used in **API response handling**.


### **Practice Question**

```javascript
// Extract "title" and "year" from this object:
const movie = { title: "RRR", year: 2022, director: "Rajamouli" };
```



## **5. Spread & Rest Operators (`...`)**

### **Definition**

* **Spread (`...`)** → Expands arrays/objects.
* **Rest (`...`)** → Collects multiple values into an array.


### **Why use it?**

* Spread → **Combining, copying, immutability**.
* Rest → **Handling dynamic arguments in functions**.


### ✅ **Examples of Spread Operator**

#### **a) Spread in Arrays**

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

---

#### **b) Copying an Array**

```javascript
const original = [1, 2, 3];
const copy = [...original];

copy.push(4);

console.log(original); // [1, 2, 3]
console.log(copy);     // [1, 2, 3, 4]
```

---

#### **c) Spread in Objects**

```javascript
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, city: "Delhi" };

console.log(updatedUser);
// { name: "Alice", age: 25, city: "Delhi" }
```

---

#### **d) Spread in Function Calls**

```javascript
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```


---

## ✅ **2. Rest Operator**

The **Rest Operator (`...`)** is used to **collect multiple arguments into a single variable** (array or object).

---

### ✅ **Why use Rest?**

* To create functions that **accept any number of arguments**.
* To extract **remaining properties** from objects or arrays.

---

### ✅ **Examples of Rest Operator**

#### **a) Rest in Functions**

```javascript
function sum(...nums) {
  return nums.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

---

#### **b) Rest in Destructuring**

```javascript
const [first, second, ...rest] = [10, 20, 30, 40, 50];
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]
```

---

#### **c) Rest in Objects**

```javascript
const user = { name: "Alice", age: 25, city: "Delhi" };
const { name, ...otherDetails } = user;

console.log(name); // Alice
console.log(otherDetails); // { age: 25, city: "Delhi" }
```

---

---

### ✅ **Key Differences Between Spread & Rest**

| Feature | Spread Operator                  | Rest Operator                        |
| ------- | -------------------------------- | ------------------------------------ |
| Purpose | Expands values                   | Collects values into an array/object |
| Used In | Arrays, Objects, Function Calls  | Functions, Destructuring             |
| Example | `sum(...[1,2,3])` → `sum(1,2,3)` | `function sum(...args){}`            |

---





### ✅ **Practice Questions**

1. Merge two arrays using the **spread operator**.
2. Write a function `multiply` that accepts **any number of arguments** using **rest**.
3. Use destructuring with **rest** to extract the first two elements of an array and store the rest in a variable.
4. Copy an object using **spread** and add a new property.

### **Role in Development**

* Spread → **Updating React state** without mutation.
* Rest → **APIs with variable parameters**.


### **Practice Question**

```javascript
// Combine two objects using the spread operator:
const obj1 = { a: 1 };
const obj2 = { b: 2 };
```


# ✅ **Why ES6 Features Are Important for React and Modern JS**

* **Cleaner syntax** → less boilerplate.
* **Better state management** in React (immutability with spread).
* **Easier API handling** with destructuring and template literals.
* **Improved readability** → faster development.

## ✅ **Practice Set (10 Questions)**

1. Convert a normal function to an arrow function that returns the square of a number.
2. Use template literals to print `"My name is John and I am 25 years old."`.
3. Extract `city` and `country` from an object using destructuring.
4. Merge two arrays `[1, 2]` and `[3, 4]` using the spread operator.
5. Write a function that takes unlimited arguments and returns their product (use rest operator).
6. Explain why `const` does not allow reassignment but allows object property updates.
7. Convert this code to ES6:

```javascript
var name = "Alex";
var greet = function(name) {
  return "Hello " + name;
};
```

8. Write a function that returns the max value from a given array using spread operator.
9. Use destructuring to swap two variables `a` and `b`.
10. Write a function `fetchData` that uses template literals to print `Fetching data from {url}`.

