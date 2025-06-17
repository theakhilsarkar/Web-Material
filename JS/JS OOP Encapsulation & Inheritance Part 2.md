
# 🔄 Inheritance & Encapsulation in JavaScript – OOP Concepts 🚀

## 📘 Detailed Theory

### 🔐 **Encapsulation**

Encapsulation means **wrapping data (attributes) and code (methods)** together into a single unit – typically a **class**.
It hides the internal details of how an object works and exposes only what's necessary.

**Benefits:**

* Data protection from direct access
* Code modularity
* Easy maintenance

```js
class User {
  constructor() {
    this.username = "";
    this.password = "";
  }

  login(username, password) {
    this.username = username;
    this.password = password;
    console.log("Logged in as: " + this.username);
  }
}
```

---

### 🧬 **Inheritance**

Inheritance allows a class (child/subclass) to **access properties and methods of another class** (parent/superclass).
It promotes **code reusability** and a **hierarchical structure**.

**Types:**

1. **Simple Inheritance** – One parent to one child
2. **Multi-Level Inheritance** – Child of a child
3. **Hierarchical Inheritance** – One parent, multiple children

---

## 💡 Practical Example 1: Multi-Level Inheritance

```js
class Indian {
  constructor(adharNo, birthPlace) {
    this.adharNo = adharNo;
    this.birthPlace = birthPlace;
  }

  display() {
    document.writeln("Adhar No : " + this.adharNo + "<br>");
    document.writeln("Birth Place : " + this.birthPlace + "<br>");
  }
}

class Person extends Indian {
  constructor(name, age, gender, adharNo, birthPlace) {
    super(adharNo, birthPlace); // call parent class constructor
    this.name = name;
    this.age = age;
    this.gender = gender;
  }

  display() {
    super.display(); // call parent method
    document.writeln("Name : " + this.name + "<br>");
    document.writeln("Age : " + this.age + "<br>");
    document.writeln("Gender : " + this.gender + "<br>");
  }
}

class Employee extends Person {
  constructor(name, age, gender, adharNo, birthPlace, role, salary, qualification) {
    super(name, age, gender, adharNo, birthPlace);
    this.role = role;
    this.salary = salary;
    this.qualification = qualification;
  }

  display() {
    super.display();
    document.writeln("Role : " + this.role + "<br>");
    document.writeln("Salary : " + this.salary + "<br>");
    document.writeln("Qualification : " + this.qualification + "<br>");
  }
}

const suresh = new Employee(
  "Suresh Maheta",
  25,
  "Male",
  "866142950928",
  "Lonavala",
  "Backend Designer",
  150000,
  "M.Pharm"
);
suresh.display();
```

---

## 📐 Practical Example 2: Shape Hierarchy

```js
class Shape {
  constructor(color, area) {
    this.color = color;
    this.area = area;
  }

  getColor() {
    document.writeln("Shape color is " + this.color + "<br>");
  }

  calculateArea() {
    document.writeln("Area is " + this.area + "<br>");
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color, 3.14 * radius * radius); // area of circle
  }
}

class Rectangle extends Shape {
  constructor(length, width, color) {
    super(color, length * width); // area of rectangle
  }
}

const circle = new Circle(2, "red");
const rectangle = new Rectangle(2, 4, "blue");

circle.calculateArea();
circle.getColor();
rectangle.calculateArea();
rectangle.getColor();
```

---

## 🔍 Summary Table

| Concept            | Used In Class                      | Description                            |
| ------------------ | ---------------------------------- | -------------------------------------- |
| Encapsulation      | `User`, `Shape`, `Employee`        | Attributes + Methods in class          |
| Simple Inheritance | `Person extends Indian`            | One parent → one child                 |
| Multilevel         | `Employee → Person → Indian`       | Grandchild accessing grandparent class |
| Hierarchical       | `Circle`, `Rectangle` from `Shape` | One base class, many derived           |
| `super()` usage    | All child constructors/methods     | Calls parent constructor or method     |

---

## 🧠 Practical Questions for Practice

1. **Bank System**
   Create a class `BankAccount` with `accountNo`, `holderName`, and `balance`. Create a subclass `SavingsAccount` that includes `interestRate`. Implement methods to show balance and calculate interest.

2. **University System**
   Create a class `Person`, subclass `Student`, and further subclass `ResearchStudent`. Use inheritance and encapsulation to display all details.

3. **Mobile Brand Example**
   Create a parent class `MobileBrand` with `brandName`. Create child classes `Samsung` and `Apple` with additional features. Use method overriding and display all data.

4. **Animal Hierarchy**
   Class `Animal` with method `eat()`. Subclass `Dog` and `Cat` add `bark()` and `meow()` respectively. Demonstrate Hierarchical Inheritance.

5. **E-commerce Example**
   Create a class `User`, subclass `Customer`, and subclass `PrimeCustomer`. Add special benefits in the lowest subclass.

---

## 📌 Tips to Improve Understanding

* **Practice constructor chaining** with `super()`.
* Use **modular display methods** for each class.
* Use `this` carefully to distinguish between local and class variables.
* Prefer meaningful names (`qualification`, not `qulaification`).
* Keep practicing different inheritance types for better grasp.
