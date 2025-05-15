Here’s a well-organized list of commonly used **JavaScript Array Built-in Methods** along with their:

* **Definition**
* **Use-case**
* **Practical Example (code snippet)**

---

## 🧠 JavaScript Array Built-in Methods

### 1. **push()**

* **Definition**: Adds one or more elements to the end of an array.
* **Use**: Useful when you want to add items like a shopping cart or a list.
* **Example**:

  ```js
  let cart = ["apple", "banana"];
  cart.push("orange");
  console.log(cart); // ["apple", "banana", "orange"]
  ```

---

### 2. **pop()**

* **Definition**: Removes the last element from an array and returns it.
* **Use**: Used when you want to undo the last addition.
* **Example**:

  ```js
  let cart = ["apple", "banana", "orange"];
  cart.pop();
  console.log(cart); // ["apple", "banana"]
  ```

---

### 3. **shift()**

* **Definition**: Removes the first element from an array.
* **Use**: Removing the front item like queue management.
* **Example**:

  ```js
  let line = ["user1", "user2", "user3"];
  line.shift();
  console.log(line); // ["user2", "user3"]
  ```

---

### 4. **unshift()**

* **Definition**: Adds one or more elements to the beginning of an array.
* **Use**: Used when you want to give high priority to a task.
* **Example**:

  ```js
  let tasks = ["task2", "task3"];
  tasks.unshift("task1");
  console.log(tasks); // ["task1", "task2", "task3"]
  ```

---

### 5. **concat()**

* **Definition**: Merges two or more arrays and returns a new array.
* **Use**: Merging data like combining student lists.
* **Example**:

  ```js
  let a = [1, 2];
  let b = [3, 4];
  let merged = a.concat(b);
  console.log(merged); // [1, 2, 3, 4]
  ```

---

### 6. **slice(start, end)**

* **Definition**: Returns a shallow copy of a portion of an array.
* **Use**: Creating a subset or pagination.
* **Example**:

  ```js
  let data = [10, 20, 30, 40, 50];
  let page = data.slice(1, 4);
  console.log(page); // [20, 30, 40]
  ```

---

### 7. **splice(start, deleteCount, item1, ...)**

* **Definition**: Adds or removes items from an array at any position.
* **Use**: Editing content like menu or list.
* **Example**:

  ```js
  let colors = ["red", "blue", "green"];
  colors.splice(1, 1, "yellow");
  console.log(colors); // ["red", "yellow", "green"]
  ```

---

### 8. **find()**

* **Definition**: Returns the first element that matches a condition.
* **Use**: Searching for specific user or product.
* **Example**:

  ```js
  let nums = [3, 6, 8, 9];
  let result = nums.find(n => n > 5);
  console.log(result); // 6
  ```

---

### 9. **filter()**

* **Definition**: Returns a new array with all elements that match the condition.
* **Use**: Filtering students above 80 marks.
* **Example**:

  ```js
  let marks = [50, 80, 90, 60];
  let topScorers = marks.filter(mark => mark > 75);
  console.log(topScorers); // [80, 90]
  ```

---

### 10. **map()**

* **Definition**: Returns a new array after applying a function on every element.
* **Use**: Transforming data like multiplying prices with tax.
* **Example**:

  ```js
  let prices = [100, 200];
  let updated = prices.map(p => p * 1.18);
  console.log(updated); // [118, 236]
  ```

---

### 11. **reduce()**

* **Definition**: Reduces array to a single value using a function.
* **Use**: Total marks, total price in cart.
* **Example**:

  ```js
  let nums = [10, 20, 30];
  let total = nums.reduce((sum, n) => sum + n, 0);
  console.log(total); // 60
  ```

---

### 12. **sort()**

* **Definition**: Sorts the array in place.
* **Use**: Ranking, Leaderboard.
* **Example**:

  ```js
  let scores = [80, 100, 40, 90];
  scores.sort((a, b) => b - a);
  console.log(scores); // [100, 90, 80, 40]
  ```

---

### 13. **includes()**

* **Definition**: Checks if an array includes a specific value.
* **Use**: Checking availability in stock.
* **Example**:

  ```js
  let fruits = ["apple", "banana"];
  console.log(fruits.includes("banana")); // true
  ```

---

### 14. **at()**

* **Definition**: Returns the element at a given index (supports negative index).
* **Use**: Accessing specific or last element easily.
* **Example**:

  ```js
  let items = [10, 20, 30];
  console.log(items.at(-1)); // 30
  ```

---

### 15. **every()**

* **Definition**: Tests if all elements pass the condition.
* **Use**: Validating all inputs or checks.
* **Example**:

  ```js
  let ages = [18, 22, 25];
  console.log(ages.every(age => age >= 18)); // true
  ```

---

### 16. **some()**

* **Definition**: Checks if at least one element passes the condition.
* **Use**: Checking availability or error in data.
* **Example**:

  ```js
  let marks = [35, 55, 20];
  console.log(marks.some(m => m < 35)); // true
  ```
