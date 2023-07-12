/* In JavaScript, the "execution context" is a fundamental concept that defines the environment in which the code is executed and where variables, functions, and scopes are accessible. Every time a function is invoked, a new execution context is created for that function. Understanding execution contexts is crucial for understanding how JavaScript code executes and how scope and variable access work.

The Execution Context consists of three main components:

1.Variable Object (VO): The variable object stores all the variables, function declarations, and function arguments in the current scope. It is created during the creation phase of the execution context.

2.Scope Chain: The scope chain is an ordered list of variable objects that defines the scope of variables and functions accessible within the current execution context. It allows functions to access variables from their outer environments.

3.this keyword: The this keyword refers to the current object that a function is a property of or the object being referenced when a function is invoked. The value of this depends on how the function is called.

** When a script starts running, a global execution context is created for the global scope. During the execution of the script, whenever a function is invoked, a new execution context is created for that function, forming a stack of execution contexts known as the "call stack."

Let's illustrate the concept of execution contexts with a diagram:


Global Execution Context
______________________________
|  Variable Object (VO)     |
|___________________________|
|  Scope Chain              |
|___________________________|
|  this                     |
|___________________________|
|  Outer Environment        | (null, as it's the global scope)
|___________________________|
|  Code (Global code)       |
|___________________________|

Call Stack:
___________
|         |
|         |
|         |   (Global Execution Context - top of the stack)
|_________|


When a function is invoked, a new execution context is created and pushed to the call stack. The newly created execution context will have its own variable object, scope chain, and this reference.

Let's illustrate the call stack with a diagram after invoking a function foo() from the global context:

foo() Execution Context
______________________________
|  Variable Object (VO)     |
|___________________________|
|  Scope Chain              | --> (foo's VO points to Global VO)
|___________________________|
|  this                     | --> (depends on how foo() was called)
|___________________________|
|  Outer Environment        | --> (foo's outer environment points to Global Execution Context)
|___________________________|
|  Code (foo's code)        |
|___________________________|

Global Execution Context
______________________________
|  Variable Object (VO)     |
|___________________________|
|  Scope Chain              |
|___________________________|
|  this                     |
|___________________________|
|  Outer Environment        | (null, as it's the global scope)
|___________________________|
|  Code (Global code)       |
|___________________________|

Call Stack:
___________
|         |
| foo()   |  (foo() Execution Context - top of the stack)
|_________|
|         |
|         |   (Global Execution Context)
|_________|


When foo() is invoked, a new execution context is created for the foo() function and pushed onto the call stack. The execution context of foo() has its own variable object, scope chain, and this reference. The scope chain of foo() includes both its own variable object and the variable object of the global context, allowing foo() to access variables from the global scope.

This process continues as functions are called within functions, creating nested execution contexts on top of the call stack. When a function completes its execution, its execution context is popped from the call stack, and the control returns to the previous execution context.

Understanding execution contexts and the call stack is crucial for understanding scope, variable access, and how JavaScript code is executed.

*/
