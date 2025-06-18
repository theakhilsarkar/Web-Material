

# 📝 Project Title: Note App using DOM & JavaScript

### 🔧 Project Features:

* Add notes using `Submit`
* Display notes in styled boxes
* Edit existing notes
* Delete specific notes
* Responsive using Bootstrap

---

## 🧠 Concepts Covered:

* DOM Manipulation (`getElementById`, `createElement`, `appendChild`)
* Event Handling (`addEventListener`)
* Arrays (`push`, `splice`)
* Bootstrap Integration
* Basic UI/UX Logic
* Editable `textarea` input

---

## 🏗️ HTML + Bootstrap Code

```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Note App</title>

  <!-- Bootstrap CDN -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body>
  <h1 class="text-center my-3">📝 Note App</h1>

  <!-- Input Area -->
  <div class="container">
    <div class="form-floating">
      <textarea class="form-control" placeholder="Enter note here..." id="input" style="height: 100px"></textarea>
      <label for="input">Enter Note...</label>
    </div>

    <!-- Action Buttons -->
    <button class="btn btn-primary my-3" id="submit">Submit</button>
    <button class="btn btn-warning my-3" id="edit">Edit</button>
  </div>

  <!-- Display Notes Here -->
  <div class="container d-flex flex-wrap" id="notes"></div>

  <!-- Bootstrap JS -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>

  <!-- Custom Script -->
  <script src="script.js"></script>
</body>

</html>
```

---

## 💻 JavaScript Code (script.js)

```js
// Access DOM elements by ID
const input = document.getElementById("input");
const submit = document.getElementById("submit");
const notes = document.getElementById("notes");
const edit = document.getElementById("edit");

// Sample notes data
let noteList = [
  "Wake Up 5 AM",
  "Good Morning",
  "Plan Your Day"
];

let editIndex = -1; // Track which index is being edited

// Function to show all notes
function displayNote() {
  notes.innerHTML = ""; // Clear existing content

  noteList.map((note, index) => {
    // Create note container
    const div = document.createElement("div");
    div.className = "container border p-3 rounded bg-light shadow-sm mx-2 my-2";

    // Create paragraph for note text
    const p = document.createElement("p");
    p.textContent = note;

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-warning mx-1";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      editNote(index);
    });

    // Delete Button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      deleteNote(index);
    });

    // Add all elements to div
    div.appendChild(p);
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);

    // Add to DOM
    notes.appendChild(div);
  });
}

// Initial display
displayNote();

// Add Note Function
function addNote() {
  const value = input.value.trim();

  // Validation: avoid empty input
  if (value === "") {
    alert("Please enter a note.");
    return;
  }

  noteList.push(value); // Add to array
  input.value = ""; // Clear input
  displayNote(); // Refresh UI
}

// Edit Note: Load existing note into input
function editNote(index) {
  input.value = noteList[index]; // Pre-fill textarea
  editIndex = index; // Save index to update later
}

// Save Edited Note
edit.addEventListener("click", () => {
  const value = input.value.trim();

  if (value === "") {
    alert("Please enter some updated text.");
    return;
  }

  if (editIndex !== -1) {
    noteList[editIndex] = value; // Update the array
    input.value = "";
    editIndex = -1; // Reset index
    displayNote();
  }
});

// Delete Note by Index
function deleteNote(index) {
  noteList.splice(index, 1); // Remove from array
  displayNote(); // Refresh UI
}

// Add note on submit click
submit.addEventListener("click", addNote);
```

---

## 🛠️ Fixes & Enhancements Added:

| Issue                     | Fix                                           |
| ------------------------- | --------------------------------------------- |
| No empty note validation  | Added `trim()` and alert for empty note       |
| `editIndex` default value | Set to `-1` instead of `0` to avoid confusion |
| Repetitive data in sample | Reduced to unique values                      |
| UI clarity                | Bootstrap styling to note boxes               |
| UX                        | Clear input after adding/editing              |

---

## 📌 Learning Points Recap:

* Use `.trim()` to clean unwanted spaces in inputs
* `document.createElement()` helps dynamically add HTML elements
* `appendChild()` places content into the DOM
* Use `addEventListener` to trigger functions on button clicks
* Arrays store multiple notes; `.splice()` removes elements
* Bootstrap makes UI clean and responsive

---

## 🧪 Practice Questions:

1. 🔁 Modify the app to **update note instantly while typing** without clicking the Edit button.
2. 🗂️ Add a feature to **categorize notes** using dropdown: "Personal", "Work", "Urgent".
3. 🔍 Implement a **search bar** to filter notes live.
4. 🕒 Add **timestamps** when notes are created/edited.
5. 💾 Try to **save notes in `localStorage`**, so they persist after page refresh.
