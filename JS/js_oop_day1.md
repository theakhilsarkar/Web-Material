# Object-Oriented Programming (OOP) in JavaScript 🚀

## **What is OOP? 🤔**
Object-Oriented Programming (OOP) is a programming paradigm that organizes code into reusable objects. These objects represent real-world entities and help make the code more structured, organized, secure, and reusable. 

### **Core Principles of OOP 🏗️**
1. **Encapsulation** 🔐: Wrapping data (attributes) and methods (functions) inside a single unit (object).
2. **Abstraction** 🎭: Hiding complex implementation details and exposing only the essential parts.
3. **Inheritance** 🧬: Allowing new classes to inherit properties and behaviors from existing ones.
4. **Polymorphism** 🎭: Methods behaving differently based on the object that calls them.

## **Classes & Objects in JavaScript 📦**
- **Class**: A blueprint or template for creating objects.
- **Object**: An instance of a class.

## **Understanding the Code: Area Calculation 🏠**

### **1. Defining a Class**
```javascript
class Area {
    areaOfRectangle(height, width) {
        document.writeln(height * width);
    }
}
```
✅ This defines a class `Area` with a method `areaOfRectangle()` that calculates the area of a rectangle.

### **2. Creating Objects from the Class**
```javascript
const area1 = new Area();
const area2 = new Area();
```
✅ `new` keyword is used to create objects (instances) of the `Area` class.

### **3. Calling the Method**
```javascript
area1.areaOfRectangle(10, 20);
document.writeln("hello");
area2.areaOfRectangle(30, 10);
```
✅ The method is invoked using different objects with different values.
✅ The output will be printed directly on the document.

## **Best Practice: Using the DOM Instead of `document.writeln()` 🎯**
Instead of using `document.writeln()`, it's better to manipulate the DOM for modern web applications.

### **Improved Code: Writing to HTML Elements 🏗️**
```javascript
class Area {
  areaOfRectangle(height, width, elementId) {
    const area = height * width;
    document.getElementById(elementId).textContent = `Area: ${area}`;
  }
}

const areaCalculator = new Area();

// Example usage:
areaCalculator.areaOfRectangle(10, 20, "rectangleArea1");
areaCalculator.areaOfRectangle(30, 10, "rectangleArea2");
```
✅ Now, the output is displayed inside HTML elements instead of directly on the page.

### **Example HTML:**
```html
<div id="rectangleArea1"></div>
<div id="rectangleArea2"></div>
```
✅ The JavaScript will insert calculated areas into these `<div>` elements.

## **Key Takeaways 📝**
✅ **Classes** are blueprints, and **objects** are instances created from them.
✅ Objects have **methods** that perform operations.
✅ You can create multiple objects from a single class.
✅ OOP makes code reusable, organized, and scalable.
✅ **Avoid `document.writeln()`** in modern development; use the **DOM** instead.

## **Real-World Application 🌍**
Imagine building a Geometry App 🏗️:
- Create classes like `Circle`, `Triangle`, and `Square`.
- Each class has methods to calculate area, perimeter, etc.
- Create objects of these classes to represent real-world shapes.

🎯 **OOP helps in writing maintainable and efficient code!** 🔥

Happy Coding! 🚀👨‍💻👩‍💻
