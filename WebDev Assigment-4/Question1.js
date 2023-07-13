/**
  ** Q.1 Explain Hoisting in JavaScript **
 - Hoisting in JavaScript is a behavior that allows you to use variables and functions before they are actually declared in your code.

When JavaScript code is executed, it goes through two phases: the compilation phase and the execution phase. During the compilation phase, the JavaScript engine scans through your code and finds all variable and function declarations. It sets up memory space for these declarations, which is called hoisting.

During hoisting, variable declarations are moved to the top of their respective scope, and function declarations are fully hoisted to the top of the scope as well. This means that you can use variables and call functions before they appear in the code.

However, it's important to note that only the declarations are hoisted, not the initializations or assignments. So while you can use a variable before declaring it, the value will be undefined until it's assigned a value later in the code.

** Q.2 Explain Temporal Dead Zone? **
The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when you try to access a variable before it is declared, but within its scope. It's called a "dead zone" because during this phase, the variable exists but cannot be accessed.

In JavaScript, when a variable is declared using let or const, it is hoisted to the top of its scope, just like with var declarations. However, unlike var, variables declared with let and const are not initialized with a default value of undefined. Instead, they enter the TDZ.

The TDZ is the period between the start of the scope and the actual declaration of the variable. If you try to access or use the variable within this zone, JavaScript will throw a ReferenceError because it hasn't been fully initialized yet.

** Q.3 Difference between var & let? **
The main difference between var and let in JavaScript is how they handle variable scoping and hoisting.

Scope: Variables declared with var have function scope or global scope, meaning they are accessible throughout the entire function or globally if declared outside any function. On the other hand, variables declared with let have block scope, which means they are only accessible within the nearest enclosing block, such as within a loop or an if statement.    

Hoisting: Both var and let are hoisted, but there's a difference in their behavior. Variables declared with var are hoisted to the top of their enclosing scope and are initialized with a value of undefined. This means you can use them before their actual declaration in the code. On the other hand, variables declared with let are also hoisted but enter the Temporal Dead Zone (TDZ), as explained in the previous question. They cannot be accessed before their actual declaration.

** Q.4 What are the major features introduced in ECMAScript 6? **
ECMAScript 6, also known as ES6 or ES2015, introduced several major features and enhancements to JavaScript. Here are some of the key features:

Block-Scoped Variables: The introduction of let and const keywords allows variables to have block scope, improving variable scoping in JavaScript and reducing issues related to variable hoisting.

Arrow Functions: Arrow functions provide a concise syntax for writing function expressions. They have a lexical this binding, making it easier to preserve the context of this inside functions.

Classes: ES6 introduced the class keyword, providing a more straightforward syntax for creating classes and working with object-oriented programming concepts. It simplifies the prototypal inheritance model of JavaScript.

Template Literals: Template literals allow the creation of strings with embedded expressions. It supports multi-line strings and provides syntactic sugar for string interpolation, making string manipulation more convenient.

Destructuring Assignment: Destructuring assignment enables extracting values from arrays or objects into individual variables. It simplifies variable assignment and extraction of specific values from complex data structures.

 ** Q.5 What is the difference between let and const ? **
 The main difference between let and const in JavaScript lies in their mutability and reassignment capabilities.

Mutability: Variables declared with let can be reassigned to new values, while variables declared with const are read-only and cannot be reassigned. The value of a variable declared with const remains constant throughout its lifetime.

Initialization: Variables declared with let can be declared without an initial value, and their value can be assigned later in the code. On the contrary, variables declared with const must be initialized with a value at the time of declaration.

** Q.6  What is template literals in ES6 and how do you use them? **
Template literals, introduced in ES6, are a way to create strings that allow embedded expressions and multiline content. They provide a more concise and expressive syntax for string manipulation in JavaScript.

Template literals are defined using backticks (```) instead of single or double quotes. Within a template literal, you can include placeholders, indicated by ${expression}, where expression can be any valid JavaScript expression.

Here's an example that demonstrates the usage of template literals:
const name = 'John';
const age = 25;

const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

console.log(greeting);


 ** Q.7 What’s difference between map & forEach? ** 
    they have some key differences in terms of functionality and return values:

Return Value:

forEach: The forEach method iterates over each element of an array and applies a provided function to each element. It does not return a new array but performs the specified action for each element in the original array.
map: The map method also iterates over each element of an array and applies a provided function to each element. However, it returns a new array containing the results of applying the function to each element of the original array.
Usage and Purpose:

forEach: forEach is commonly used when you want to perform a specific action, such as logging values or modifying elements of an array in-place, without the need to create a new array. It is primarily used for its side effects.
map: map is used when you want to transform each element of an array into a new value or format and create a new array based on those transformed values. It is useful for creating a modified version of an existing array without mutating the original array.
Modifying the Original Array:

forEach: The forEach method allows you to modify the elements of the original array directly within the provided function.
map: The map method does not modify the original array. It creates and returns a new array with the transformed values based on the function provided.

** Q.8 How can you destructure objects and arrays in ES6? ** 
In ES6 (ECMAScript 2015) and onwards, JavaScript introduced the destructuring syntax, which allows you to extract values from arrays and properties from objects into individual variables. It provides a concise and convenient way to access and assign values.

Destructuring Arrays:
To destructure an array, you can use square brackets ([]) on the left side of the assignment. The number of variables on the left must match the number of elements in the array.

Destructuring Objects:
To destructure an object, you can use curly braces ({}) on the left side of the assignment. The variable names on the left should match the property names of the object.

Default Values and Renaming:
You can also provide default values and rename variables during destructuring.

 */
