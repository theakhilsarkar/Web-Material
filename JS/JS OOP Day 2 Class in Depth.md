# 🏦 OOP ATM Simulation 💡

## 💡 OOP Concepts Covered

### ✅ Class & Object

* A **class** is a blueprint of objects.
* An **object** is a real instance of the class used to access class data and functions.

### ✅ Constructor

* A **constructor** is a special method that runs automatically when an object is created.
* It is used to initialize object properties.

### ✅ Data Encapsulation

* Protects internal data by using controlled access via methods.

---

## 🔐 ATM Class Explanation

```js
class ATM {
  balance = 1000; // default account balance
  debit; // type of debit card
  pin;   // PIN to secure ATM access
```

👉 Declared class `ATM` with properties `balance`, `debit`, and `pin`.

---

### ➕ Set PIN

```js
  setPin(pin) {
    this.pin = pin;
    alert("Pin set successfully !");
  }
```

👉 `setPin()` method sets the user's ATM PIN securely using `this.pin`.

---

### 💰 Deposit Method

```js
  deposit(balance, debit, pin) {
    this.balance = this.balance + balance;
    this.debit = debit;
    this.pin = pin;
    document.writeln("Your current balance ", this.balance);
  }
```

👉 Adds deposited amount to existing balance and displays updated balance.

---

### 📟 Check Balance Method

```js
  checkBalance(debit, pin) {
    if (this.pin == undefined) {
      alert("First, generate pin !");
    } else if (this.pin == pin) {
      document.writeln("Your balance is ", this.balance);
      document.writeln("<br>");
    } else {
      alert("Incorrect Pin, Password, Please");
    }
  }
```

👉 Validates entered PIN and shows balance if correct.

---

### 💸 Withdraw Method

```js
  withdraw(debit, pin, amount) {
    if (amount < this.balance) {
      this.balance = this.balance - amount;
      document.writeln("Withdrawl amount ", amount);
      document.writeln("<br>");
      document.writeln("Your current balance ", this.balance);
    } else {
      document.writeln("Insufficient Balance <br>");
    }
  }
}
```

👉 Withdraws money if enough balance is available.

---

### 🎯 Using the Class

```js
const atm = new ATM();

atm.setPin(1234);
atm.checkBalance("debit", 1234);
atm.deposit(10000, "debit", 1234);
atm.withdraw("debit", 1234, 15000);
```

---

## 🧑‍💼 Person Class Explanation (Using Constructor)

```js
class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  display() {
    document.writeln(this.name);
    document.writeln(this.age);
    document.writeln(this.gender);
  }
}

const p1 = new Person("Yatin", 20, "Male");
p1.display();
```

👉 `Person` class uses a constructor to initialize name, age, and gender.
👉 `display()` prints the person's details.

---

## 📊 Summary Table

| Concept            | Where Used              | Description                   |
| ------------------ | ----------------------- | ----------------------------- |
| Class              | `ATM`, `Person`         | Blueprint to create objects   |
| Object             | `atm`, `p1`             | Instance of the class         |
| Constructor        | `Person` class          | Auto-run method to initialize |
| Data Encapsulation | Methods & `this` usage  | Controls access to data       |
| Methods            | `setPin`, `deposit` etc | Perform actions in class      |

---

## 📝 Suggestions to Improve Code

* ✅ Use `constructor` in `ATM` too for initializing PIN and balance if needed.
* ✅ Separate display logic from logic methods (like deposit and withdraw).
* ✅ Add input validation for balance and PIN (check for numbers).
* ✅ Use private fields `#pin` and `#balance` for true encapsulation.
* ✅ Instead of `document.writeln`, use `console.log()` or DOM methods for real-world UI.

---

## 💪 Practice Task Ideas

1. Create a `Student` class with constructor & 5 attributes.
2. Create an `Employee` class with `salary`, `bonus`, and a `getTotalSalary()` method.
3. Add private fields in `ATM` using `#pin`, `#balance`, and use getter/setter.

---

Let me know if you'd like these examples converted into a project file, UI-based app, or MCQ-style revision quiz!
