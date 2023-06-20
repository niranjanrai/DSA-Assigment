/*
 **Question 5** You are given a string **S**, the task is to reverse the
string using stack. 

  **Example 1:**

Input: S="GeeksforGeeks"
Output: skeeGrofskeeG
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

  reverseString(str) {
    const stack = new Stack();
    let reversedString = "";

    // Push each character of the string into the stack
    for (let i = 0; i < str.length; i++) {
      stack.push(str[i]);
    }

    // Pop each character from the stack to build the reversed string
    while (!stack.isEmpty()) {
      reversedString += stack.pop();
    }

    return reversedString;
  }
}

// Example usage:
const stack = new Stack();
const inputString = "GeeksforGeeks";
const reversedString = stack.reverseString(inputString);
console.log(reversedString); // Output: skeeGrofskeeG
