
# 📘 Searching Algorithms in JavaScript

## 📌 Introduction

Searching algorithms are used to **find a specific element** in a data structure like an array, list, or tree.

👉 Goal:
Given a collection of data, efficiently locate a target value.

---

# 🔍 1. Linear Search

## 📖 Definition

Linear Search checks **each element one by one** until the target is found or the list ends.

## 🧠 Logic

* Start from first element
* Compare with target
* If match → return index
* Else → move to next

---

## 💻 Implementation

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
```

---

## ▶ Example

```javascript
let numbers = [5, 10, 15, 20];

console.log(linearSearch(numbers, 15)); 
// Output: 2
```

---

## ⏱ Complexity

* Best Case: **O(1)**
* Worst Case: **O(n)**

---

## ✅ Advantages

* Works on **unsorted data**
* Very simple to implement

## ❌ Disadvantages

* Slow for large datasets

---

# 🔍 2. Binary Search

## 📖 Definition

Binary Search finds an element by repeatedly dividing the array into halves.

⚠ شرط: Array must be **sorted**

---

## 🧠 Logic

* Find middle element
* If equal → return
* If target > middle → search right
* If target < middle → search left

---

## 💻 Implementation

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}
```

---

## ▶ Example

```javascript
let numbers = [5, 10, 15, 20, 25];

console.log(binarySearch(numbers, 20));
// Output: 3
```

---

## ⏱ Complexity

* Best Case: **O(1)**
* Worst Case: **O(log n)**

---

## ✅ Advantages

* Very fast for large datasets

## ❌ Disadvantages

* Only works on **sorted arrays**

---

# 🔧 3. Built-in JavaScript Methods

## indexOf()

```javascript
let arr = [10, 20, 30];
arr.indexOf(20); // 1
```

## includes()

```javascript
arr.includes(30); // true
```

## find()

```javascript
let users = [{id:1}, {id:2}];
users.find(u => u.id === 2);
```

---

# ⚖️ Comparison Table

| Algorithm     | Data Requirement | Time Complexity | Use Case   |
| ------------- | ---------------- | --------------- | ---------- |
| Linear Search | Unsorted         | O(n)            | Small data |
| Binary Search | Sorted           | O(log n)        | Large data |
| indexOf/find  | Any              | O(n)            | Quick use  |

---

# 🎯 Real-Life Examples

* Searching contact in phone → Linear Search
* Searching word in dictionary → Binary Search
* Finding user in database → Optimized search

---

# 🧑‍🏫 Teaching Tips

* Start with **Linear Search (easy to understand)**
* Then introduce **Binary Search with visualization**
* Use **number arrays first**, then objects
* Ask students:

  * “What if data is not sorted?”
  * “Why Binary Search is faster?”

---

# 🚀 Practice Questions

1. Find a number in array using Linear Search
2. Implement Binary Search manually
3. Count how many steps each algorithm takes
4. Modify search to return element instead of index


