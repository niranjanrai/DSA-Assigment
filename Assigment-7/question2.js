/* 

💡 **Question 2**

Given a string num which represents an integer, return true *if* num *is a **strobogrammatic number***.

A **strobogrammatic number** is a number that looks the same when rotated 180 degrees (looked at upside down).

**Example 1:**

**Input:** num = "69"

**Output:**

true

*/
const isStrobogrammatic = (num) => {
  const strobogrammaticDigits = {
    0: "0",
    1: "1",
    6: "9",
    8: "8",
    9: "6",
  };

  let rotatedNum = "";

  for (let i = num.length - 1; i >= 0; i--) {
    const digit = num[i];

    if (!(digit in strobogrammaticDigits)) {
      return false; // If any digit is not strobogrammatic, return false
    }

    rotatedNum += strobogrammaticDigits[digit];
  }

  return rotatedNum === num; // Check if the rotated number is equal to the original number
};

// Example usage:
const num = "69";
console.log(isStrobogrammatic(num)); // Output: true
