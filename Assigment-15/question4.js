/*

**Question 4**

You are given a stack **St**. You have to reverse the stack using recursion.

**Example 1:**
Input:St = {3,2,1,7,6}
Output:{6,7,1,2,3}

**Example 2:**
Input:St = {4,3,9,6}
Output:{6,9,3,4}
*/
class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0;
  }

  reverse() {
    if (this.isEmpty()) {
      return;
    }

    // Remove the top item from the stack
    const item = this.pop();

    // Reverse the remaining stack
    this.reverse();

    // Insert the removed item at the bottom of the reversed stack
    this.insertAtBottom(item);
  }

  insertAtBottom(item) {
    if (this.isEmpty()) {
      this.push(item);
      return;
    }

    // Remove all items from the stack and insert them back one by one
    const temp = this.pop();
    this.insertAtBottom(item);
    this.push(temp);
  }

  printStack() {
    for (let i = this.items.length - 1; i >= 0; i--) {
      console.log(this.items[i]);
    }
  }
}

// Example usage:
const stack = new Stack();
stack.push(3);
stack.push(2);
stack.push(1);
stack.push(7);
stack.push(6);

console.log("Original stack:");
stack.printStack();

console.log("Reversed stack:");
stack.reverse();
stack.printStack();
