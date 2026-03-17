# Circular Linked List – Complete Guide

---

## 1. Definition

A **Circular Linked List (CLL)** is a linear data structure where:

* Each node contains **data** and a **reference to the next node**
* The **last node points back to the first node (head)** instead of `null`

This creates a **circular structure**, allowing continuous traversal.

---

## 2. Structure

Each node consists of:

```text id="d5os7e"
[ Data | Next ]
```

### Example Representation

```text id="ckyyim"
10 → 20 → 30 → 40
↑                 ↓
← ← ← ← ← ← ← ← ←
```

* `10` is the head node
* `40` is the last node
* `40.next` points back to `10`

---

## 3. Key Characteristics

* No `null` pointer in the list
* Last node connects to the first node
* Traversal can start from any node
* Requires careful handling to avoid infinite loops

---

## 4. Real-Life Use Cases

### 1. Round-Robin Scheduling (Operating System)

* Processes are executed in a circular manner
* After the last process, execution returns to the first

---

### 2. Multiplayer Turn-Based Games

* Turns rotate among players
* After the last player, it cycles back to the first

---

### 3. Music Playlist (Loop Mode)

* Songs repeat continuously
* Last song links back to the first

---

### 4. Traffic Light Systems

* Signals rotate in a cycle
* Red → Yellow → Green → Repeat

---

## 5. Basic Implementation in JavaScript

---

### Node Structure

```js id="u9b0kt"
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
```

---

### Circular Linked List Class

```js id="24gbgk"
class CircularLinkedList {
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

```js id="l3y83j"
insertAtStart(data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    newNode.next = this.head;
    return;
  }

  let temp = this.head;

  while (temp.next !== this.head) {
    temp = temp.next;
  }

  newNode.next = this.head;
  temp.next = newNode;
  this.head = newNode;
}
```

---

### Insert at End

```js id="t90h8k"
insertAtEnd(data) {
  const newNode = new Node(data);

  if (!this.head) {
    this.head = newNode;
    newNode.next = this.head;
    return;
  }

  let temp = this.head;

  while (temp.next !== this.head) {
    temp = temp.next;
  }

  temp.next = newNode;
  newNode.next = this.head;
}
```

---

## 6.2 Read (Traversal)

```js id="h2m0ta"
printList() {
  if (!this.head) return;

  let temp = this.head;

  do {
    console.log(temp.data);
    temp = temp.next;
  } while (temp !== this.head);
}
```

---

## 6.3 Update

```js id="8w69rr"
update(oldValue, newValue) {
  if (!this.head) return;

  let temp = this.head;

  do {
    if (temp.data === oldValue) {
      temp.data = newValue;
      return;
    }
    temp = temp.next;
  } while (temp !== this.head);
}
```

---

## 6.4 Delete

### Delete by Value

```js id="6xfmnp"
delete(value) {
  if (!this.head) return;

  let current = this.head;
  let prev = null;

  // Case: only one node
  if (current.data === value && current.next === this.head) {
    this.head = null;
    return;
  }

  // Case: delete head
  if (current.data === value) {
    let temp = this.head;

    while (temp.next !== this.head) {
      temp = temp.next;
    }

    this.head = this.head.next;
    temp.next = this.head;
    return;
  }

  do {
    prev = current;
    current = current.next;

    if (current.data === value) {
      prev.next = current.next;
      return;
    }
  } while (current !== this.head);
}
```

---

# 7. Sorting in Circular Linked List

### Bubble Sort

```js id="sm8y6y"
sort() {
  if (!this.head) return;

  let swapped;

  do {
    swapped = false;
    let temp = this.head;

    do {
      let nextNode = temp.next;

      if (nextNode !== this.head && temp.data > nextNode.data) {
        let t = temp.data;
        temp.data = nextNode.data;
        nextNode.data = t;
        swapped = true;
      }

      temp = temp.next;
    } while (temp.next !== this.head);

  } while (swapped);
}
```

---

# 8. Full Example

```js id="z4vbcu"
const list = new CircularLinkedList();

list.insertAtEnd(30);
list.insertAtEnd(10);
list.insertAtEnd(20);

list.sort();

list.printList();
```

---

# 9. Common Interview Questions (MNC Level)

---

## Q1. Detect Circular Linked List

```js id="ktsh64"
isCircular() {
  if (!this.head) return false;

  let temp = this.head.next;

  while (temp && temp !== this.head) {
    temp = temp.next;
  }

  return temp === this.head;
}
```

---

## Q2. Find Length

```js id="cmhckr"
length() {
  if (!this.head) return 0;

  let count = 0;
  let temp = this.head;

  do {
    count++;
    temp = temp.next;
  } while (temp !== this.head);

  return count;
}
```

---

## Q3. Split Circular Linked List into Two Halves

```js id="a7y4w1"
split() {
  let slow = this.head;
  let fast = this.head;

  while (fast.next !== this.head && fast.next.next !== this.head) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let head1 = this.head;
  let head2 = slow.next;

  slow.next = head1;
  fast.next = head2;

  return [head1, head2];
}
```

---

## Q4. Search Element

```js id="fb6lj4"
search(value) {
  if (!this.head) return false;

  let temp = this.head;

  do {
    if (temp.data === value) return true;
    temp = temp.next;
  } while (temp !== this.head);

  return false;
}
```

---

## Q5. Delete Entire List

```js id="jlypua"
clear() {
  this.head = null;
}
```

---

# 10. Summary

* Circular Linked List forms a **loop structure**
* Last node points back to the head
* No null pointer exists
* Suitable for cyclic processes
* Requires careful traversal to avoid infinite loops

