# 🧠 OOPs Lecture 1 – Introduction to Object-Oriented Programming 🚀


## 🔍 What is OOP?

> **Object-Oriented Programming (OOP)** is a **programming paradigm** (a way of writing code) that helps you write **reusable, structured, organized, and secure code**.

Imagine you are planning a **Money Heist** 🎭 — everyone has a role, a plan, and tools. Similarly, in OOP, each "object" plays a specific role using its data and behavior (methods).

---

## 🧱 Core Pillars of OOP

| 💡 Concept        | 🧠 Meaning                                                                  |
| ----------------- | --------------------------------------------------------------------------- |
| **Encapsulation** | Wrapping data and code together (like a capsule 💊) to keep it secure.      |
| **Inheritance**   | Passing features from one class to another (like children from parents 👪). |
| **Polymorphism**  | One name, many forms (like one remote controlling many devices 🎮).         |
| **Abstraction**   | Hiding complex code and showing only essential parts (like a TV remote 📺). |

---

## 🏗️ Basic Concepts

### ✅ **Class**

* A **class** is like a blueprint or template.
* It defines **attributes (variables)** and **methods (functions)**.
* A **user-defined data type**.

```js
class Person {
    display(name, age, gender) {
        document.writeln(name, age, gender);
    }

    ekAur() {
        document.writeln("Kuch kaam ho...");
    }
}
```

---

### ✅ **Object**

* An **object** is an **instance** of a class.
* It’s used to **access attributes and methods** of a class.

```js
const p1 = new Person();
p1.display("Yatin", 19, "Male");
p1.ekAur();
```

---

## 🌍 Variable Scope

| 🔠 Type    | 📌 Scope              | 💬 Usage                       |
| ---------- | --------------------- | ------------------------------ |
| **Global** | Defined in class      | Use `this.variable`            |
| **Local**  | Defined inside method | Directly usable in that method |

---

## 🚘 Example: Car Class

```js
class Car {
    name;
    color;
    company;
    type;

    display(name, color, company, type) {
        this.name = name;
        this.color = color;
        this.company = company;
        this.type = type;
    }
}

const kiaSeltos = new Car();
kiaSeltos.display("Kia Seltos", "Black", "Kia", "Petrol");
document.writeln(kiaSeltos.color); // Output: Black
```

---

## 🔐 Example: ATM with Encapsulation

```js
class ATM {
    #debit;
    #pin;
    #balance = 1000;

    deposit(debit, pin, balance) {
        this.#debit = debit;
        this.#pin = pin;
        this.#balance += balance;
    }

    checkBalance(debit, pin) {
        document.writeln("Your Balance is ", this.#balance);
    }
}

const dindoli = new ATM();
dindoli.deposit("VISA", 1245, 5000);
dindoli.checkBalance("VISA", 1245);
```

* ✅ Used `#` to make data **private**
* ✅ Only accessible through class methods

---

## 🧑‍🎓 Practice Tasks for You 💪

### 📚 Task 1: Student Class

* Create a `Student` class with **5 attributes** (name, age, gender, id, branch).
* Create **3 meaningful student objects**.
* Use **set** and **get** methods to manage data.

---

### 🚗 Task 2: Car Class

* Create a `Car` class with **5 attributes** (name, model, fuelType, price, company).
* Create **3 car objects** like `hondaCity`, `verna`, `creta`.
* Set values using a method and retrieve them.

---

### 💳 Task 3: ATM Class

* Create an `ATM` class with:

  * `deposit()`
  * `withdraw()`
  * `checkBalance()`
* Use private variables to store balance and PIN securely.

---

## 🔁 Summary

| Concept           | Description                             |
| ----------------- | --------------------------------------- |
| **OOP**           | A style of programming based on objects |
| **Class**         | Blueprint for objects                   |
| **Object**        | Instance of a class                     |
| **Encapsulation** | Data hiding using private members       |
| **Inheritance**   | Child class deriving from parent        |
| **Polymorphism**  | Same function behaving differently      |
| **Abstraction**   | Hiding complexity, showing essentials   |

---

### 🏁 Final Thought

OOP allows you to **think in terms of real-world entities**, making your code **clean, scalable, and logical**!
This is just the **first lecture**, and there’s a lot more ahead like **constructors, inheritance, polymorphism, and abstraction** in action!
