/*

**Question 4**

Given a string calculate length of the string using recursion.

**Examples:**


*/

function calculateLength(str) {
  if (str === "") {
    return 0;
  }

  return 1 + calculateLength(str.slice(1));
}

console.log(calculateLength("hello")); // Output: 5
