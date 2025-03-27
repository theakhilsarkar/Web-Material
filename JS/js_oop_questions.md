### 🚀 **Practical OOP Questions in JavaScript (Real-Life Examples)**  

These questions cover **all core OOP concepts**:  
✔ **Classes & Objects**  
✔ **Encapsulation**  
✔ **Inheritance** (Simple, Multilevel, Hierarchical)  
✔ **Polymorphism** (Method Overriding & Overloading)  
✔ **Abstraction**  
✔ **Composition**  

---

### 🔹 **1. Encapsulation (Data Hiding)**
👉 **Scenario:** You are building an **ATM system** where a user has a bank account. The balance should not be directly accessible but can be checked via a method.  

✅ **Task:**  
- Create a `BankAccount` class with a **private `#balance` property**.  
- Implement `deposit(amount)` and `withdraw(amount)` methods.  
- Add a `getBalance()` method to return the balance.  

---

### 🔹 **2. Inheritance (Tricky Question with All Types)**
👉 **Scenario:** You are working on a **vehicle rental system**. Different types of vehicles share some common properties, but there are multiple levels and categories of vehicles.  

✅ **Task:**  
- Create a `Vehicle` class with properties `brand` and `year`.  
- Create a `Car` class that extends `Vehicle` and adds a `fuelType` property.  
- Create a `Bike` class that extends `Vehicle` and adds a `hasGear` property.  
- Add another class `ElectricCar` that extends `Car` and adds a `batteryCapacity` property.  
- Implement a `getDetails()` method in `Vehicle` and override it in different subclasses.
  
---

### 🔹 **3. Polymorphism (Method Overriding & Overloading)**
👉 **Scenario:** You are creating a **payment gateway** that supports multiple payment methods like `CreditCard` and `PayPal`. Each method has a `pay(amount)` function, but the implementation is different.  

✅ **Task:**  
- Create a base class `Payment` with a `pay(amount)` method.  
- Extend it into `CreditCard` and `PayPal`, overriding `pay()` to print different messages.  
- Implement **method overloading** by adding a `pay()` method that either:  
  - Takes only an `amount`, or  
  - Takes an `amount` and `currency` (e.g., `pay(100, "USD")`).  

💡 **Tip:** Since JavaScript does not support traditional method overloading, use **default parameters** or **checking arguments length** inside the method.  

---

### 🔹 **4. Abstraction (Hiding Implementation Details)**
👉 **Scenario:** You are developing a **car rental system**. The way a car starts (`startEngine()`) differs based on whether it’s a PetrolCar or ElectricCar, but the main method should remain the same.  

✅ **Task:**  
- Create an abstract `Car` class with a method `startEngine()`.  
- Implement two subclasses `PetrolCar` and `ElectricCar`, each defining `startEngine()` differently.  

---

### 🔹 **5. Constructor & Object Creation**
👉 **Scenario:** You are building a **food delivery app** where each restaurant has a name, cuisine type, and rating.  

✅ **Task:**  
- Create a `Restaurant` class with properties: `name`, `cuisineType`, and `rating`.  
- Instantiate 3 restaurant objects with different values.  

---

### 🔹 **6. Static Methods & Properties**
👉 **Scenario:** You are building a **movie rating system** where users can rate movies. The system should also track the **total number of ratings** given.  

✅ **Task:**  
- Create a `Movie` class with properties: `title` and `ratings` (array).  
- Add a static property `totalRatingsCount`.  
- Implement a method `addRating(rating)` that updates both instance ratings and the static count.  

---

### 🔹 **7. Getter & Setter Methods (Easier Example)**
👉 **Scenario:** You are developing a **student grading system** where a student has marks in percentage, but the grade (A, B, C, etc.) should be automatically determined.  

✅ **Task:**  
- Create a `Student` class with a property `percentage`.  
- Use a **getter** `grade` that returns the grade based on the percentage.  
- Use a **setter** `grade` that updates `percentage` based on the grade entered (A, B, C, etc.).  

✅ **Example:**  
```js
let student = new Student();
student.percentage = 85;  // Setting percentage
console.log(student.grade); // Should return 'A'
```

---

### 🔹 **8. Composition (Object Inside Object - Clearer Explanation)**
👉 **Scenario:** You are developing a **company employee management system** where each department has multiple employees.  

✅ **Task:**  
- Create an `Employee` class with properties `name` and `position`.  
- Create a `Department` class that contains an array of `Employee` objects.  
- Implement a method in `Department` to return the names of all employees in that department.  

✅ **Example:**  
```js
let hr = new Department("HR");
hr.addEmployee(new Employee("Alice", "Manager"));
hr.addEmployee(new Employee("Bob", "Recruiter"));
console.log(hr.listEmployees()); // Output: ["Alice", "Bob"]
```

---

### 🔹 **9. Method Chaining**
👉 **Scenario:** You are developing a **game inventory system** where a player can collect items and upgrade weapons.  

✅ **Task:**  
- Create a `Player` class with methods `collectItem(item)`, `upgradeWeapon(level)`, and `showInventory()`.  
- Implement **method chaining** so that `player.collectItem("sword").upgradeWeapon(2).showInventory();` works.  

---

### 🔹 **10. Factory Pattern**
👉 **Scenario:** You are developing a **vehicle manufacturing system** where cars and bikes are created dynamically based on input.  

✅ **Task:**  
- Implement a `VehicleFactory` class with a `createVehicle(type, brand, year)` method.  
- Based on the `type`, return either a `Car` or `Bike` instance.  

✅ **Example:**  
```js
const myCar = VehicleFactory.createVehicle("car", "Toyota", 2023);
const myBike = VehicleFactory.createVehicle("bike", "Yamaha", 2022);
```

