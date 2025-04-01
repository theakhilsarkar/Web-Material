# Object-Oriented Programming (OOP) in JavaScript 🚀


## **What is OOP?** 🤔
Object-Oriented Programming (OOP) is a concept that structures code using **classes** and **objects** to make it more:
- **Structured** 📑
- **Organized** 📂
- **Secure** 🔐
- **Reusable** 🔄

### **OOP Principles in JavaScript** 📌
1️⃣ **Encapsulation** - Bundling data and methods together 📦
2️⃣ **Inheritance** - Sharing attributes and behaviors between classes 🔄
3️⃣ **Polymorphism** - Using a single interface to represent different types 🎭
4️⃣ **Abstraction** - Hiding implementation details from users 🎭

---
## **1. Data Encapsulation** 🏗️
Encapsulation means keeping data private and allowing access only through methods.

### **Example: Person Class** 🧑‍💻
```javascript
class Person {
  // Private attributes using #
  #name;
  #age;
  #gender;

  constructor(name, age, gender) {
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }

  // Setter Methods
  setName(name) { this.#name = name; }
  setAge(age) { this.#age = age; }
  setGender(gender) { this.#gender = gender; }

  // Getter Methods
  getName() { return this.#name; }
  getAge() { return this.#age; }
  getGender() { return this.#gender; }

  output() {
    document.writeln(`Name: ${this.#name}<br>`);
    document.writeln(`Age: ${this.#age}<br>`);
    document.writeln(`Gender: ${this.#gender}<br>`);
  }
}
```

### **Using the Class** 🏆
```javascript
const p1 = new Person("Manav", 18, "Male");
p1.output();

p1.setAge(19);
p1.output();
```

---
## **2. Inheritance** 👨‍👦
Inheritance allows a child class to acquire the properties of a parent class.

🔹 **Syntax:** Use `extends` keyword to link a parent class to a child class.

### **Example: Employee Class Extending Person** 💼
```javascript
class Employee extends Person {
  constructor(name, age, gender, id, salary, role) {
    super(name, age, gender); // Call parent constructor
    this.id = id;
    this.salary = salary;
    this.role = role;
  }

  print() {
    super.output(); // Access parent method
    document.writeln(`ID: ${this.id}<br>`);
    document.writeln(`Salary: ${this.salary}<br>`);
    document.writeln(`Role: ${this.role}<br>`);
  }
}

const e1 = new Employee("Raj", 18, "Male", "1002", "10500/-", "Intern");
e1.print();
```

### **Types of Inheritance in JavaScript** 🔄
1️⃣ **Single Inheritance** - One parent, one child 👨‍👦
2️⃣ **Multilevel Inheritance** - Grandparent -> Parent -> Child 👴👨👶
3️⃣ **Hierarchical Inheritance** - One parent, multiple children 👨‍👧‍👦

#### **Example: Multilevel Inheritance**
```javascript
class Indian {
  constructor(adharNo, birthPlace) {
    this.adharNo = adharNo;
    this.birthPlace = birthPlace;
  }
}

class Person extends Indian {
  constructor(adharNo, birthPlace, name, age, gender) {
    super(adharNo, birthPlace);
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

class Employee extends Person {
  constructor(adharNo, birthPlace, name, age, gender, id, salary, role) {
    super(adharNo, birthPlace, name, age, gender);
    this.id = id;
    this.salary = salary;
    this.role = role;
  }
  print() {
    document.writeln(`Aadhar: ${this.adharNo}<br>`);
    document.writeln(`Birthplace: ${this.birthPlace}<br>`);
    document.writeln(`Name: ${this.name}<br>`);
    document.writeln(`Age: ${this.age}<br>`);
    document.writeln(`Gender: ${this.gender}<br>`);
    document.writeln(`ID: ${this.id}<br>`);
    document.writeln(`Salary: ${this.salary}<br>`);
    document.writeln(`Role: ${this.role}<br>`);
  }
}

const emp = new Employee("123456", "Delhi", "Amit", 30, "Male", "E001", "50000/-", "Manager");
emp.print();
```

---
## **Practice Exercises** 🎯
1️⃣ **Create a class for Employee** with attributes `id, name, salary, role`. Set all attributes and get for at least 3 objects.

2️⃣ **Create a class for Animal** with attributes `name, type, gender, age`. Make these attributes private and perform input and output for 3 different animals.

3️⃣ **Create a Student Class** with private attributes `roll_no, name, age, std, percentage`. Initialize all attributes using a parameterized constructor and print details for 3 students.

📝 **Use OOP principles for better code structure!** 🚀

---
## **Why Use OOP in JavaScript?** 🤖
✅ **Code Reusability** 🔄 - Write once, use many times.
✅ **Modularity** 📦 - Break code into smaller, manageable parts.
✅ **Data Security** 🔐 - Use private attributes to restrict access.
✅ **Scalability** 📈 - Easier to extend functionalities.
✅ **Code Maintainability** 🛠️ - Organized and structured code.

---

