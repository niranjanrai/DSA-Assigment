/*
 **Question 3**

Implement a Stack using two queues **q1** and **q2**.

**Example 1:**
Input:
push(2)
push(3)
pop()
push(4)
pop()
Output:3 4
Explanation:
push(2) the stack will be {2}
push(3) the stack will be {2 3}
pop()   poped element will be 3 the
        stack will be {2}
push(4) the stack will be {2 4}
pop()   poped element will be 4

**Example 2:**
Input:
push(2)
pop()
pop()
push(3)
Output:2 -1
*/
class Stack {
  constructor() {
    this.q1 = []; // first queue
    this.q2 = []; // second queue
  }

  push(item) {
    // Add the item to the empty queue (either q1 or q2)
    if (this.q1.length === 0) {
      this.q1.push(item);
    } else {
      this.q2.push(item);
    }
  }

  pop() {
    // If both queues are empty, return -1 (stack underflow)
    if (this.q1.length === 0 && this.q2.length === 0) {
      return -1;
    }

    // Move items from the non-empty queue to the empty queue except the last item
    if (this.q1.length !== 0) {
      while (this.q1.length > 1) {
        this.q2.push(this.q1.shift());
      }
      return this.q1.shift();
    } else {
      while (this.q2.length > 1) {
        this.q1.push(this.q2.shift());
      }
      return this.q2.shift();
    }
  }
}

// Example usage:
const stack = new Stack();
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
stack.push(4);
console.log(stack.pop()); // Output: 4

const stack2 = new Stack();
stack2.push(2);
console.log(stack2.pop()); // Output: 2
console.log(stack2.pop()); // Output: -1
stack2.push(3);
console.log(stack2.pop()); // Output: 3
