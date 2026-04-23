<img width="1024" height="1536" alt="ChatGPT Image Apr 23, 2026, 09_58_39 AM" src="https://github.com/user-attachments/assets/ca1a26e1-4dff-4d51-a984-04fe5d444203" />
# 📘 Sorting Algorithms (DSA Documentation)

## 🔹 What is Sorting?

Sorting means arranging data in a specific order:

* **Ascending** (small → large)
* **Descending** (large → small)

Example:

```
Input:  [5, 2, 9, 1]
Output: [1, 2, 5, 9]
```

---

# 🔹 Types of Sorting Algorithms

## 1. 🟢 Bubble Sort

### 💡 Idea:

Repeatedly compare adjacent elements and swap if they are in wrong order.

### 🔁 Steps:

1. Compare first two elements
2. Swap if needed
3. Move forward
4. Repeat until sorted

### 🧠 Code (JavaScript):

```js
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
```

### ⏱ Time Complexity:

* Best: O(n)
* Worst: O(n²)

### ✅ Use Case:

* Small datasets
* Teaching basics

---

## 2. 🔵 Selection Sort

### 💡 Idea:

Find the smallest element and place it at correct position.

### 🔁 Steps:

1. Find minimum
2. Swap with first element
3. Repeat for remaining array

### 🧠 Code:

```js
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}
```

### ⏱ Time Complexity:

* Best/Worst: O(n²)

### ✅ Use Case:

* When memory swaps are costly

---

## 3. 🟡 Insertion Sort

### 💡 Idea:

Insert each element into its correct position in sorted part.

### 🔁 Steps:

1. Start from second element
2. Compare with previous elements
3. Shift and insert

### 🧠 Code:

```js
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
    return arr;
}
```

### ⏱ Time Complexity:

* Best: O(n)
* Worst: O(n²)

### ✅ Use Case:

* Nearly sorted arrays

---

## 4. 🔴 Merge Sort (Divide & Conquer)

### 💡 Idea:

Divide array → sort → merge

### 🔁 Steps:

1. Divide array into halves
2. Recursively sort
3. Merge sorted halves

### 🧠 Code:

```js
function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
```

### ⏱ Time Complexity:

* Best/Worst: O(n log n)

### ✅ Use Case:

* Large datasets
* Stable sorting required

---

## 5. 🟣 Quick Sort

### 💡 Idea:

Pick a pivot → partition → sort recursively

### 🔁 Steps:

1. Choose pivot
2. Place smaller elements left
3. Larger elements right
4. Recursively sort

### 🧠 Code:

```js
function quickSort(arr) {
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length - 1];
    let left = [], right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < pivot) left.push(arr[i]);
        else right.push(arr[i]);
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}
```

### ⏱ Time Complexity:

* Best: O(n log n)
* Worst: O(n²)

### ✅ Use Case:

* Fast in practice
* Widely used

---

## 6. 🟤 Heap Sort

### 💡 Idea:

Use Binary Heap to sort

### 🔁 Steps:

1. Build max heap
2. Swap root with last
3. Heapify again

### ⏱ Time Complexity:

* Best/Worst: O(n log n)

### ✅ Use Case:

* Memory efficient
* No extra space needed

---

# 🔹 Comparison Table

| Algorithm      | Time Complexity | Space    | Stable |
| -------------- | --------------- | -------- | ------ |
| Bubble Sort    | O(n²)           | O(1)     | ✅ Yes  |
| Selection Sort | O(n²)           | O(1)     | ❌ No   |
| Insertion Sort | O(n²)           | O(1)     | ✅ Yes  |
| Merge Sort     | O(n log n)      | O(n)     | ✅ Yes  |
| Quick Sort     | O(n log n) avg  | O(log n) | ❌ No   |
| Heap Sort      | O(n log n)      | O(1)     | ❌ No   |

---

# 🔹 Key Concepts to Teach Students

* **Stable vs Unstable Sorting**
* **In-place vs Out-of-place**
* **Divide & Conquer**
* **Time vs Space Tradeoff**

---

# 🔹 Interview Tips

* Use **Quick Sort / Merge Sort** for large data
* Use **Insertion Sort** for nearly sorted
* Know when **stability matters**
* Always explain **time complexity**

---

# 🔹 Real-Life Examples

* Sorting marks list
* Sorting products by price
* Sorting leaderboard
* Database indexing


