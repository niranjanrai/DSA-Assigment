/**
  **Question 6**

Given string **S** representing a postfix expression, the task is to evaluate the expression and find the final value. Operators will only include the basic arithmetic operators like ***, /, + and -**.

**Example 1:**
Input: S = "231*+9-"
Output: -4
Explanation:
After solving the given expression,
we have -4 as result.

**Example 2:**
Input: S = "123+*8-"
Output: -3
Explanation:
After solving the given postfix
expression, we have -3 as result.
 * 
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
}

function evaluatePostfixExpression(expression) {
  const stack = new Stack();

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (isNumeric(char)) {
      stack.push(Number(char));
    } else {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      let result;

      switch (char) {
        case "+":
          result = operand1 + operand2;
          break;
        case "-":
          result = operand1 - operand2;
          break;
        case "*":
          result = operand1 * operand2;
          break;
        case "/":
          result = operand1 / operand2;
          break;
      }

      stack.push(result);
    }
  }

  return stack.pop();
}

function isNumeric(char) {
  return !isNaN(char);
}

// Example usage:
const expression1 = "231*+9-";
const result1 = evaluatePostfixExpression(expression1);
console.log(result1); // Output: -4

const expression2 = "123+*8-";
const result2 = evaluatePostfixExpression(expression2);
console.log(result2); // Output: -3
