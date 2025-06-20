

# ✅ **Login Form Validation Documentation (JavaScript + RegEx + Bootstrap)**

## 🎯 **Objective:**

To validate an email and password on button click using:

* JavaScript
* RegEx (Regular Expressions)
* Bootstrap for styling
* DOM for interaction

---

## 📁 **HTML Structure Assumption:**

```html
<!-- Input Fields -->
<input type="email" id="email" class="form-control" placeholder="Enter email">
<input type="password" id="password" class="form-control" placeholder="Enter password">

<!-- Button -->
<button id="login" class="btn btn-primary">Login</button>

<!-- Message Output -->
<p id="msg" class="text-danger mt-3"></p>
```

---

## 🧠 **JavaScript Code with Explanation**

```js
// Step 1: Get all required DOM elements
const email = document.getElementById("email");
const password = document.getElementById("password");
const login = document.getElementById("login");
const msg = document.getElementById("msg");

// Step 2: Regular expressions (RegEx) for email & password
// Email must follow standard format (e.g., test@example.com)
const emailRegx =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}/;

// Password rules:
// - At least 8 characters
// - At least one lowercase letter
// - At least one uppercase letter
// - At least one number
const passwordRegx =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

// Step 3: Add click event on Login button
login.addEventListener("click", () => {
  // Optional (for testing only): Show password temporarily
  password.type = "text";

  // Step 4: Validation logic

  // Case 1: If any field is empty
  if (email.value === "" || password.value === "") {
    msg.textContent = "⚠️ Both fields are required!";
    msg.className = "text-danger";
  }

  // Case 2: Both fields are valid
  else if (emailRegx.test(email.value) && passwordRegx.test(password.value)) {
    msg.textContent = "✅ Email and Password are valid!";
    msg.className = "text-success";
  }

  // Case 3: Both are invalid
  else if (!emailRegx.test(email.value) && !passwordRegx.test(password.value)) {
    msg.textContent = "❌ Enter valid email and password!";
    msg.className = "text-danger";
  }

  // Case 4: Only email is invalid
  else if (!emailRegx.test(email.value)) {
    msg.textContent = "❌ Enter a valid email!";
    msg.className = "text-danger";
  }

  // Case 5: Only password is invalid
  else if (!passwordRegx.test(password.value)) {
    msg.textContent = "❌ Enter a valid password!";
    msg.className = "text-danger";
  }
});
```

---

## 💡 Notes for Students:

| Topic              | Explanation                                                  |
| ------------------ | ------------------------------------------------------------ |
| **RegEx**          | A pattern to match specific text (like emails or passwords). |
| `test()`           | A method to check if a string matches a RegEx pattern.       |
| `.value`           | Used to get the input value from an input field.             |
| `.textContent`     | Used to update the inner text of a DOM element.              |
| `.className`       | Allows us to dynamically change styling using Bootstrap.     |
| `addEventListener` | Executes code on specific events like `click`.               |

---

## 🎨 Optional CSS (If needed for better UI)

```css
input {
  margin-bottom: 10px;
}
```

---

## 🧪 Example Inputs:

* ✅ Valid Email: `user@gmail.com`
* ✅ Valid Password: `Test@1234`
* ❌ Invalid Email: `user@@gmail`
* ❌ Invalid Password: `1234` or `abc` or `TEST`

---

### ✅ Final Output Behavior:

| Input Type       | Output Message                    |
| ---------------- | --------------------------------- |
| Empty fields     | ⚠️ Both fields are required!      |
| Valid email/pass | ✅ Email and Password are valid!   |
| Invalid email    | ❌ Enter a valid email!            |
| Invalid password | ❌ Enter a valid password!         |
| Both invalid     | ❌ Enter valid email and password! |
