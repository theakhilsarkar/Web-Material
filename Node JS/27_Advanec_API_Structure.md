# 📘 Employee Management System (EMS) – API Documentation

---

## 1. What is an API?

**API (Application Programming Interface)** allows two systems to communicate with each other.

Example:
Frontend (Web/Mobile App) → sends request → Backend API → Database → response

```
Client → API → Server → Database
```

API uses **HTTP protocol** and exchanges data using **JSON format**.

---

## 2. Type of API

### REST API

**REST API (Representational State Transfer)** is the most commonly used API type.

Features:

* Uses HTTP methods (GET, POST, PUT, DELETE)
* Works with JSON
* Stateless communication
* Easy to use with frontend applications

👉 EMS uses **REST API only**

---

## 3. Request Types (HTTP Methods)

| Method | Purpose               |
| ------ | --------------------- |
| GET    | Fetch data            |
| POST   | Create data           |
| PUT    | Update full record    |
| PATCH  | Update partial record |
| DELETE | Remove record         |

Example:

```http
GET /api/employees
POST /api/employees
PUT /api/employees/10
DELETE /api/employees/10
```

---

## 4. EMS Modules

* Authentication
* Users & Roles
* Employee Management
* Department Management
* Attendance
* Salary
* Reports
* Filters & Search

---

## 5. Required APIs (Approximate Count)

### Auth APIs (4)

* POST /auth/register
* POST /auth/login
* POST /auth/logout
* GET /auth/profile

---

### Role & User APIs (6)

* POST /roles
* GET /roles
* PUT /roles/:id
* DELETE /roles/:id
* GET /users
* PUT /users/:id

---

### Employee APIs (6)

* POST /employees
* GET /employees
* GET /employees/:id
* PUT /employees/:id
* DELETE /employees/:id
* GET /employees/search

---

### Department APIs (4)

* POST /departments
* GET /departments
* PUT /departments/:id
* DELETE /departments/:id

---

### Attendance APIs (4)

* POST /attendance
* GET /attendance
* PUT /attendance/:id
* DELETE /attendance/:id

---

### Salary APIs (4)

* POST /salary
* GET /salary
* PUT /salary/:id
* DELETE /salary/:id

---

### Reports & Filters (3)

* GET /reports/employees
* GET /reports/salary
* GET /reports/attendance

---

✅ **Total APIs: ~30 APIs**

---

## 6. Authentication System

Uses **JWT (JSON Web Token)** authentication.

Flow:

1. User logs in
2. Server generates JWT token
3. Token is stored on client
4. Token is sent in headers for every request

```http
Authorization: Bearer <token>
```

---

## 7. Role Based Access Control (RBAC)

Roles:

* Admin
* Manager
* Employee

Example user object:

```json
{
  "role": "admin"
}
```

Middleware:

```js
checkRole(["admin"])
```

Permissions:

* Admin → Full system access
* Manager → Limited access
* Employee → Own data only

---

## 8. CRUD Operations

Employee CRUD APIs:

| Operation | API                   |
| --------- | --------------------- |
| Create    | POST /employees       |
| Read      | GET /employees        |
| Update    | PUT /employees/:id    |
| Delete    | DELETE /employees/:id |

---

## 9. Filters, Search & Pagination

Example:

```http
GET /employees?department=IT&salary=50000&page=1&limit=10
```

Supports:

* Filtering
* Sorting
* Pagination
* Search

---

## 10. Advanced API Structure

```
src/
 ├── controllers/
 ├── routes/
 ├── models/
 ├── middlewares/
 ├── services/
 ├── utils/
 └── app.js
```

---

### Controllers

Contains business logic

### Routes

Defines API endpoints

### Models

Defines database schema

### Middlewares

* Auth middleware
* Role middleware
* Validation middleware
* Error middleware

---

## 11. Error Handling Format

```json
{
  "success": false,
  "message": "Employee not found",
  "errorCode": 404
}
```

---

## 12. API Response Format

Success:

```json
{
  "success": true,
  "data": [],
  "message": "Employees fetched successfully"
}
```

---

## 13. Security Best Practices

* JWT authentication
* Password hashing (bcrypt)
* Input validation
* Role based access
* Rate limiting

---

## 14. Multiple Role Handling

Logic example:

```js
if (user.role === "admin") {
  allowAll();
} else if (user.role === "manager") {
  allowLimited();
} else {
  allowOwnDataOnly();
}
```

---

## 15. Admin Panel APIs

Admin can:

* Create and manage users
* Assign roles
* Manage employees
* Manage salary
* View reports

User can:

* View profile
* Update own details
* View attendance
* View salary

---

## 16. Technology Stack (Example)

* Node.js
* Express.js
* MongoDB
* JWT Authentication
* REST API
* Postman for testing

