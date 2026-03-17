# Singly Linked List – Complete Guide

---

## 1. Definition

A **Singly Linked List (SLL)** is a linear data structure where each element (node) contains:

* **Data**
* **Reference (pointer) to the next node**

Each node points only to the next node, making traversal possible **in one direction only (forward)**.

---

## 2. Structure

Each node consists of:

```
[ Data | Next ]
```

### Example Representation

```
10 → 20 → 30 → 40 → null
```

* `10` is the head node
* `40` is the last node
* Last node points to `null`

---

## 3. Key Characteristics

* Dynamic size
* Efficient insertion and deletion
* No random access (sequential traversal required)
* Memory is non-contiguous

---

## 4. Real-Life Use Cases

### 1. Music Playlist

* Each song points to the next song
* Sequential play structure

### 2. Browser History (Forward navigation)

* Each page links to the next visited page

### 3. Task Scheduling

* Tasks executed one after another

### 4. Data Streaming

* Continuous flow of data in sequence

---

## 5. Basic Implementation in JavaScript

### Node Structure

```js
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

---

### Linked List Class

```js
class LinkedList {
  constructor() {
    this.head = null;
  }
}
```

---

# 6. CRUD Operations

---

## 6.1 Insert Operations

### Insert at Beginning

```js
insertAtStart(data) {
  const newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode;
}
```

---

### Insert at End

```js
insertAtEnd(data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    return;
  }

  let temp = this.head;
  while (temp.next) {
    temp = temp.next;
  }

  temp.next = newNode;
}
```

---

## 6.2 Read (Traversal)

```js
printList() {
  let temp = this.head;
  while (temp) {
    console.log(temp.data);
    temp = temp.next;
  }
}
```

---

## 6.3 Update

```js
update(oldValue, newValue) {
  let temp = this.head;

  while (temp) {
    if (temp.data === oldValue) {
      temp.data = newValue;
      return;
    }
    temp = temp.next;
  }
}
```

---

## 6.4 Delete

### Delete by Value

```js
delete(value) {
  if (!this.head) return;

  if (this.head.data === value) {
    this.head = this.head.next;
    return;
  }

  let temp = this.head;

  while (temp.next && temp.next.data !== value) {
    temp = temp.next;
  }

  if (temp.next) {
    temp.next = temp.next.next;
  }
}
```

---

# 7. Sorting in Singly Linked List

### Bubble Sort Approach

```js
sort() {
  if (!this.head) return;

  let swapped;

  do {
    swapped = false;
    let temp = this.head;

    while (temp.next) {
      if (temp.data > temp.next.data) {
        let t = temp.data;
        temp.data = temp.next.data;
        temp.next.data = t;
        swapped = true;
      }
      temp = temp.next;
    }
  } while (swapped);
}
```

---

# 8. Full Example

```js
const list = new LinkedList();

list.insertAtEnd(30);
list.insertAtEnd(10);
list.insertAtEnd(20);

list.sort();

list.printList();
```

---

# 9. Common Interview Questions (MNC Level)

---

## Q1. Reverse a Linked List

### Answer

```js
reverse() {
  let prev = null;
  let current = this.head;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  this.head = prev;
}
```

---

## Q2. Find Middle Element

### Answer (Two Pointer Approach)

```js
findMiddle() {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.data;
}
```

---

## Q3. Detect Loop (Cycle)

### Answer (Floyd’s Algorithm)

```js
detectLoop() {
  let slow = this.head;
  let fast = this.head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) return true;
  }

  return false;
}
```

---

## Q4. Remove Duplicates

```js
removeDuplicates() {
  let current = this.head;

  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
}
```

---

## Q5. Find Length

```js
length() {
  let count = 0;
  let temp = this.head;

  while (temp) {
    count++;
    temp = temp.next;
  }

  return count;
}
```

---

# 10. Summary

* A singly linked list is a one-directional structure
* Each node contains data and a pointer to the next node
* Efficient for insertion and deletion
* Commonly used in real-world sequential systems
* Important for coding interviews and system design


