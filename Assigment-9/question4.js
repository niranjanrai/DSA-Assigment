/*
💡 **Question 4**

Given a number N and a power P, the task is to find the exponent of this number raised to the given power, i.e. N^P.

**Example 1 :** 

Input: N = 5, P = 2

Output: 25

**Example 2 :**
Input: N = 2, P = 5

Output: 32



*/
function power(N, P) {
  const result = Math.pow(N, P);
  return result;
}

// Example usage:
console.log(power(5, 2)); // Output: 25
console.log(power(2, 5)); // Output: 32
