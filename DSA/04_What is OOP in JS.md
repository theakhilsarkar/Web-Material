# 📘 Object-Oriented Programming (OOP) in JavaScript

## 🔹 What is OOP?

**Object-Oriented Programming (OOP)** is a programming style where we organize code using **objects and classes** instead of just functions and variables.

👉 Think of it like real life:

* You (object) have:

  * Name (property)
  * Age (property)
  * Speak() (method)

👉 In programming:

* Object = Data + Behavior

---

## 🔹 Why Use OOP?

✅ Makes code reusable
✅ Easy to manage large applications
✅ Improves readability
✅ Helps in real-world modeling

---

## 🔹 Core Concepts of OOP

1. Class
2. Object
3. Encapsulation
4. Inheritance
5. Polymorphism
6. Abstraction

---

# 🔹 1. Class in JavaScript

## 📌 Definition

A **class** is a blueprint/template to create objects.

## 🧠 Real-life Example

Think of a **Car blueprint**:

* Color
* Model
* Speed

But no actual car exists until we create it.

## 💻 Syntax

```js
class Car {
  constructor(color, model) {
    this.color = color;
    this.model = model;
  }

  drive() {
    console.log("Car is driving...");
  }
}
```

---

# 🔹 2. Object in JavaScript

## 📌 Definition

An **object** is an instance of a class.

## 🧠 Real-life Example

From the Car blueprint:

* My car = Red BMW
* Your car = Black Audi

## 💻 Example

```js
const car1 = new Car("Red", "BMW");
const car2 = new Car("Black", "Audi");

car1.drive(); // Car is driving...
```

---

# 🔹 3. Encapsulation

## 📌 Definition

Encapsulation means **hiding internal data** and controlling access.

## 🧠 Real-life Example

ATM Machine:

* You don’t see internal system
* You just use card & PIN

## 💻 Example

```js
class BankAccount {
  #balance = 0; // private

  deposit(amount) {
    this.#balance += amount;
  }

  getBalance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(1000);
console.log(acc.getBalance()); // 1000
```

---

# 🔹 4. Inheritance

## 📌 Definition

One class can **inherit properties and methods** from another class.

## 🧠 Real-life Example

* Animal → Dog
* Dog inherits eating, walking

## 💻 Example

```js
class Animal {
  eat() {
    console.log("Eating...");
  }
}

class Dog extends Animal {
  bark() {
    console.log("Barking...");
  }
}

const d = new Dog();
d.eat();  // inherited
d.bark();
```

---

# 🔹 5. Polymorphism

## 📌 Definition

Same method behaves differently for different objects.

## 🧠 Real-life Example

* Person speaks differently:

  * Teacher teaches
  * Student learns

## 💻 Example

```js
class Animal {
  sound() {
    console.log("Animal makes sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Dog barks");
  }
}

const a = new Dog();
a.sound(); // Dog barks
```

---

# 🔹 6. Abstraction

## 📌 Definition

Hiding complex logic and showing only essential features.

## 🧠 Real-life Example

Car:

* You drive
* You don’t know engine logic

## 💻 Example

```js
class Car {
  start() {
    this.#igniteEngine();
    console.log("Car started");
  }

  #igniteEngine() {
    console.log("Engine ignition...");
  }
}

const c = new Car();
c.start();
```

---

# 🔥 Real-Life Use Cases of OOP

## 1. E-commerce App

```js
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getDetails() {
    return `${this.name} costs ${this.price}`;
  }
}

const p1 = new Product("Laptop", 50000);
console.log(p1.getDetails());
```

---

## 2. Student Management System

```js
class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  getResult() {
    return this.marks > 40 ? "Pass" : "Fail";
  }
}

const s1 = new Student("Rahul", 55);
console.log(s1.getResult());
```

---

## 3. Banking System

```js
class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}
```

---

# 🧪 Practical Tasks (with Solutions)

---

## ✅ Task 1: Create a Mobile Class

### 🎯 Requirement:

* Properties: brand, price
* Method: getDetails()

### 💻 Solution:

```js
class Mobile {
  constructor(brand, price) {
    this.brand = brand;
    this.price = price;
  }

  getDetails() {
    console.log(`${this.brand} costs ${this.price}`);
  }
}

const m1 = new Mobile("Samsung", 20000);
m1.getDetails();
```

---

## ✅ Task 2: Inheritance Example

### 🎯 Requirement:

* Parent: Person
* Child: Teacher
* Teacher should have subject

### 💻 Solution:

```js
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }

  teach() {
    console.log(this.name + " teaches " + this.subject);
  }
}

const t1 = new Teacher("Amit", "Math");
t1.greet();
t1.teach();
```

---

## ✅ Task 3: Encapsulation Practice

### 🎯 Requirement:

* Create Account with private balance
* Add deposit method

### 💻 Solution:

```js
class Account {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  showBalance() {
    console.log(this.#balance);
  }
}

const acc = new Account();
acc.deposit(500);
acc.showBalance();
```

---

## 🎯 Final Summary

| Concept       | Meaning                         |
| ------------- | ------------------------------- |
| Class         | Blueprint                       |
| Object        | Instance of class               |
| Encapsulation | Data hiding                     |
| Inheritance   | Reuse code                      |
| Polymorphism  | Same method, different behavior |
| Abstraction   | Hide complexity                 |
