
# 🎓 **HTML Lecture 2: Multimedia, Links & Formatting Tags**

---

## ✅ 1. `<img />` — Image Tag

### 📌 **Purpose**:

Used to **display images** on a webpage.

### 🔖 **Attributes**:

| Attribute          | Description                           |
| ------------------ | ------------------------------------- |
| `src`              | Path or URL of the image (required)   |
| `alt`              | Alternate text if image fails to load |
| `title`            | Tooltip text on hover                 |
| `width` / `height` | Control the image size (in px or %)   |

### ✅ **Example**:

```html
<img src="./assets/profile.jpg" alt="My Profile Picture" title="Student Profile" width="200" height="200">
```

---

## ✅ 2. `<marquee>` — Moving Text or Image (⚠️ Deprecated)

### 📌 **Purpose**:

Used to **scroll text or images** horizontally or vertically.

### 🔖 **Attributes**:

| Attribute      | Description                    |
| -------------- | ------------------------------ |
| `direction`    | `left`, `right`, `up`, `down`  |
| `behavior`     | `scroll`, `slide`, `alternate` |
| `scrollamount` | Speed of scroll (number)       |

### ✅ **Example**:

```html
<marquee direction="left" behavior="scroll" scrollamount="5">
  Welcome to Web Development Class!
</marquee>
```

---

## ✅ 3. `<center>` — Center Align Content (⚠️ Deprecated)

### 📌 **Purpose**:

Used to **center-align** text, images, or any element.

### ✅ **Example**:

```html
<center>
  <h2>This heading is centered</h2>
</center>
```

🟡 *Note: Use CSS `text-align: center` instead in modern HTML.*

---

## ✅ 4. `<a>` — Anchor Tag (for Links)

### 📌 **Purpose**:

Used to create **hyperlinks**.

### 🔖 **Attributes**:

| Attribute | Description             |
| --------- | ----------------------- |
| `href`    | URL or link target      |
| `target`  | `_blank`, `_self`, etc. |
| `name/id` | For bookmarks           |

### 📌 **Types of Links**:

* 🔗 **External Link**: To another website
* 📂 **Internal Link**: To another page of the same site
* 🔖 **Bookmark Link**: Jump to a section within the same page

### ✅ **Examples**:

#### External Link

```html
<a href="https://www.google.com" target="_blank">Visit Google</a>
```

#### Internal Link

```html
<a href="about.html">About Us</a>
```

#### Bookmark Link

```html
<!-- Target Section -->
<h2 id="services">Our Services</h2>

<!-- Link -->
<a href="#services">Jump to Services</a>
```

---

## ✅ 5. `<font>` — Font Styling (⚠️ Deprecated)

### 📌 **Purpose**:

Used to style text font, color, and size.

### 🔖 **Attributes**:

| Attribute | Description                        |
| --------- | ---------------------------------- |
| `face`    | Font family (e.g., Arial, Verdana) |
| `color`   | Text color                         |
| `size`    | Text size (1–7)                    |

### ✅ **Example**:

```html
<font face="Verdana" color="blue" size="4">Welcome to HTML</font>
```

🟡 *Note: Use CSS `font-family`, `color`, `font-size` in modern development.*

---

## ✅ Full Example of `<a>` (Anchor Tag) with All Use Cases

### 💡 Anchor tag is used to create hyperlinks in HTML. It can:

* Link to other websites
* Link to internal pages
* Jump to a section on the same page (bookmark)
* Open links in new tabs/windows

---

### 🔗 **1. External Link (Another Website)**

```html
<a href="https://www.google.com" target="_blank">Open Google</a>
```

* `href`: URL you want to open
* `target="_blank"`: Opens link in new tab

---

### 📂 **2. Internal Link (Same Website/Page)**

```html
<a href="contact.html">Go to Contact Page</a>
```

* `href="contact.html"` refers to a local file in the same directory

---

### 🔖 **3. Bookmark Link (Jump Within the Same Page)**

#### Step 1: Target Section

```html
<h2 id="about">About Us</h2>
<p>This section describes our mission and vision.</p>
```

#### Step 2: Link to that section

```html
<a href="#about">Go to About Us</a>
```

✅ This scrolls to the "About Us" section.

---

### ✅ Combined Example:

```html
<!DOCTYPE html>
<html>
<head>
  <title>Anchor Tag Example</title>
</head>
<body>

  <h1>Anchor Tag Examples</h1>

  <!-- External -->
  <p><a href="https://www.wikipedia.org" target="_blank">Visit Wikipedia</a></p>

  <!-- Internal -->
  <p><a href="services.html">Our Services Page</a></p>

  <!-- Bookmark -->
  <p><a href="#contact">Jump to Contact Section</a></p>

  <hr>

  <h2 id="contact">Contact Us</h2>
  <p>Email: contact@example.com</p>

</body>
</html>
```

---

## 🎨 List of Commonly Supported Web Safe Font Families

These fonts are supported across most browsers and systems:

| **Font Name**   | **HTML Example**                                              |
| --------------- | ------------------------------------------------------------- |
| Arial           | `<font face="Arial">This is Arial</font>`                     |
| Verdana         | `<font face="Verdana">This is Verdana</font>`                 |
| Helvetica       | `<font face="Helvetica">This is Helvetica</font>`             |
| Times New Roman | `<font face="Times New Roman">This is Times New Roman</font>` |
| Georgia         | `<font face="Georgia">This is Georgia</font>`                 |
| Courier New     | `<font face="Courier New">This is Courier New</font>`         |
| Comic Sans MS   | `<font face="Comic Sans MS">This is Comic Sans MS</font>`     |
| Trebuchet MS    | `<font face="Trebuchet MS">This is Trebuchet MS</font>`       |
| Impact          | `<font face="Impact">This is Impact</font>`                   |
| Lucida Console  | `<font face="Lucida Console">This is Lucida Console</font>`   |

