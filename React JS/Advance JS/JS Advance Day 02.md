# 📘 **Day 2: Functions & Scope in JavaScript**

JavaScript functions are building blocks for reusability, modularity, and clean code. Advanced concepts like `this`, closures, higher-order functions, and function methods (`bind()`, `call()`, `apply()`) play a **crucial role in React, Node.js, and modern JS frameworks**.


## ✅ **Topics Covered**

1. **`this` keyword**
2. **Closures**
3. **Higher-Order Functions**
4. **bind(), call(), apply()**


## ✅ **1. `this` Keyword**

### **Definition**

`this` refers to the **execution context** of a function — **the object that is calling the function**.

### **Key Points**

* Value of `this` **depends on how a function is called**, not where it is defined.
* In **strict mode**, `this` inside a regular function is `undefined` (otherwise global object).



### **Scenarios**

1. **Global Context**

```javascript
console.log(this); // In browser: Window object
```

2. **Inside Object**

```javascript
const obj = {
  name: "Alice",
  greet: function() {
    console.log(this.name);
  }
};
obj.greet(); // Alice
```

3. **Arrow Functions**
   Arrow functions **do not have their own `this`**; they take `this` from the surrounding scope.

```javascript
const obj = {
  name: "Alice",
  greet: () => console.log(this.name)
};
obj.greet(); // undefined
```

4. **Event Listener**

```javascript
document.getElementById("btn").addEventListener("click", function() {
  console.log(this); // Refers to button element
});
```


## ✅ **2. Closures**

### **Definition**

A **closure** is created when an inner function **remembers the variables** from its **outer function scope** even after the outer function has executed.


### **Example**

```javascript
function outer() {
  let counter = 0;
  return function inner() {
    counter++;
    console.log(counter);
  };
}

const increment = outer();
increment(); // 1
increment(); // 2
```

✔ The inner function retains access to `counter` even after `outer()` has finished.


✅ **Why use Closures?**

* Data privacy (create private variables)
* State persistence in functions


## ✅ **3. Higher-Order Functions**

### **Definition**

A **Higher-Order Function (HOF)** is a function that:

* **Takes another function as an argument**, or
* **Returns a function**.

### **Example**

```javascript
function greet(name) {
  return `Hello, ${name}`;
}

function processUserInput(callback) {
  const name = "Alice";
  console.log(callback(name));
}

processUserInput(greet);
```


✅ **Why use HOF?**

* Functional programming
* Code reusability
* Used in **map(), filter(), reduce()**



## ✅ **4. bind(), call(), apply()**

These are function methods to control **`this` context**.


### **1. call()**

Executes function **immediately** with given `this` and arguments.

```javascript
function greet(city) {
  console.log(`Hello, my name is ${this.name} from ${city}`);
}

const person = { name: "Alice" };
greet.call(person, "Delhi");
```


### **2. apply()**

Same as `call()`, but arguments are in an **array**.

```javascript
greet.apply(person, ["Mumbai"]);
```


### **3. bind()**

Returns a **new function** with `this` bound, but **does not execute immediately**.

```javascript
const newFunc = greet.bind(person, "London");
newFunc(); // Hello, my name is Alice from London
```


✅ **Real-Life Use Cases**

* `bind()` in React class components to handle `this` in event handlers.
* `call()` and `apply()` for **function borrowing**.


# ✅ **Roles in Development**

* `this` is essential in **OOP concepts, React components, event handling**.
* Closures are the **foundation for hooks, private variables, and callbacks**.
* HOFs are **used everywhere** in modern JavaScript (React, Redux, Express).
* `bind()`, `call()`, `apply()` are key for **function context control**.


## ✅ **Practice Questions**

1. What is the difference between `this` in normal and arrow functions?
2. Write an example of closure that maintains a private counter.
3. Convert the below code into a Higher-Order Function:

   ```javascript
   function add(a, b) { return a + b; }
   ```
4. Explain the difference between `bind()`, `call()`, and `apply()` with examples.
5. Create a function `multiply` and use `call()` to borrow it for another object.
