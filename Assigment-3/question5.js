/*

💡 **Question 5**
You are given a large integer represented as an integer array digits, where each
digits[i] is the ith digit of the integer. The digits are ordered from most significant
to least significant in left-to-right order. The large integer does not contain any
leading 0's.

Increment the large integer by one and return the resulting array of digits.

**Example 1:**
Input: digits = [1,2,3]
Output: [1,2,4]

**Explanation:** The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].

*/

function plusOne(digits) {
  const n = digits.length;
  let carry = 1;

  for (let i = n - 1; i >= 0; i--) {
    let sum = digits[i] + carry;
    if (sum > 9) {
      digits[i] = 0;
      carry = 1;
    } else {
      digits[i] = sum;
      carry = 0;
      break; // No need to continue the iteration
    }
  }

  if (carry === 1) {
    digits.unshift(1); // Insert 1 at the beginning
  }

  return digits;
}

// Example usage:
const digits = [1, 2, 3];
const result = plusOne(digits);
console.log(result); // Output: [1, 2, 4]
