

# 📄 **HTML Form Elements – Lecture 4 Notes**

## ✅ What is a `<form>`?

The `<form>` tag is used to create a form that collects user input and sends it to a server (or processes with JavaScript).

### 🔹 Syntax:

```html
<form action="submit.php" method="post">
  <!-- form elements go here -->
</form>
```

### 🔹 Attributes:

| Attribute | Description                        |
| --------- | ---------------------------------- |
| `action`  | URL where form data is sent        |
| `method`  | `get` or `post` (default is `get`) |

---

## 🧾 `<input>` Element – User Input Field

Used to take various types of inputs from users using `type` attribute.

### 🔹 Common `type` values:

| Input Type | Description                            | Example                                 |
| ---------- | -------------------------------------- | --------------------------------------- |
| `text`     | Single-line text input                 | `<input type="text">`                   |
| `email`    | Validates email format                 | `<input type="email">`                  |
| `password` | Hides characters                       | `<input type="password">`               |
| `tel`      | Telephone number (optional validation) | `<input type="tel">`                    |
| `color`    | Color picker                           | `<input type="color">`                  |
| `range`    | Slider for number range                | `<input type="range" min="1" max="10">` |
| `file`     | Upload a file                          | `<input type="file">`                   |
| `date`     | Date picker                            | `<input type="date">`                   |
| `radio`    | Radio button (one option)              | `<input type="radio" name="gender">`    |
| `checkbox` | Multiple selection allowed             | `<input type="checkbox">`               |

---

## 📌 `<button>` Element

Used to create a clickable button.

### 🔹 Syntax:

```html
<button type="submit">Submit</button>
```

### 🔹 Button `type` Attributes:

| Type     | Description                  |
| -------- | ---------------------------- |
| `submit` | Submits form (default type)  |
| `reset`  | Clears all input fields      |
| `button` | Regular button (use with JS) |

---

## 📝 `<textarea>` Element

Used for **multi-line** text input.

### 🔹 Syntax:

```html
<textarea rows="4" cols="30" placeholder="Write your message here..."></textarea>
```

---

## 🔽 `<select>` and `<option>`

### 🔹 `<select>`:

Creates a dropdown menu. Use `<option>` tags inside it.

### 🔹 Syntax:

```html
<select>
  <option value="gujarat">Gujarat</option>
  <option value="maharashtra">Maharashtra</option>
</select>
```

### 🔹 `<option>` Attributes:

| Attribute  | Description                      |
| ---------- | -------------------------------- |
| `value`    | Value submitted when selected    |
| `selected` | Makes option selected by default |

---

## 📍 Important Form Attributes

| Attribute     | Use                                           |
| ------------- | --------------------------------------------- |
| `required`    | Makes the field compulsory before form submit |
| `selected`    | Sets a default selected option in dropdown    |
| `checked`     | Pre-checks radio/checkbox                     |
| `placeholder` | Hint shown in input field before typing       |
| `value`       | Sets the initial value of a form element      |
| `name`        | Key used to identify input on the server      |

---

## ✅ Full Practical Example

```html
<form action="submit.html" method="post">
  <label>Username:</label>
  <input type="text" name="username" required><br><br>

  <label>Email:</label>
  <input type="email" name="email" required><br><br>

  <label>Password:</label>
  <input type="password" name="password" required><br><br>

  <label>Phone:</label>
  <input type="tel" name="phone"><br><br>

  <label>Pick Color:</label>
  <input type="color" name="favcolor"><br><br>

  <label>Range (1-10):</label>
  <input type="range" name="range" min="1" max="10"><br><br>

  <label>Upload File:</label>
  <input type="file" name="myfile"><br><br>

  <label>Date:</label>
  <input type="date" name="dob"><br><br>

  <label>Gender:</label>
  <input type="radio" name="gender" value="male" checked> Male
  <input type="radio" name="gender" value="female"> Female<br><br>

  <label>Hobbies:</label>
  <input type="checkbox" name="hobby" value="reading"> Reading
  <input type="checkbox" name="hobby" value="sports"> Sports<br><br>

  <label>State:</label>
  <select name="state">
    <option value="gujarat" selected>Gujarat</option>
    <option value="maharashtra">Maharashtra</option>
    <option value="rajasthan">Rajasthan</option>
  </select><br><br>

  <label>Comments:</label><br>
  <textarea name="comments" rows="4" cols="40" placeholder="Enter feedback..."></textarea><br><br>

  <button type="submit">Submit</button>
  <button type="reset">Clear</button>
</form>
```

---

## 🧠 Quick Recap (Interview Points):

* `<form>` is used for user input.
* `<input>` supports many `type` values.
* `required` ensures mandatory field.
* `<textarea>` is for long text.
* `<select>` with `<option>` creates dropdown.
* Use `selected`, `checked`, `value`, and `placeholder` wisely.
* `<button>` has types: `submit`, `reset`, `button`.

## Lab Task : 
https://docs.google.com/document/d/1rfw0LSh7OSBqS-GzU2kEd6uTcwLQOX41NFWqN3xlK9g/edit?tab=t.0
