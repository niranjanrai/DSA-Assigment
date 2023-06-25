/*
Implement a stack using an array in JavaScript. Include the necessary methods such as push, pop, and isEmpty.
*/
class Stack {
  constructor() {
    this.items = []; // Array to store stack elements
  }

  // Push element to the top of the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the topmost element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Usage example
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop()); // Output: 30

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 20

console.log(stack.isEmpty()); // Output: false

console.log(stack.pop()); // Output: 10

console.log(stack.isEmpty()); // Output: true

console.log(stack.pop()); // Output: Stack is empty
