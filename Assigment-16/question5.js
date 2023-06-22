/*
 **Question 5**

Given a number , write a program to reverse this number using stack.

**Examples:**
Input : 365
Output : 563

Input : 6899
Output : 9986

*/
function reverseNumber(number) {
  const stack = [];
  let reversedNumber = "";

  // Push each digit of the number to the stack
  while (number > 0) {
    const digit = number % 10;
    stack.push(digit);
    number = Math.floor(number / 10);
  }

  // Pop digits from the stack to construct the reversed number
  while (stack.length > 0) {
    reversedNumber += stack.pop().toString();
  }

  return parseInt(reversedNumber, 10);
}

// Example usage:
const number1 = 365;
console.log(reverseNumber(number1)); // Output: 563

const number2 = 6899;
console.log(reverseNumber(number2)); // Output: 9986
