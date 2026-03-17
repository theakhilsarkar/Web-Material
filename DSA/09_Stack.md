# Stack – Complete Guide

---

## 1. Definition

A **Stack** is a linear data structure that follows the principle of:

> **LIFO (Last In, First Out)**

This means:

* The element inserted last will be removed first

---

## 2. Basic Concept

Think of a stack like a **pile of plates**:

* You place plates on top
* You remove plates from the top
* You cannot remove from the middle

---

## 3. Structure

```text
Top
 ↓
[30]
[20]
[10]
```

* `Top` points to the most recently added element
* Insert → happens at top
* Delete → happens from top

---

## 4. Key Operations

---

### 4.1 Push (Insert)

Adds an element to the top of the stack

---

### 4.2 Pop (Delete)

Removes the top element from the stack

---

### 4.3 Peek (Top)

Returns the top element without removing it

---

### 4.4 isEmpty

Checks if the stack is empty

---

## 5. Real-Life Use Cases

---

### 1. Undo/Redo Operations

* Last action is undone first

---

### 2. Browser History

* Back button uses stack

---

### 3. Expression Evaluation

* Used in calculators and compilers

---

### 4. Function Call Stack

* Tracks function execution in programs

---

### 5. Parenthesis Matching

* Used in syntax checking

---

## 6. Implementation in JavaScript

---

### Stack using Array

```js
class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    console.log(this.items);
  }
}
```

---

## 7. Example

```js
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.pop(); // removes 30

stack.print(); // [10, 20]
```

---

## 8. Stack using Linked List (Advanced)

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) return null;
    let temp = this.top;
    this.top = this.top.next;
    return temp.data;
  }
}
```

---

## 9. Common Interview Questions (MNC Level)

---

### Q1. Reverse a String using Stack

```js
function reverseString(str) {
  let stack = [];

  for (let char of str) {
    stack.push(char);
  }

  let reversed = "";

  while (stack.length > 0) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log(reverseString("hello"));
```

---

### Q2. Balanced Parentheses

```js
function isBalanced(str) {
  let stack = [];

  for (let char of str) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}
```

---

### Q3. Next Greater Element

```js
function nextGreater(arr) {
  let stack = [];
  let result = Array(arr.length).fill(-1);

  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
      let index = stack.pop();
      result[index] = arr[i];
    }
    stack.push(i);
  }

  return result;
}
```

---

### Q4. Implement Stack using Queue (Concept)

* Use two queues
* Push costly or pop costly approach

(Concept-based question often asked in interviews)

---

### Q5. Min Stack (Get minimum in O(1))

```js
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val) {
    this.stack.push(val);

    if (
      this.minStack.length === 0 ||
      val <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(val);
    }
  }

  pop() {
    let removed = this.stack.pop();

    if (removed === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
}
```

---

## 10. Advantages

* Simple implementation
* Efficient operations (O(1))
* Useful in recursion and backtracking

---

## 11. Limitations

* Limited access (only top element)
* Cannot access middle elements directly

---

## 12. Summary

* Stack follows **LIFO principle**
* Operations:

  * Push
  * Pop
  * Peek
* Widely used in:

  * Undo/Redo
  * Parsing
  * Function calls


