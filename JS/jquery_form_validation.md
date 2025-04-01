# jQuery & Form Validation Documentation

## 📌 Introduction
**jQuery** is a fast, small, and feature-rich JavaScript library. It simplifies tasks like **HTML document traversal**, **event handling**, **animations**, and **AJAX interactions**.

One common use case for jQuery is **form validation**, ensuring that user input is correctly formatted before submission.

---

## 📌 What is jQuery?
- jQuery is a **JavaScript library** that simplifies **DOM manipulation**.
- It is widely used to **handle events**, **modify elements**, and **make AJAX calls**.
- It works across different browsers, making JavaScript coding easier.

### 🔹 Why Use jQuery?
✅ **Shorter Code:** Reduces the amount of JavaScript code you write.
✅ **Cross-Browser Compatibility:** Works seamlessly across browsers.
✅ **Rich Features:** Built-in functions for DOM manipulation, animations, and event handling.
✅ **Simplifies AJAX:** Makes asynchronous requests simpler.

### 🔹 How to Include jQuery?
There are **two ways** to use jQuery:
1. **Download & Include Locally**
   ```html
   <script src="jquery.min.js"></script>
   ```
2. **Use CDN (Online)** (Recommended)
   ```html
   <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
   ```

---

## 📌 Form Validation Using jQuery
Form validation ensures that user input follows the correct format before submission.

### **🔹 Example: Form Validation**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Form Validation</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
</head>
<body>
    <div style="width: 200px;">
        <input type="email" id="email" placeholder="Enter Email">
        <p id="err"></p>

        <input type="password" id="password" placeholder="Enter Password">
        <p id="err2"></p>

        <input type="password" id="con-password" placeholder="Confirm Password">
        <p id="err2"></p>

        <button type="submit" id="btn">Sign Up</button>
        <h2 id="status"></h2>
    </div>

    <script>
        $("#btn").on("click", function () {
            const emailValidator = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
            const passwordValidator = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            
            const email = $("#email").val();
            const password = $("#password").val();
            const conPassword = $("#con-password").val();

            let isValid = true;

            console.log(email, password, conPassword);

            if (email == "") {
                $("#err").text("Field should not be empty!");
                isValid = false;
            }

            if (password == "" || conPassword == "" || !passwordValidator.test(password)) {
                isValid = false;
                $("#err2").text("Password format not accepted!");
            }

            if (password != conPassword) {
                isValid = false;
                $("#err2").text("Passwords do not match!");
            }

            if (isValid) {
                $("#status").text("Signup successfully!");
                $(".list").append("<p>" + email + "</p>");
            } else {
                $("#status").text("Signup failed!");
            }
        });
    </script>
</body>
</html>
```

### **📌 Explanation:**
- Uses **jQuery selectors** to get input values.
- Validates **email format** using **Regular Expressions (RegEx)**.
- Checks if **password and confirm password match**.
- Displays an error message if validation fails.
- Adds the user’s email to the **list** after successful signup.

---

## 📌 Exception Handling in JavaScript (Using `try...catch`)
Exception handling helps prevent script crashes by handling errors gracefully.

### **🔹 Example 1: Handling Division by Zero**
```javascript
const a = 10, b = 0;
try {
    if (b == 0) {
        throw new Error("Value cannot be divided by zero.");
    }
    document.writeln(a / b);
} catch (error) {
    document.writeln("Error: " + error.message);
}
```

### **🔹 Example 2: Handling Invalid JSON Parsing**
```javascript
try {
    let jsonString = '{ "name": "Alice", "age": 25 '; // Invalid JSON
    let user = JSON.parse(jsonString);
    console.log(user.name);
} catch (error) {
    console.log("Error: Invalid JSON format!");
}
```

---

## 📌 Most Used jQuery Functions
| **Function**      | **Usage** | **Description** |
|-----------------|---------|-------------|
| `$("#id")` | `$("#btn")` | Selects an element by **ID** |
| `$(".class")` | `$(".box")` | Selects elements by **class** |
| `.val()` | `$("#email").val();` | Gets or sets **input field value** |
| `.text()` | `$("#status").text("Success!")` | Sets or gets **text content** |
| `.append()` | `$(".list").append("<p>New</p>")` | Adds an element **inside at the end** |
| `.prepend()` | `$(".list").prepend("<p>First</p>")` | Adds an element **inside at the start** |
| `.hide()` | `$("#box").hide();` | Hides an element |
| `.show()` | `$("#box").show();` | Shows a hidden element |
| `.toggle()` | `$("#box").toggle();` | Toggles visibility |
| `.on("event")` | `$("#btn").on("click", function () {...})` | Event handling |

---

## 📌 Conclusion
jQuery makes **form validation** easier by providing powerful **selectors**, **event handling**, and **DOM manipulation**. This documentation covered:
✔ **How to use jQuery**
✔ **Form validation using RegEx**
✔ **Exception handling using `try-catch`**
✔ **Commonly used jQuery functions**
