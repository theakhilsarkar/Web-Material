# JavaScript Array - Documentation & Learning Notes

## Definition

An **array** in JavaScript is a special type of object used to store multiple values in a single variable. Arrays can hold elements of any data type and are indexed numerically, starting from 0.

```js
let fruits = ["apple", "banana", "cherry"];
```

## Real-Life Example

Imagine a shopping cart where you store multiple products. Each product can be accessed by its position (index) in the cart list.

```js
let cart = ["Shampoo", "Soap", "Toothpaste"];
console.log(cart[0]); // Shampoo
```

## Practical Example

You are calculating the total bill of items in your cart:

```js
let prices = [100, 200, 50];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}
console.log(total); // 350
```

---

## Accessing Elements

```js
let arr = [10, 20, 30];
console.log(arr[1]); // 20
```

## Adding Elements

```js
arr.push(40); // Add to end
arr.unshift(0); // Add to beginning
```

## Removing Elements

```js
arr.pop(); // Removes last
arr.shift(); // Removes first
```

## Updating Elements

```js
arr[1] = 25; // Changes second element
```

## Traversing the Array

```js
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

---

## Built-in Array Methods (Most Useful)

### `push()` and `pop()`

* `push()` adds element at the end.
* `pop()` removes the last element.

### `shift()` and `unshift()`

* `shift()` removes first element.
* `unshift()` adds element at the start.

### `concat()`

Combines two or more arrays and returns a new array.

```js
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b); // [1,2,3,4]
```

### `slice(start, end)`

Returns part of an array.

```js
let arr = [1,2,3,4,5];
console.log(arr.slice(1, 4)); // [2,3,4]
```

### `splice(index, count)`

Removes or replaces elements.

```js
arr.splice(2, 1); // removes one element at index 2
```

### `sort()`

Sorts elements (by default, as strings).

```js
arr.sort((a, b) => a - b); // ascending
arr.sort((a, b) => b - a); // descending
```

### `find()`

Returns the first element that satisfies a condition.

```js
let x = arr.find((value) => value > 50);
```

---

## Common Logical Array Programs

### 1. Print Even Numbers

```js
let price = [100, 220, 340, 55];
for (let i = 0; i < price.length; i++) {
    if (price[i] % 2 === 0) {
        console.log(price[i]);
    }
}
```

### 2. Sum of All Elements

```js
let cart = [100, 220, 99];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i];
}
console.log(total);
```

### 3. Reverse an Array

```js
let arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
}
```

### 4. Addition of Two Arrays

```js
let a = [1, 2, 3];
let b = [4, 5, 6];
for (let i = 0; i < a.length; i++) {
    console.log(a[i] + b[i]);
}
```

---

## 2D Array (Nested Array)

An array of arrays used to store tabular or matrix data.

```js
let marks = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
];
console.log(marks[1][2]); // 60
```

---

## Summary

Arrays are powerful data structures in JavaScript that allow you to store, access, and manipulate multiple values efficiently. Mastering array methods and logic is crucial for real-world problem-solving in web development.
