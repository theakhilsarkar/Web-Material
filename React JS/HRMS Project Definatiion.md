## 📌 Project Title

**HRMS – Employee Attendance & Salary Management System**

---

## 🎯 Objective

Develop a web-based HRMS system where different users (Admin, Manager, Employee) can manage employee data, attendance, leave, and salary calculation based on working hours.

---

## 👥 User Roles & Responsibilities

### 1. 🔐 Authentication (Common for all)

* Login & Logout system
* Role-based access control (Admin / Manager / Employee)
* Secure authentication

---

### 2. 👨‍💼 Admin Module

* Perform **CRUD operations on Users**

  * Add Employee / Manager
  * Update details
  * Delete users
* Assign roles (Admin / Manager / Employee)
* View all employees and system data

---

### 3. 📊 Manager Module

* View list of all employees
* Monitor employee attendance
* View leave requests
* Approve / Reject leave

---

### 4. 👨‍💻 Employee Module

* View own profile
* Update basic details (optional)
* Apply for leave
* View attendance history
* View salary slip

---

## ⏰ Attendance Management

* Daily **Check-In** and **Check-Out** system
* Fixed working hours:

  * **In Time:** 9:00 AM
  * **Out Time:** 5:00 PM
  * Total = **8 Hours per day**

### 🧮 Working Hour Calculation

* Example:

  * Check-In: 9:45 AM
  * Check-Out: 4:45 PM
  * Total Work = **7 Hours**

---

## 💰 Salary Calculation (Hourly-Based)

* Salary is calculated based on:

  * Total working hours
  * Defined hourly rate

### Rules:

* Full day = 8 hours
* Less hours → Salary deduction
* Absent → Full day deduction

---

## 🌴 Leave Management

### Leave Rules:

* 1 Paid Leave allowed (No salary deduction)
* More than 1 leave → Salary deduction
* Sundays are **excluded** (not counted as leave)

### Features:

* Apply for leave
* Leave approval/rejection by Manager
* Track leave balance

---

## ❌ Absent Rules

* If employee does not check-in → Mark as **Absent**
* Salary deduction applied

---

## 📄 Salary Slip Generation

* Auto-generate salary slip based on:

  * Attendance
  * Leaves
  * Working hours
* Monthly salary report


## 📦 Expected Output

* Fully functional HRMS system
* Role-based dashboard
* Attendance tracking system
* Leave & salary management
* Clean UI + proper database design

