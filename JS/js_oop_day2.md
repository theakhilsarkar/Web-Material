```javascript
// class - blueprint
// obj - behaviour

// OOP (Object-Oriented Programming) is a concept of classes and objects which make code
// structured, organized, secure, and reusable.

// JS - OOP
// Object-Oriented Programming

// Fundamental principles
// 1. Data Encapsulation
// 2. Inheritance
// 3. Polymorphism
// 4. Data Abstraction

// 1. Data Encapsulation -
// Structured - formatted
// Organized - access, use
// Reusable - many times use

// OOPs -
// Constructor - it's a special type of method, it executes without calling.
// Constructor is used to initialize attributes.

// Default constructor
// Parameterized constructor

class Person {
  // data - attributes - variables: we make attributes private
  // using # you can make attributes private
  // private: only accessible within the class.
  #name;
  #age;
  #gender;

  // Local and global attribute names are the same.
  // The 'this' keyword represents global attributes and methods.
  constructor(name, age, gender) { // Parameterized constructor.
    this.#name = name;
    this.#age = age;
    this.#gender = gender;
  }

  // Setter methods for updating private attributes if needed.
  setName(name) {
    this.#name = name;
  }

  setAge(age) {
    this.#age = age;
  }

  setGender(gender) {
    this.#gender = gender;
  }

  // Getter methods for accessing private attributes.
  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  getGender() {
    return this.#gender;
  }

  output() {
    // which method retrieves output/gets attributes is called - getter
    document.writeln(`Name: ${this.#name}<br>`);
    document.writeln(`Age: ${this.#age}<br>`);
    document.writeln(`Gender: ${this.#gender}<br>`);
  }
}

// Using parameterized constructor
const p1 = new Person("Manav", 18, "Male");

// Attempting to directly access private attributes will result in an error.
// p1.#name = "hacker"; // Error: Private field '#name' must be declared in an enclosing class
// p1.#age = 18951; // Error: Private field '#age' must be declared in an enclosing class
// p1.#gender = "i am ev"; // Error: Private field '#gender' must be declared in an enclosing class

p1.output();

// Example of using setter methods to update attributes.
p1.setAge(19);
p1.output();

// Example of using getter methods to retrieve attribute values.
document.writeln(`<br>Retrieved Name: ${p1.getName()}<br>`);

// ATM - INPUT, output make it proper for study and easy to understand
```

**Explanation of Improvements:**

1.  **Parameterized Constructor:**
    * Instead of a separate `input()` method, a parameterized constructor `constructor(name, age, gender)` is used. This is the standard way to initialize object attributes when creating an instance of a class.
2.  **Getter and Setter Methods:**
    * Getter methods (`getName()`, `getAge()`, `getGender()`) are provided to safely access the private attributes.
    * Setter methods (`setName()`, `setAge()`, `setGender()`) are provided to safely modify the private attributes. This allows controlled access and modification of the object's state.
3.  **Private Attributes:**
    * The `#` symbol is correctly used to declare private attributes (`#name`, `#age`, `#gender`). This enforces data encapsulation, preventing direct external access.
4.  **Clear Output:**
    * The `output()` method uses template literals (`\`${variable}\``) and `<br>` tags to produce cleaner and more readable output in the browser.
5.  **Example Usage:**
    * Added examples to demonstrate how to use the getters and setters.
6.  **Comments and Clarity:**
    * Added more comments to explain the code's functionality and the concepts of getters, setters, and private attributes.
7.  **Error prevention:**
    * Added comments to point out the errors that occur when you try to access private variables directly.
8.  **Constructor usage:**
    * Demonstrated how to create an object using the constructor.
