## 📘 Non-Linear Data Structure — Proper Documentation with Examples

![Image](https://d14qv6cm1t62pm.cloudfront.net/ccbp-website/Blogs/home/non-linear-data-structures-definition-its-types-and-examples-image-2.png)

![Image](https://www.tutorialspoint.com/data_structures_algorithms/images/tree_data_structure.jpg)

![Image](https://deen3evddmddt.cloudfront.net/uploads/content-images/binary-tree-in-dsa.webp)

![Image](https://upload.wikimedia.org/wikipedia/commons/5/5e/Binary_tree_v2.svg)

![Image](https://www.crio.do/blog/content/images/2022/02/Diagram-of-Binary-Tree.png)

---

## 1. Definition

A **Non-Linear Data Structure** is a type of data structure in which elements are **not arranged sequentially**.
Instead of forming a straight line, data elements are connected in a **hierarchical** or **network** form.

Each element can be connected to **multiple elements**, creating:

* **One-to-many** relationships
* **Many-to-many** relationships

---

## 2. Characteristics

* Data is arranged in **hierarchical or graph-like structure**
* Elements can have **multiple links**
* Traversal can be done in **multiple paths**
* Data is not stored in a single sequence
* More complex than linear data structures

---

## 3. Types of Non-Linear Data Structures

1. **Tree**
2. **Graph**

(Advanced forms: Heap, Trie, B-Tree, AVL Tree, etc.)

---

## 4. Common Operations

* **Insertion** – Add new element
* **Deletion** – Remove element
* **Traversal** – Visit all elements (DFS, BFS)
* **Searching** – Find element
* **Updating** – Modify element

---

## 5. Detailed Explanation with Examples

---

### 5.1 Tree Data Structure

**Definition:**
A **tree** is a hierarchical data structure consisting of **nodes**, where:

* One node is called the **root**
* Each node can have **child nodes**
* Nodes with no children are called **leaf nodes**

---

### Key Terms:

* **Root** – First node
* **Parent** – Node having children
* **Child** – Node connected below parent
* **Leaf** – Node with no children
* **Subtree** – Tree inside another tree
* **Height/Depth** – Levels of tree

---

### Example (Conceptual):

```
        A   (Root)
       / \
      B   C
     / \   \
    D   E   F
```

---

### JavaScript Example (Tree Node):

```js
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}

let root = new Node("A");
root.children.push(new Node("B"));
root.children.push(new Node("C"));
```

---

### Types of Trees:

* **Binary Tree** – Max 2 children
* **Binary Search Tree (BST)** – Left < Root < Right
* **Heap** – Min Heap / Max Heap
* **Trie** – Used for words/searching
* **AVL Tree** – Self-balancing tree

---

### Use Cases of Tree:

* File system (folders & files)
* Organization hierarchy
* HTML DOM
* Database indexing

---

### 5.2 Graph Data Structure

**Definition:**
A **graph** is a collection of:

* **Vertices (nodes)**
* **Edges (connections)**

Graphs can be:

* **Directed** (one-way)
* **Undirected** (two-way)
* **Weighted** (edges have cost)

---

### Example (Conceptual):

```
A ----- B
| \     |
|  \    |
C ----- D
```

---

### JavaScript Example (Graph using Adjacency List):

```js
let graph = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A", "D"],
  D: ["B", "C"]
};

console.log(graph["A"]); // [ 'B', 'C' ]
```

---

### Types of Graphs:

* Directed Graph
* Undirected Graph
* Weighted Graph
* Cyclic Graph
* Acyclic Graph (DAG)

---

### Use Cases of Graph:

* Google Maps (shortest path)
* Social networks
* Computer networks
* Recommendation systems

---

## 6. Advantages of Non-Linear Data Structures

* Efficient for representing **hierarchical data**
* Faster searching in trees (BST)
* Flexible relationships
* Better modeling of real-world systems

---

## 7. Disadvantages of Non-Linear Data Structures

* Complex implementation
* Difficult traversal
* Uses more memory
* Harder to debug

---

## 8. Real-Life Examples

| Data Structure | Real-Life Example        |
| -------------- | ------------------------ |
| Tree           | Family tree              |
| Tree           | File explorer            |
| Graph          | Road map                 |
| Graph          | Social media connections |

---

## 9. Linear vs Non-Linear Data Structure

| Linear DS           | Non-Linear DS              |
| ------------------- | -------------------------- |
| Sequential          | Hierarchical/Network       |
| One-to-one          | One-to-many / Many-to-many |
| Easy to traverse    | Complex traversal          |
| Stack, Queue, Array | Tree, Graph                |

---

## 10. One Simple Practical Program (Tree Traversal)

```js
class Node {
  constructor(data) {
    this.left = null;
    this.right = null;
    this.data = data;
  }
}

let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);

function inorder(node) {
  if (node !== null) {
    inorder(node.left);
    console.log(node.data);
    inorder(node.right);
  }
}

inorder(root);
```

**Output:**

```
5
10
15
```

---

## 11. Conclusion

A **Non-Linear Data Structure** organizes data in a hierarchical or graph-based way instead of a straight line.
They are powerful for:

* Fast searching
* Modeling real-world problems
* Complex relationships

They are essential for learning:
✅ Trees
✅ Graphs
✅ Advanced Algorithms (DFS, BFS, Dijkstra)

