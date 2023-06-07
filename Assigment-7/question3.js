/*

 
**Question 3**

Given two non-negative integers, num1 and num2 represented as string, return *the sum of* num1 *and* num2 *as a string*.

You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

**Example 1:**

**Input:** num1 = "11", num2 = "123"

**Output:**

"134"

*/

const addStrings = (num1, num2) => {
  let sum = ""; // Variable to store the result
  let carry = 0; // Variable to track the carry

  let i = num1.length - 1; // Index for num1
  let j = num2.length - 1; // Index for num2

  // Perform addition digit by digit from right to left
  while (i >= 0 || j >= 0 || carry !== 0) {
    const digit1 = i >= 0 ? Number(num1[i]) : 0;
    const digit2 = j >= 0 ? Number(num2[j]) : 0;

    const currentSum = digit1 + digit2 + carry;
    const digitSum = currentSum % 10;
    carry = Math.floor(currentSum / 10);

    sum = digitSum.toString() + sum;

    i--;
    j--;
  }

  return sum;
};

// Example usage:
const num1 = "11";
const num2 = "123";
console.log(addStrings(num1, num2)); // Output: "134"
