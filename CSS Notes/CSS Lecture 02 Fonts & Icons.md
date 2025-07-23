# 📘 CSS Lecture 2 – Fonts & Icons Attachment

**Topics Covered:**

* Font Attachment (Offline & Online)
* Icon Attachment Methods (IcoMoon, Remix Icon, Font Awesome)
* SVG Icons & Favicon
* Practical Example

---

## ✅ 1. Introduction

Fonts and icons enhance the **visual appearance** of a website.

* **Fonts:** Define how text looks on a page.
* **Icons:** Used for buttons, navigation, and UI indicators without using images.

---

## ✅ 2. Font Attachment

### **Types of Font Attachments**

1. **Online Fonts (Google Fonts)**

   * Most common and easy to use.
   * Example:

     ```html
     <head>
       <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
       <style>
         body {
           font-family: 'Poppins', sans-serif;
         }
       </style>
     </head>
     ```

2. **Offline Fonts (Local Font Attachment)**

   * Store font files in the project and attach using `@font-face`.
     ✅ Example:

   ```css
   @font-face {
     font-family: 'MyFont';
     src: url('fonts/MyFont.ttf') format('truetype');
   }

   body {
     font-family: 'MyFont', sans-serif;
   }
   ```

**Supported font formats:** `.ttf`, `.woff`, `.woff2`, `.otf`

---

## ✅ 3. Icon Attachment

Icons can be added using various methods:

### **a) IcoMoon (Custom Icon Set)**

* Download icons from [https://icomoon.io](https://icomoon.io).
* Steps:

  1. Generate icon font pack.
  2. Include `style.css` from downloaded package.
  3. Use `<span class="icon-classname"></span>`.

✅ Example:

```html
<link rel="stylesheet" href="icomoon/style.css">
<span class="icon-home"></span>
```

---

### **b) Remix Icons**

* CDN method:

```html
<link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">
<i class="ri-home-line"></i>
```

---

### **c) Font Awesome Icons**

* CDN method:

```html
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
<i class="fa-solid fa-user"></i>
```

---

### **d) SVG Icons**

* Inline SVG method:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8 .5L1 7h2v7h4V9h2v5h4V7h2L8 .5z"/>
</svg>
```

---

## ✅ 4. Favicon (Website Icon in Browser Tab)

* Favicon is a **16x16** or **32x32** icon shown in browser tabs.
  ✅ Example:

```html
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

**Supported formats:** `.ico`, `.png`, `.svg`

---

## ✅ 5. Practical Example – Fonts & Icons Attachment

```html
<!DOCTYPE html>
<html>
<head>
  <title>Fonts & Icons Example</title>

  <!-- Google Font -->
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

  <!-- Font Awesome -->
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">

  <!-- Remix Icons -->
  <link href="https://cdn.jsdelivr.net/npm/remixicon/fonts/remixicon.css" rel="stylesheet">

  <!-- Favicon -->
  <link rel="icon" href="favicon.ico" type="image/x-icon">

  <style>
    body {
      font-family: 'Poppins', sans-serif;
      text-align: center;
      margin-top: 50px;
    }
    .icon {
      font-size: 30px;
      margin: 10px;
      color: #007bff;
    }
  </style>
</head>
<body>
  <h1>Font & Icon Attachment</h1>
  <p>This text uses Google Font (Poppins).</p>

  <!-- Font Awesome Icon -->
  <i class="fa-solid fa-user icon"></i>

  <!-- Remix Icon -->
  <i class="ri-home-line icon"></i>

  <!-- SVG Icon -->
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#007bff" class="bi bi-star icon" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.39 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.33-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.613.636-.282.95l3.522 3.356-.83 4.73z"/>
  </svg>
</body>
</html>
```

---

## ✅ 6. Developer Tips

✔ Use **Google Fonts or system fonts** for better performance.
✔ **Compress icons** if using custom SVGs.
✔ Avoid loading multiple icon libraries together (Font Awesome + Remix) to reduce **page size**.
✔ Favicon should be **16x16 or 32x32**, preferably `.ico` format.
