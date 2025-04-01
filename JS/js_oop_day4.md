# Object-Oriented Programming (OOP) in JavaScript 🚀

## **1. Introduction to OOP**
Object-Oriented Programming (OOP) is a programming paradigm that revolves around objects and classes. It helps in organizing and structuring code efficiently by following principles such as:

- **Encapsulation** 📦 (Binding data and methods together)
- **Inheritance** 👨‍👩‍👦 (Passing properties and methods from one class to another)
- **Polymorphism** 🎭 (Same method, different behaviors)
- **Abstraction** 🎭 (Hiding complex details and showing only the essentials)

---

## **2. Polymorphism - One Thing in Many Forms 🎭**
Polymorphism allows methods and objects to behave differently based on their context. It is classified into:

### **A. Compile-Time Polymorphism (Method Overloading)**
- A single method can perform different operations based on the number of parameters.
- JavaScript does **not** support method overloading natively, but we can achieve it using optional parameters or the `arguments` object.

### **Example of Method Overloading:**
```javascript
class Maths {
  sum(a, b, c = 0, d = 0) {
    document.writeln(a + b + c + d);
  }
}

const m1 = new Maths();
m1.sum(10, 20);       // 30
m1.sum(10, 20, 30);   // 60
m1.sum(10, 20, 30, 40); // 100
```

Here, the same method behaves differently based on the number of arguments provided. 🎭

---

### **B. Run-Time Polymorphism (Method Overriding)**
- Method overriding allows a child class to provide a specific implementation of a method that is already defined in its parent class.
- It occurs when the same method name exists in both parent and child classes but behaves differently.

### **Example of Method Overriding:**
```javascript
class School {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  display() {
    document.writeln(`School: ${this.name}, Established: ${this.year}`);
  }
}

class Student extends School {
  constructor(name, std, school, year) {
    super(school, year);
    this.studentName = name;
    this.std = std;
  }
  display() {
    super.display(); // Calls parent class method
    document.writeln(`Student: ${this.studentName}, Class: ${this.std}`);
  }
}

const s1 = new Student("Aman", 10, "Greenwood High", 1995);
s1.display();
```

Here, the **display()** method is overridden in the child class to provide additional student details. 🎭

---

## **3. Data Abstraction 🎭 (Hiding Internal Details)**
- Abstraction hides complex implementation and shows only relevant information to the user.
- Private attributes (`#`) ensure data security and prevent direct modification.

### **Example of Data Abstraction:**
```javascript
class Student {
  #name;
  #std;
  #percentage;
  constructor(name, std, percentage) {
    this.#name = name;
    this.#std = std;
    this.#percentage = percentage;
  }

  print() {
    document.writeln(`Name: ${this.#name}, Class: ${this.#std}, Percentage: ${this.#percentage}%`);
  }
}

const s1 = new Student("Dheeraj", 12, 90.98);
s1.print();
```

🔒 Private attributes ensure that only class methods can access and modify them, making the code more secure and structured.

---

## **4. Summary 🎯**
✅ **Method Overloading:** Multiple behaviors of a method based on parameters. (Not natively supported in JavaScript but can be simulated)

✅ **Method Overriding:** A child class redefines the method of its parent class.

✅ **Abstraction:** Hides unnecessary details and provides only the relevant information.

✅ **Encapsulation:** Uses private variables and getter/setter methods to protect data.

JavaScript follows **prototype-based OOP**, making it unique from traditional class-based languages. By mastering these OOP principles, you can write cleaner, more efficient, and maintainable code! 🎯🚀

---

Do you want me to expand on any of these concepts? 😊

