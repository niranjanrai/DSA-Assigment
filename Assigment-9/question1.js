/*


 **Question 1**

Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.

An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.

**Example 1:**
Input: n = 1 

Output: true

**Example 2:**
Input: n = 16 

Output: true

**Example 3:**
Input: n = 3 

Output: false


*/

function isPowerOfTwo(n) {
  if (n <= 0) {
    return false; // Negative numbers and zero are not powers of two
  }

  while (n % 2 === 0) {
    n /= 2; // Keep dividing by 2 until n becomes 1 or an odd number
  }

  return n === 1; // Check if n is 1, indicating it is a power of two
}

// Example usage:
console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(16)); // Output: true
console.log(isPowerOfTwo(3)); // Output: false
