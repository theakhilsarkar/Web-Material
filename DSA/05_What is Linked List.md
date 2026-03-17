# Linked List

---

## 1. What is a Linked List?

A **Linked List** is a linear data structure in which elements (called nodes) are stored in **non-contiguous memory locations**. Each node contains data and a reference (pointer) to the next node in the sequence.

Unlike arrays, linked lists do not store elements in continuous memory locations.

---

## 2. Basic Concept

A linked list is made up of nodes, where each node contains:

* **Data** – the value stored in the node
* **Next Pointer** – the address/reference of the next node

### Representation:

```
[ Data | Next ]
```

### Example:

```
10 → 20 → 30 → 40 → null
```

---

## 3. Key Terminology

### Node

The fundamental unit of a linked list that stores data and a reference to the next node.

### Head

The first node of the linked list. It acts as the entry point to access the list.

### Tail

The last node in the list. It points to `null` (in most types).

### Pointer (Reference)

A variable that stores the address of the next node.

---

## 4. Working of Linked List

1. The list starts with the **head node**
2. Each node stores:

   * Data
   * Reference to the next node
3. The last node points to `null` (except in circular structures)

---

## 5. Types of Linked List (Theory)

---

### 5.1 Singly Linked List

**Definition:**
A singly linked list is a type of linked list where each node contains a reference only to the **next node**.

**Traversal:** Forward only

**Structure:**

```
10 → 20 → 30 → 40 → null
```

**Advantages:**

* Simple and easy to implement
* Requires less memory compared to other types

**Limitations:**

* Cannot traverse backward
* Deletion may require tracking the previous node

---

### 5.2 Doubly Linked List

**Definition:**
A doubly linked list contains nodes with two references:

* One to the next node
* One to the previous node

**Traversal:** Forward and backward

**Structure:**

```
null ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → null
```

**Advantages:**

* Bidirectional traversal
* Easier insertion and deletion

**Limitations:**

* Extra memory required for the previous pointer

---

### 5.3 Circular Linked List

**Definition:**
In a circular linked list, the last node points back to the **first node (head)** instead of `null`.

**Structure:**

```
10 → 20 → 30 → 40
↑                 ↓
← ← ← ← ← ← ← ← ←
```

**Advantages:**

* No null references
* Continuous traversal possible

**Limitations:**

* Risk of infinite loops if not handled properly

---

### 5.4 Circular Doubly Linked List

**Definition:**
A circular doubly linked list is a combination of doubly and circular linked lists:

* Each node has next and previous pointers
* The last node connects back to the first

**Structure:**

```
10 ⇄ 20 ⇄ 30 ⇄ 40
↑                 ↓
← ← ← ← ← ← ← ← ←
```

**Advantages:**

* Full traversal in both directions
* No null pointers

**Limitations:**

* More complex structure
* Higher memory usage

---

## 6. Advantages of Linked List

* Dynamic size (can grow or shrink at runtime)
* Efficient insertion and deletion
* No need for continuous memory allocation

---

## 7. Limitations of Linked List

* No direct (random) access to elements
* Additional memory required for pointers
* Traversal is slower compared to arrays

---

## 8. Linked List vs Array

| Feature       | Array              | Linked List            |
| ------------- | ------------------ | ---------------------- |
| Memory        | Continuous         | Non-contiguous         |
| Size          | Fixed              | Dynamic                |
| Access        | Fast (index-based) | Sequential             |
| Insert/Delete | Costly             | Efficient              |
| Memory Usage  | Less               | More (due to pointers) |

---

## 9. Real-Life Use Cases

* **Music playlists** – sequential song navigation
* **Browser history** – back and forward operations
* **Undo/Redo systems** – maintaining action history
* **Dynamic data structures** – where size frequently changes
* **Navigation systems** – step-by-step paths
