
# 🧠 Mastering OOP in JavaScript – *Encapsulation & Inheritance* 🚀

Object-Oriented Programming (OOP) is not just a coding style — it’s a mindset that helps developers **build scalable, maintainable, and modular applications**. This document focuses on two core pillars of OOP:

1. **Encapsulation** 🔐
2. **Inheritance** 🧬

---

## 📘 Theory Part

### 🔒 1. Encapsulation

**Definition:**
Encapsulation is the process of wrapping data (attributes) and functions (methods) into a single unit called a **class**. It protects data from unwanted access and helps in maintaining modular code.

**Key Points:**

* Attributes are accessed only through **methods**.
* Provides **data hiding** and **control** over what should be accessible outside the class.
* Reduces **code duplication** and increases **reusability**.

```js
class User {
  constructor() {
    this.email = "";
    this.password = "";
  }

  login(email, password) {
    this.email = email;
    this.password = password;
    console.log("Login successful for:", this.email);
  }
}
```

---

### 🧬 2. Inheritance

**Definition:**
Inheritance allows one class to **inherit the properties and methods** of another class using the `extends` keyword. It promotes **code reuse**.

**Types:**

* **Single Inheritance**: A child class inherits from one parent.
* **Multilevel Inheritance**: A class inherits from a child class, which in turn inherited from another.
* **Hierarchical Inheritance**: Multiple child classes inherit from one parent class.

```js
class A {
  greet() {
    console.log("Hello from A");
  }
}

class B extends A {
  greetAgain() {
    this.greet();
    console.log("And Hello again from B");
  }
}
```

---

## ✅ Implemented Code Examples

### 1. **Auth Class – Encapsulation**

```js
class Auth {
  constructor() {
    this.email;
    this.password;
    this.conPassword;
  }

  signIn(email, password) {
    this.email = email;
    this.password = password;
    document.writeln(`Sign In: ${this.email}, ${this.password}<br>`);
  }

  signUp(email, password, conPassword) {
    this.email = email;
    this.password = password;
    this.conPassword = conPassword;
    document.writeln(`Sign Up: ${this.email}, ${this.password}, ${this.conPassword}<br>`);
  }
}

const user = new Auth();
user.signUp("admin@gmail.com", 123456, 123456);
user.signIn("example@gmail.com", 12345678);
```

### 2. **Class Inheritance Example – A & B**

```js
class A {
  methodA() {
    document.writeln("This is class A method<br>");
  }
}

class B extends A {
  methodB() {
    this.methodA(); // Inherited from class A
    document.writeln("This is class B method<br>");
  }
}

const b1 = new B();
b1.methodB();
```

---

## 🚘 Practical Example: Vehicle & Car Classes

```js
class Vehicle {
  constructor(name, wheels) {
    this.name = name;
    this.wheels = wheels;
  }

  display() {
    console.log(`Vehicle: ${this.name}, Wheels: ${this.wheels}`);
  }
}

class Car extends Vehicle {
  constructor(name, wheels, fuelType) {
    super(name, wheels); // inherit parent constructor
    this.fuelType = fuelType;
  }

  showCarDetails() {
    this.display(); // calling inherited method
    console.log(`Fuel Type: ${this.fuelType}`);
  }
}

const honda = new Car("Honda City", 4, "Petrol");
honda.showCarDetails();
```

**Why this works?**

* `Car` inherits from `Vehicle`.
* We reused `display()` and added custom logic in `showCarDetails()`.
* Constructor chaining using `super()`.

---

## 🧩 Concept Summary Table

| Concept        | Used In Code                               | Benefit                           |
| -------------- | ------------------------------------------ | --------------------------------- |
| Encapsulation  | `Auth`, `Vehicle`, `Car` classes           | Structured and secure coding      |
| Constructor    | `constructor()` method in all classes      | Auto-initialization of properties |
| Inheritance    | `class B extends A`, `Car extends Vehicle` | Reuse logic across classes        |
| `this` keyword | All class methods                          | Refers to the current instance    |
| `super()`      | `Car` constructor                          | Access parent constructor         |

---

## 💭 5 Practical Questions (for students)

1. 🔐 Create a class `Account` with attributes `username`, `email`, and `balance`. Implement `deposit()` and `checkBalance()` methods.

2. 🚗 Create a base class `Vehicle` and child classes `Bike` and `Truck`. Inherit and override display methods accordingly.

3. 🏫 Design a `Student` class with attributes `name`, `rollNo`, `grade`. Use encapsulation to implement `updateGrade()` method.

4. 💡 Create a parent class `Appliance` and a child class `Fan` which uses inheritance to show name and electricity consumption.

5. 🧾 Write a class `Library` with method `addBook(bookName)` and `displayBooks()`. Use encapsulation to manage the book list.

---

## 📝 Suggestions to Improve

| Line                           | Comment                                                                         |
| ------------------------------ | ------------------------------------------------------------------------------- |
| `document.writeln(...)`        | Use `console.log()` or `DOM.innerHTML` for modern apps                          |
| `this.email = email` etc.      | Try adding validations (e.g., email format, password strength)                  |
| `methodA()` → `this.methodA()` | Excellent understanding of using inherited methods                              |
| Use of constructor             | Great job! It’s a key OOP practice                                              |
| Naming                         | Continue following **PascalCase** for class names and **camelCase** for methods |
