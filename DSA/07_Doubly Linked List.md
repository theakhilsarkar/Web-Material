# Doubly Linked List – Complete Guide

---

## 1. Definition

A **Doubly Linked List (DLL)** is a linear data structure where each node contains:

* **Data**
* **Reference to the next node**
* **Reference to the previous node**

This allows traversal in **both directions (forward and backward)**.

---

## 2. Structure

Each node consists of:

```text
[ Prev | Data | Next ]
```

### Example Representation

```text
null ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → null
```

* `10` is the head node
* `40` is the tail node
* `Prev` of head is `null`
* `Next` of tail is `null`

---

## 3. Key Characteristics

* Bidirectional traversal
* Dynamic size
* Efficient insertion and deletion
* Requires extra memory for previous pointer

---

## 4. Real-Life Use Cases

### 1. Browser Navigation

* Back and forward buttons
* Each page connects to both previous and next page

### 2. Music/Video Playlist

* Next and previous track navigation

### 3. Undo/Redo Functionality

* Move forward and backward in action history

### 4. Navigation Systems

* Move to next or previous step easily

---

## 5. Basic Implementation in JavaScript

---

### Node Structure

```js
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}
```

---

### Doubly Linked List Class

```js
class DoublyLinkedList {
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

  if (!this.head) {
    this.head = newNode;
    return;
  }

  this.head.prev = newNode;
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
  newNode.prev = temp;
}
```

---

## 6.2 Read (Traversal)

### Forward Traversal

```js
printForward() {
  let temp = this.head;

  while (temp) {
    console.log(temp.data);
    temp = temp.next;
  }
}
```

---

### Backward Traversal

```js
printBackward() {
  let temp = this.head;

  while (temp && temp.next) {
    temp = temp.next;
  }

  while (temp) {
    console.log(temp.data);
    temp = temp.prev;
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
    if (this.head) this.head.prev = null;
    return;
  }

  let temp = this.head;

  while (temp && temp.data !== value) {
    temp = temp.next;
  }

  if (!temp) return;

  if (temp.next) temp.next.prev = temp.prev;
  if (temp.prev) temp.prev.next = temp.next;
}
```

---

# 7. Sorting in Doubly Linked List

### Bubble Sort

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
const list = new DoublyLinkedList();

list.insertAtEnd(40);
list.insertAtEnd(10);
list.insertAtEnd(30);

list.sort();

list.printForward();
list.printBackward();
```

---

# 9. Common Interview Questions (MNC Level)

---

## Q1. Reverse Doubly Linked List

```js
reverse() {
  let temp = null;
  let current = this.head;

  while (current) {
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;
    current = current.prev;
  }

  if (temp) {
    this.head = temp.prev;
  }
}
```

---

## Q2. Find Length

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

## Q3. Insert at Position

```js
insertAtPosition(pos, data) {
  if (pos === 0) {
    this.insertAtStart(data);
    return;
  }

  let temp = this.head;
  let index = 0;

  while (temp && index < pos - 1) {
    temp = temp.next;
    index++;
  }

  if (!temp) return;

  const newNode = new Node(data);

  newNode.next = temp.next;
  if (temp.next) temp.next.prev = newNode;

  temp.next = newNode;
  newNode.prev = temp;
}
```

---

## Q4. Delete Last Node

```js
deleteLast() {
  if (!this.head) return;

  if (!this.head.next) {
    this.head = null;
    return;
  }

  let temp = this.head;

  while (temp.next) {
    temp = temp.next;
  }

  temp.prev.next = null;
}
```

---

## Q5. Search Element

```js
search(value) {
  let temp = this.head;

  while (temp) {
    if (temp.data === value) return true;
    temp = temp.next;
  }

  return false;
}
```

---

# 10. Summary

* Doubly Linked List supports **two-way traversal**
* Each node has **prev and next pointers**
* Easier insertion and deletion compared to singly linked list
* Requires more memory due to extra pointer
* Widely used in navigation-based systems


