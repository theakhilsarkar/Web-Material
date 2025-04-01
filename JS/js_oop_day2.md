# 🚀 Object-Oriented Programming (OOP) in JavaScript

## 📌 What is OOP?
**Object-Oriented Programming (OOP)** is a concept of **classes and objects** that makes code **structured, organized, secure, and reusable**.

### 🔹 **Fundamental principles of OOP**
1. **Data Encapsulation** - Keeping data and methods together within a class.
2. **Inheritance** - Extending properties from a parent class.
3. **Polymorphism** - Using a single interface for different data types.
4. **Data Abstraction** - Hiding unnecessary implementation details from the user.

---

## **📌 Class - Blueprint** 🏗️
### **Object - Behaviour** 🏃‍♂️

A **class** is a **blueprint** for creating objects. An **object** is an **instance of a class** that defines its behavior.

### **Example: Person Class** 👤
```javascript
// Class - blueprint
// Object - behavior

class Person {
  // Private attributes using #
  #name;
  #age;
  #gender;

  // Constructor - executes automatically
  constructor(name, age, gender) { // Parameterized constructor.
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }

  // Setter methods to update private attributes
  setName(name) { this.#name = name; }
  setAge(age) { this.#age = age; }
  setGender(gender) { this.#gender = gender; }

  // Getter methods to retrieve attributes
  getName() { return this.#name; }
  getAge() { return this.#age; }
  getGender() { return this.#gender; }

  // Method to display output
  output() {
    document.writeln(`Name: ${this.#name}<br>`);
    document.writeln(`Age: ${this.#age}<br>`);
    document.writeln(`Gender: ${this.#gender}<br>`);
  }
}

// Using parameterized constructor
const p1 = new Person("Manav", 18, "Male");
p1.output();

// Updating values using setters
p1.setAge(19);
p1.output();

// Retrieving values using getters
document.writeln(`<br>Retrieved Name: ${p1.getName()}<br>`);
```

---

## **🛠️ ATM System Example (OOP Concept in Action)** 🏧

Let's implement an **ATM system** using **Encapsulation**, **Methods**, and **Private Attributes**.

### **💳 ATM Class Implementation**
```javascript
class ATM {
  #balance;

  constructor(initialBalance) {
    this.#balance = initialBalance;
  }

  // Method to deposit money
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: $${amount}. New Balance: $${this.#balance}`);
    } else {
      console.log("Invalid deposit amount.");
    }
  }

  // Method to withdraw money
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrawn: $${amount}. New Balance: $${this.#balance}`);
    } else {
      console.log("Insufficient balance or invalid amount.");
    }
  }

  // Method to check balance
  checkBalance() {
    console.log(`Current Balance: $${this.#balance}`);
  }
}

// Creating an ATM account
const myATM = new ATM(1000);

myATM.deposit(500); // Deposits $500
myATM.withdraw(300); // Withdraws $300
myATM.checkBalance(); // Checks balance
```

### **✅ Explanation:**
1. **Encapsulation** - `#balance` is private and only accessible within the class.
2. **Methods** - `deposit()`, `withdraw()`, `checkBalance()` perform ATM functions.
3. **Secure Transactions** - Prevents negative deposits and over-withdrawals.

---

## **📌 OOP in JavaScript - Summary**
- ✅ **Classes** help organize code.
- ✅ **Objects** hold and manipulate data.
- ✅ **Encapsulation** ensures security and data hiding.
- ✅ **Constructor** runs automatically when an object is created.
- ✅ **Real-world applications** like an **ATM system** show the power of OOP in JavaScript!

🚀 **Now you're ready to use OOP in JavaScript!** 🎯

