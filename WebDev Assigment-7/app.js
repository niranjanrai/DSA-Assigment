/**
** Q.1 What’s Constructor And Its Purpose? **
A constructor in JavaScript is a special method that is used to create and initialize objects of a class. It is called automatically when a new object is created using the `new` keyword.

The purpose of a constructor is to set up the initial state and properties of an object. It defines how the object should be created and what values should be assigned to its properties.

In simple terms, a constructor is like a blueprint or a set of instructions for creating an object of a specific type or class. It ensures that the object is properly initialized with the necessary values and settings.

Here's an example of a constructor function:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person("John", 25);
console.log(john.name); // Output: John
console.log(john.age); // Output: 25
```

In the above code, the `Person` function serves as a constructor. When we create a new object using `new Person("John", 25)`, the constructor is called. It receives the values `"John"` and `25` as arguments and assigns them to the respective properties `name` and `age` of the newly created object (`john`).

Constructors allow us to create multiple objects of the same type with different initial values. They provide a way to define and initialize the state of objects in a consistent and reusable manner.

Constructors are an essential concept in object-oriented programming (OOP) and are commonly used in JavaScript for creating and initializing objects before they are used in the program.

** Q.2 Explain This Keyword and Its Purpose? ** 
The `this` keyword in JavaScript is a special keyword that refers to the current execution context or the object on which a method is being called. Its value depends on how and where it is used.

The purpose of the `this` keyword is to provide a way to access and refer to the current object or context within the code. It allows methods to access properties and other methods of the object they belong to.

Here are some common use cases and purposes of the `this` keyword:

1. Method Invocation:
   - In an object-oriented context, when a method is called on an object using dot notation (`object.method()`), `this` refers to the object on which the method is being invoked.
   - It allows the method to access and manipulate the properties and other methods of the object.
   - Example:

   ```javascript
   const person = {
     name: "John",
     greet: function () {
       console.log("Hello, my name is " + this.name);
     },
   };

   person.greet(); // Output: Hello, my name is John
   ```

2. Constructor Invocation:
   - When a function is used as a constructor function using the `new` keyword, `this` refers to the newly created object being constructed.
   - It allows the constructor function to initialize the properties of the newly created object.
   - Example:

   ```javascript
   function Person(name) {
     this.name = name;
   }

   const john = new Person("John");
   console.log(john.name); // Output: John
   ```

3. Event Handlers:
   - When an event handler function is invoked in response to an event, `this` typically refers to the DOM element that triggered the event.
   - It allows the event handler to access and manipulate the properties and behavior of the element.
   - Example:

   ```javascript
   const button = document.querySelector("button");
   button.addEventListener("click", function () {
     console.log("Button clicked:", this);
   });
   ```

4. Function Invocation (Non-Strict Mode):
   - In a non-strict mode function that is invoked without any context, `this` refers to the global object (e.g., `window` in browsers, `global` in Node.js).
   - Example:

   ```javascript
   function sayHello() {
     console.log("Hello, " + this); // Output: Hello, [object Window]
   }

   sayHello();
   ```

The `this` keyword allows dynamic binding and enables methods or functions to operate within their respective context or object. It provides flexibility and access to the relevant properties and 
behavior of the current object or execution context.

 ** Q.3 What’s Call Apply Bind Method & Difference Between them **
 In JavaScript, `call`, `apply`, and `bind` are methods that allow you to control the execution context and binding of `this` within functions. They provide ways to explicitly set the value of `this` when calling a function and, in some cases, pass arguments as well.

1. `call` method:
   - The `call` method is used to invoke a function with a specific `this` value and pass arguments individually.
   - It takes the value to be used as `this` as its first argument, followed by individual arguments to be passed to the function.
   - The function is immediately executed with the specified `this` value and arguments.
   - Example:

   ```javascript
   function greet() {
     console.log(`Hello, ${this.name}`);
   }

   const person = { name: "John" };

   greet.call(person); // Output: Hello, John
   ```

2. `apply` method:
   - The `apply` method is similar to `call`, but it accepts the `this` value as its first argument and an array-like object or an array of arguments as the second argument.
   - The function is immediately executed with the specified `this` value and the arguments provided in the array-like object or array.
   - Example:

   ```javascript
   function greet(greeting) {
     console.log(`${greeting}, ${this.name}`);
   }

   const person = { name: "John" };
   const args = ["Hello"];

   greet.apply(person, args); // Output: Hello, John
   ```

3. `bind` method:
   - The `bind` method returns a new function with a bound `this` value, without immediately executing the function.
   - It allows you to create a new function with a specific `this` value, which can be invoked later.
   - `bind` also allows partial application of arguments. Additional arguments passed to `bind` are prepended to the arguments list when the bound function is called.
   - Example:

   ```javascript
   function greet(greeting) {
     console.log(`${greeting}, ${this.name}`);
   }

   const person = { name: "John" };
   const greetPerson = greet.bind(person, "Hello");

   greetPerson(); // Output: Hello, John
   ```

The main difference between `call`, `apply`, and `bind` lies in their immediate execution and the way arguments are passed:

- `call` and `apply` execute the function immediately.
- `call` passes arguments individually, while `apply` accepts an array-like object or array of arguments.
- `bind` returns a new function with the specified `this` value, which can be called later.

All three methods provide ways to control the execution context and binding of `this` within functions, allowing for greater flexibility and control over function invocation.

 ** Q.4 Explain OOPS ?  ** 
 OOPS stands for Object-Oriented Programming Paradigm. It is a programming paradigm that organizes code into objects, which are instances of classes, and allows for the creation of reusable and modular code structures. OOPS provides a set of principles and concepts that help in designing and implementing complex software systems.

The key concepts of OOPS are:

1. Classes and Objects:
   - A class is a blueprint or a template that defines the structure and behavior of objects. It encapsulates data (attributes) and functions (methods) that operate on that data.
   - An object is an instance of a class. It represents a specific entity with its own set of properties and behavior.

2. Encapsulation:
   - Encapsulation is the process of combining data and methods within a class and hiding the internal details of the class from the outside world.
   - It allows for data abstraction, where the internal workings of an object are hidden and only relevant methods and properties are exposed.

3. Inheritance:
   - Inheritance allows the creation of new classes based on existing classes. It enables the reuse of code and the creation of class hierarchies.
   - Subclasses (child classes) inherit the properties and methods of their parent class (superclass) and can extend or override them as needed.

4. Polymorphism:
   - Polymorphism allows objects of different classes to be treated as objects of a common parent class. It provides flexibility and extensibility in handling objects with different behaviors.
   - Polymorphism enables methods to be defined in a generic way, allowing them to behave differently based on the specific implementation in the object.

5. Abstraction:
   - Abstraction focuses on simplifying complex systems by breaking them down into smaller, more manageable components.
   - It allows for the creation of abstract classes or interfaces that define common behavior and can be implemented by multiple concrete classes.

These concepts of OOPS promote modular and reusable code, improved code organization, and increased code maintainability. OOPS enables the creation of software systems that are scalable, flexible, and easier to understand and maintain.

JavaScript, like many modern programming languages, supports object-oriented programming and allows for the implementation of OOPS principles using classes, objects, inheritance, and other related concepts.

** Q.5 Whats Abstraction and Its Purpose? **
Abstraction is a fundamental concept in object-oriented programming (OOPS) that focuses on simplifying complex systems by breaking them down into more manageable and understandable components. It involves representing essential features and hiding unnecessary details to provide a simplified and high-level view of an object or a system.

The purpose of abstraction is to:
1. Reduce complexity: Abstraction helps in managing and handling complex systems by providing a clear and simplified interface. It allows developers to focus on the essential aspects of an object or a system while hiding the underlying implementation details.

2. Encapsulate implementation: Abstraction allows the internal workings of an object or a system to be hidden and provides a way to interact with it through a well-defined interface. It separates the internal implementation from the external usage, enhancing code modularity and maintenance.

3. Promote code reusability: By abstracting common behaviors and features into reusable components, abstraction promotes code reusability. Abstract classes and interfaces provide a blueprint for implementing concrete classes, allowing for consistency and standardization across multiple objects.

4. Facilitate changes and flexibility: Abstraction provides a layer of indirection between the implementation and its usage. This allows for modifications or enhancements to the underlying implementation without affecting the code that relies on the abstraction. It provides a way to evolve and adapt systems over time.

5. Improve code maintainability: Abstraction helps in writing clean and maintainable code by separating concerns and providing a clear separation of responsibilities. It allows developers to understand and modify code easily, as they can focus on the high-level design and behavior without getting overwhelmed by low-level details.

Abstraction is often achieved through abstract classes, interfaces, and modular design patterns. By abstracting away unnecessary details and exposing only essential information, abstraction helps in creating more understandable, maintainable, and adaptable software systems.

** Q.6 Whats Polymorphism and Purpose of it? **
Polymorphism is a concept in object-oriented programming (OOP) that allows objects of different classes to be treated as objects of a common parent class. It enables methods to be defined in a generic way, allowing them to behave differently based on the specific implementation in the object. The term "polymorphism" comes from the Greek words "poly" meaning "many" and "morph" meaning "form."

The purpose of polymorphism is to:
1. Encourage code reuse: Polymorphism allows for the creation of a common interface or contract through abstract classes or interfaces. This promotes code reuse by enabling different classes to implement the same methods defined in the common interface but with specific implementations that suit their own needs.

2. Enable flexibility and extensibility: Polymorphism provides flexibility and extensibility in handling objects with different behaviors. It allows objects of different classes to be used interchangeably, as long as they adhere to a common interface or share a common parent class. This makes code more adaptable to changes and allows for easy extension by adding new classes that conform to the same interface.

3. Simplify code logic: Polymorphism simplifies code logic by allowing operations to be defined generically. This reduces the need for explicit conditional statements and improves code readability and maintainability. Instead of writing separate logic for each class, polymorphism allows for a unified approach to handle objects with different implementations.

4. Enable method overriding: Polymorphism allows subclasses to override methods inherited from their parent class. This means that subclasses can provide their own specific implementation of a method while still adhering to the common interface defined in the parent class. Method overriding allows for customization and specialization of behavior, making the code more expressive and tailored to specific requirements.

5. Enhance code modularity: Polymorphism promotes modularity by separating the interface or contract from the specific implementations. It allows for separate development and testing of classes while ensuring that they can be used interchangeably through their shared interface. This enhances code organization, reusability, and maintainability.

Polymorphism is a powerful concept that enables flexibility, code reuse, and extensibility in object-oriented programming. It promotes a more modular and flexible design, allowing code to be written in a more generic and adaptable manner.
 */
