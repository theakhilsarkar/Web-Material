

# Queue – Complete Guide

---

## 1. Definition

A **Queue** is a linear data structure that follows the principle of:

> **FIFO (First In, First Out)**

This means:

* The element inserted first will be removed first

---

## 2. Basic Concept

Think of a queue like a **line of people at a ticket counter**:

* Person who comes first gets served first
* New people join at the end
* No one can skip the line

---

## 3. Structure

```text id="rnbhks"
Front → [10] [20] [30] [40] ← Rear
```

* **Front** → element to be removed
* **Rear** → element to be inserted

---

## 4. Key Operations

---

### 4.1 Enqueue (Insert)

Adds an element at the **rear (end)** of the queue

---

### 4.2 Dequeue (Delete)

Removes an element from the **front (start)**

---

### 4.3 Peek (Front)

Returns the front element without removing it

---

### 4.4 isEmpty

Checks whether the queue is empty

---

## 5. Real-Life Use Cases

---

### 1. Ticket Booking System

* People are served in the order they arrive

---

### 2. Printer Queue

* Documents are printed in order

---

### 3. CPU Scheduling

* Tasks are executed in sequence

---

### 4. Call Center Systems

* Calls are handled one by one

---

### 5. Data Buffering

* Streaming or data transfer systems

---

## 6. Implementation in JavaScript

---

### Queue using Array

```js id="5z4r9j"
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(value) {
    this.items.push(value);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items.shift();
  }

  peek() {
    return this.items[0];
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

```js id="ip2wnr"
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.dequeue(); // removes 10

queue.print(); // [20, 30]
```

---

## 8. Queue using Linked List (Advanced)

```js id="m4f0rf"
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(data) {
    const newNode = new Node(data);

    if (!this.rear) {
      this.front = this.rear = newNode;
      return;
    }

    this.rear.next = newNode;
    this.rear = newNode;
  }

  dequeue() {
    if (!this.front) return null;

    let temp = this.front;
    this.front = this.front.next;

    if (!this.front) this.rear = null;

    return temp.data;
  }
}
```

---

# 9. Types of Queue (Theory)

---

## 9.1 Simple Queue

* Standard FIFO structure
* Insert at rear, delete from front

---

## 9.2 Circular Queue

* Last position connects back to first
* Efficient memory utilization

---

## 9.3 Priority Queue

* Elements are served based on priority
* Not strictly FIFO

---

## 9.4 Deque (Double Ended Queue)

* Insert and delete from both ends
* Can act as both stack and queue

---

# 10. Common Interview Questions (MNC Level)

---

## Q1. Implement Queue using Stack

```js id="88nbgs"
class QueueUsingStack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(x) {
    this.stack1.push(x);
  }

  dequeue() {
    if (this.stack2.length === 0) {
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}
```

---

## Q2. Reverse a Queue

```js id="9n2z3o"
function reverseQueue(queue) {
  let stack = [];

  while (queue.length) {
    stack.push(queue.shift());
  }

  while (stack.length) {
    queue.push(stack.pop());
  }

  return queue;
}
```

---

## Q3. Generate Binary Numbers using Queue

```js id="o2uev2"
function generateBinary(n) {
  let result = [];
  let queue = ["1"];

  for (let i = 0; i < n; i++) {
    let front = queue.shift();
    result.push(front);

    queue.push(front + "0");
    queue.push(front + "1");
  }

  return result;
}
```

---

## Q4. Find First Non-Repeating Character

```js id="gh5ipq"
function firstNonRepeating(str) {
  let queue = [];
  let count = {};

  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
    queue.push(char);

    while (queue.length && count[queue[0]] > 1) {
      queue.shift();
    }

    console.log(queue[0] || -1);
  }
}
```

---

## Q5. Sliding Window Maximum (Concept)

* Use deque
* Maintain useful elements only
* Common in high-level interviews

---

# 11. Advantages

* Simple and easy to implement
* Maintains order of processing
* Efficient for scheduling systems

---

## 12. Limitations

* Fixed order (FIFO only)
* No random access
* Inefficient if implemented poorly (array shift cost)

---

## 13. Summary

* Queue follows **FIFO principle**
* Operations:

  * Enqueue
  * Dequeue
  * Peek
* Used in:

  * Scheduling
  * Buffering
  * System design

