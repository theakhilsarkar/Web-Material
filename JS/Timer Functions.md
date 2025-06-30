# JavaScript Timer Functions Full Documentation

## ✨ Overview

JavaScript provides powerful functions to handle **timed events**. These are very useful for animations, scheduling code execution, auto-refreshing, countdowns, and building real-time applications like clocks, slideshows, and quiz timers.

---

## 🕐 Timer Functions

| Function Name     | Definition                                                          | Use Case                                 |
| ----------------- | ------------------------------------------------------------------- | ---------------------------------------- |
| `setTimeout()`    | Executes a function **once** after a given delay (in milliseconds). | Show popup after delay, delay execution. |
| `setInterval()`   | Repeats execution of a function after every given interval.         | Real-time clock, auto image slider.      |
| `clearTimeout()`  | Cancels a `setTimeout()` function before it executes.               | Cancel delayed actions.                  |
| `clearInterval()` | Stops a function running under `setInterval()`.                     | Stop real-time clock, stop auto slider.  |

---

## 🔎 Definitions and Concepts

### 1. `setTimeout()`

* Syntax:

  ```js
  setTimeout(function, delay);
  ```
* **delay** = time in milliseconds
* Executes **only once** after the delay.

**Example:**

```js
setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);
```

### 2. `setInterval()`

* Syntax:

  ```js
  setInterval(function, interval);
  ```
* **interval** = time between each call (in ms)
* Executes the function repeatedly every interval.

**Example:**

```js
const id = setInterval(() => {
  console.log("Repeats every 2 seconds");
}, 2000);
```

### 3. `clearTimeout()` / `clearInterval()`

* Used to **stop** the execution.
* Save the returned ID from `setTimeout` or `setInterval` and pass to clear.

**Example:**

```js
const id = setTimeout(() => {
  console.log("Will not execute");
}, 5000);

clearTimeout(id);
```

```js
const id = setInterval(() => {
  console.log("Repeats");
}, 1000);

setTimeout(() => {
  clearInterval(id); // Stop after 5 seconds
}, 5000);
```

---

## 📅 Real-Time Clock Example

```js
setInterval(() => {
  const now = new Date();
  console.log(now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
}, 1000);
```

---

## 📱 Popup Ad after Delay

```js
const popup = document.getElementById("popup");

setTimeout(() => {
  popup.style.display = "block";
}, 5000);
```

---

## 🎭 Image Slider with Auto Play

```js
let index = 0;
let id;

function showImage() {
  document.getElementById("img").src = images[index];
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage();
}

function autoPlay() {
  id = setInterval(nextImage, 1000);
}

function stopAutoPlay() {
  clearInterval(id);
}
```

---

## 🧲 Use Cases in Real Life

| Task                       | Timer Used                       |
| -------------------------- | -------------------------------- |
| Clock                      | `setInterval()`                  |
| Popup ads after delay      | `setTimeout()`                   |
| Stop a slider              | `clearInterval()`                |
| Quiz timer + next question | `setTimeout()` + `setInterval()` |

---

## ℹ️ Notes

* Time is in milliseconds (1000 ms = 1 second)
* `setTimeout` runs **once**; `setInterval` runs **repeatedly**
* Always store the return value (timer ID) if you want to cancel using `clearInterval` or `clearTimeout`

---

## 📂 Summary Table of Methods

| Method              | Description                                |
| ------------------- | ------------------------------------------ |
| `setTimeout()`      | Run code once after a delay                |
| `clearTimeout(id)`  | Cancel `setTimeout` execution              |
| `setInterval()`     | Run code repeatedly after fixed interval   |
| `clearInterval(id)` | Cancel repeated execution of `setInterval` |

---

## 📅 Assignment Task for Students

1. Create a digital clock using `setInterval()`
2. Show a popup div after 5 seconds using `setTimeout()`
3. Create an image slider with next/prev/auto/stop buttons
4. Make a countdown timer that ends with "Time's Up!"
5. Create a quiz with 60 seconds timer and move to result after time
