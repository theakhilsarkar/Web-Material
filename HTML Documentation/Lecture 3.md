# 🧾 **HTML Lecture 3 – Tables in HTML**

### 📌 **What is an HTML Table?**

An HTML **table** is used to **organise and display data** in a row-column format. Tables are created using the `<table>` tag and contain **rows (`<tr>`)** and **columns (`<td>` or `<th>`)**.

---

### 🏷️ **Important Tags and Their Purpose**

| Tag         | Description                                     |
| ----------- | ----------------------------------------------- |
| `<table>`   | Main tag to create a table                      |
| `<tr>`      | Table row (used inside `<table>`)               |
| `<th>`      | Table heading cell (bold & centered by default) |
| `<td>`      | Table data cell (regular cell)                  |
| `<caption>` | Adds a title above the table                    |
| `<thead>`   | Table head section (grouping for headings)      |
| `<tbody>`   | Table body section (main content rows)          |
| `<tfoot>`   | Table footer section (e.g., totals)             |

---

### 🧰 **Attributes of `<table>`**

| Attribute     | Description                     |
| ------------- | ------------------------------- |
| `border`      | Specifies border width          |
| `cellspacing` | Space between cells             |
| `cellpadding` | Space inside a cell             |
| `width`       | Width of the table (in px or %) |
| `height`      | Height of the table             |
| `bgcolor`     | Background color of the table   |

### 🧰 **Attributes of `<td>` and `<th>`**

| Attribute | Description                          |
| --------- | ------------------------------------ |
| `colspan` | Merge multiple columns into one      |
| `rowspan` | Merge multiple rows into one         |
| `bgcolor` | Background color for individual cell |

---

## ✅ **Example Code**

```html
<!DOCTYPE html>
<html>
<head>
  <title>HTML Table Example</title>
</head>
<body>

  <h2>Student Marks Table</h2>

  <table border="2" cellpadding="10" cellspacing="5" width="70%" bgcolor="#f9f9f9">
    
    <caption><b>Class 10 - Final Result</b></caption>

    <thead bgcolor="#e0e0e0">
      <tr>
        <th>Roll No</th>
        <th>Name</th>
        <th colspan="3">Subjects</th>
        <th>Total</th>
      </tr>
      <tr>
        <th></th>
        <th></th>
        <th>Math</th>
        <th>Science</th>
        <th>English</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>1</td>
        <td>Alice</td>
        <td>85</td>
        <td>78</td>
        <td>90</td>
        <td>253</td>
      </tr>
      <tr>
        <td>2</td>
        <td>Bob</td>
        <td>70</td>
        <td>88</td>
        <td>82</td>
        <td>240</td>
      </tr>
    </tbody>

    <tfoot bgcolor="#d0ffd0">
      <tr>
        <td colspan="5" align="right"><b>Average</b></td>
        <td>246.5</td>
      </tr>
    </tfoot>

  </table>

</body>
</html>
```

---

### 🔍 **Output Preview**

![image](https://github.com/user-attachments/assets/822470cd-4360-4038-a676-a6437c105f76)

---

## 📚 **Student Task**

Ask students to:

✅ Create a table showing:

* Employee details (ID, Name, Department, Salary)
* Use `<thead>`, `<tbody>`, and `<tfoot>`
* Use `colspan`, `rowspan`, `cellpadding`, `cellspacing`, and `bgcolor`

---
