
# 🧠 Quiz App – 10 MCQ Questions

This is a **simple MCQ-based quiz app** built using **HTML, Bootstrap & JavaScript (DOM)**.
It allows the user to answer 10 multiple-choice questions, navigate through them using a **"Submit & Next"** button, and displays the final score at the end.

---

## 📁 Files Included

```
/quiz-app
│
├── index.html     ➤ UI layout using Bootstrap
├── script.js      ➤ JavaScript logic and DOM manipulation
└── README.md      ➤ Project explanation (with output video)
```

---

## 🧩 Features

✅ 10 multiple-choice questions
✅ Show next question on button click
✅ Tracks selected answers
✅ Calculates final score
✅ Displays score at the end

---

## 📄 `index.html` - UI Layout

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz App</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div class="container">
      <p class="fs-1">Quiz</p>
      <p class="fs-4" id="question"></p>

      <!-- Option A -->
      <div class="form-check">
        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
        <label class="form-check-label" for="radioDefault1"> A. </label>
        <span class="option"></span>
      </div>

      <!-- Option B -->
      <div class="form-check">
        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
        <label class="form-check-label" for="radioDefault1"> B. </label>
        <span class="option"></span>
      </div>

      <!-- Option C -->
      <div class="form-check">
        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
        <label class="form-check-label" for="radioDefault1"> C. </label>
        <span class="option"></span>
      </div>

      <!-- Option D -->
      <div class="form-check">
        <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
        <label class="form-check-label" for="radioDefault1"> D. </label>
        <span class="option"></span>
      </div>

      <button class="btn btn-primary my-3" id="btn">Submit & Next</button>
    </div>

    <!-- Final Score -->
    <div class="container">
      <p id="score"></p>
    </div>

    <script src="script.js"></script>
  </body>
</html>
```

---

## 💡 `script.js` - JavaScript Logic

```js
const mcqList = [
  { question: "Which planet is known as the 'Red Planet'?", options: ["Earth", "Mars", "Jupiter", "Venus"], answer: "Mars" },
  { question: "What is the capital city of France?", options: ["Berlin", "London", "Paris", "Rome"], answer: "Paris" },
  { question: "How many continents are there in the world?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "Which animal is known as the 'King of the Jungle'?", options: ["Tiger", "Lion", "Bear", "Elephant"], answer: "Lion" },
  { question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], answer: "Pacific Ocean" },
  { question: "What is the color of a school bus?", options: ["Red", "Blue", "Yellow", "Green"], answer: "Yellow" },
  { question: "Which fruit is long and yellow?", options: ["Apple", "Orange", "Banana", "Grape"], answer: "Banana" },
  { question: "How many days are in a week?", options: ["5", "6", "7", "8"], answer: "7" },
  { question: "What do bees make?", options: ["Milk", "Honey", "Bread", "Sugar"], answer: "Honey" },
  { question: "What do you use to write on a blackboard?", options: ["Pen", "Pencil", "Chalk", "Marker"], answer: "Chalk" }
];

const ansList = ["Mars", "Paris", "7", "Lion", "Pacific Ocean", "Yellow", "Banana", "7", "Honey", "Chalk"];
```

### 🔄 DOM Selectors & State

```js
const question = document.querySelector("#question");
const options = document.querySelectorAll(".option"); // spans
const optionButtons = document.querySelectorAll(".form-check-input"); // radio inputs
const button = document.querySelector("#btn");
const score = document.querySelector("#score");

let currentIndex = 0;
let count = 0;
let userAns = [];
```

### 📘 Show Question Function

```js
function showQuestion(index) {
  question.textContent = "Q " + (index + 1) + " " + mcqList[index].question;
  options.forEach((option, i) => {
    option.textContent = mcqList[index].options[i];
  });
}
```

### ✅ Check Selected Option

```js
function checkQuestion(index) {
  optionButtons.forEach((opBtn, i) => {
    if (opBtn.checked) {
      userAns.push(mcqList[index].options[i]);
    }
  });
}
```

### 📊 Score Calculation

```js
function countScore() {
  for (let i = 0; i < ansList.length; i++) {
    if (ansList[i] == userAns[i]) {
      count++;
    }
  }
  score.textContent = "Score : " + count + "/10";
}
```

### 🎯 Button Click Logic

```js
button.addEventListener('click', () => {
  if (currentIndex < mcqList.length) {
    checkQuestion(currentIndex);
    currentIndex++;
    if (currentIndex < mcqList.length) {
      showQuestion(currentIndex);
    }
  }

  if (currentIndex == mcqList.length) {
    countScore();
    currentIndex++;
  }
});

showQuestion(currentIndex);
```

---

## 📌 How It Works

1. 🟢 On page load, the **first question** is shown.
2. ✅ User selects an answer and clicks **Submit & Next**.
3. ➡️ The selected answer is stored, and the next question appears.
4. 🏁 After 10 questions, the **score is calculated** and displayed.

---

## 🛠️ Future Enhancements (Optional Ideas)

* 🔁 Add a **Restart Quiz** button.
* ✅ Highlight correct/wrong answers after submission.
* 🧪 Show result with percentage or grade.
* 📅 Add a timer per question.
