## 📘 Linear Data Structure — Proper Documentation with Examples

![Image](https://deen3evddmddt.cloudfront.net/uploads/content-images/difference-between-linear-and-non-linear-data-structures.webp)

![Image](https://deen3evddmddt.cloudfront.net/uploads/content-images/array-data-structure.webp)

![Image](https://miro.medium.com/1%2Atxd-JGDSsc-dKKo-J_q6kg.png)

![Image](https://media.licdn.com/dms/image/v2/D5612AQFqNg96ypbWTw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1735476991775?e=2147483647\&t=2A1nmgccs6zT-LfYcIIhjs3M1C1ez7ZvjbzcAoSAp0Y\&v=beta)

![Image](https://d2o2utebsixu4k.cloudfront.net/image3-ee6623686773489ab1c15d17d2ed28c5.png)

---

## 1. Definition

A **Linear Data Structure** is a type of data structure in which elements are stored and accessed in a **sequential (linear) order**.
Each element (except the first and last) has:

* **One previous element**
* **One next element**

Data is arranged in a straight line, and traversal is done in a single direction (front to back or vice versa).

---

## 2. Characteristics

* Data elements are stored **sequentially**
* Each element is connected to its **adjacent element**
* Easy to traverse (one-by-one)
* Memory can be **contiguous** (like arrays) or **non-contiguous** (like linked lists)
* Operations depend on position (start, middle, end)

---

## 3. Types of Linear Data Structures

1. **Array**
2. **Linked List**
3. **Stack**
4. **Queue**
5. **Deque (Double Ended Queue)**

---

## 4. Operations on Linear Data Structures

Common operations:

* **Insertion** – Add an element
* **Deletion** – Remove an element
* **Traversal** – Visit each element
* **Searching** – Find an element
* **Sorting** – Arrange elements
* **Updating** – Modify an element

---

## 5. Detailed Explanation with Examples

---

### 5.1 Array

**Definition:**
An array stores elements of the same data type in **contiguous memory locations**.

**Example:**

```js
let arr = [10, 20, 30, 40];
console.log(arr[2]); // 30
```

**Features:**

* Fixed size
* Fast access using index (O(1))
* Insertion/deletion is costly (shifting required)

**Use Case:**
Storing marks, prices, or list of items with fixed size.

---

### 5.2 Linked List

**Definition:**
A linked list stores data in **nodes**, where each node contains:

* Data
* Address (reference) of next node

**Example (conceptual):**

```js
// Node structure
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

**Features:**

* Dynamic size
* No need for continuous memory
* Easy insertion/deletion
* Slower access (no index)

**Use Case:**
Music playlist, undo/redo operations.

---

### 5.3 Stack (LIFO)

**Definition:**
Stack follows **LIFO (Last In First Out)** principle.

Operations:

* `push()` → insert
* `pop()` → remove
* `peek()` → top element

**Example:**

```js
let stack = [];
stack.push(10);
stack.push(20);
console.log(stack.pop()); // 20
```

**Use Case:**

* Function calls
* Undo/Redo
* Expression evaluation

---

### 5.4 Queue (FIFO)

**Definition:**
Queue follows **FIFO (First In First Out)** principle.

Operations:

* `enqueue()` → insert
* `dequeue()` → remove

**Example:**

```js
let queue = [];
queue.push(10);
queue.push(20);
console.log(queue.shift()); // 10
```

**Use Case:**

* Printer queue
* CPU scheduling
* Ticket booking system

---

### 5.5 Deque (Double Ended Queue)

**Definition:**
Insertion and deletion can be done from **both ends**.

**Example:**

```js
let deque = [];
deque.push(10);     // rear insert
deque.unshift(5);  // front insert
deque.pop();       // rear delete
deque.shift();     // front delete
```

**Use Case:**

* Sliding window problems
* Palindrome checking

---

## 6. Advantages of Linear Data Structures

* Simple and easy to implement
* Easy traversal
* Useful for small to medium datasets
* Efficient for sequential processing

---

## 7. Disadvantages of Linear Data Structures

* Wastage of memory (in arrays)
* Insertion/deletion can be slow
* Not suitable for hierarchical data
* Limited flexibility

---

## 8. Real-Life Examples

| Structure   | Real-Life Example      |
| ----------- | ---------------------- |
| Array       | Student marks list     |
| Stack       | Stack of plates        |
| Queue       | Line at ticket counter |
| Linked List | Train coaches          |
| Deque       | Browser history        |

---

## 9. Comparison with Non-Linear Data Structure

| Linear Data Structure | Non-Linear Data Structure |
| --------------------- | ------------------------- |
| Sequential order      | Hierarchical/graph order  |
| One-to-one relation   | One-to-many relation      |
| Easy to traverse      | Complex traversal         |
| Example: Array, Stack | Example: Tree, Graph      |

---

## 10. Conclusion

A **Linear Data Structure** stores data in a sequential manner and is the foundation of many algorithms.
Understanding linear data structures is essential before learning:

* Trees
* Graphs
* Advanced algorithms

---

## 11. One Simple Practical Program (Array Traversal)

```js
let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

**Output:**

```
1
2
3
4
5
```

