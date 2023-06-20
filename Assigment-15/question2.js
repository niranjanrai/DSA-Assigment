/* 

 **Question 2**

Given an array **a** of integers of length **n**, find the nearest smaller number for every element such that the smaller element is on left side.If no small element present on the left print -1.

**Example 1:**

Input: n = 3
a = {1, 6, 2}
Output: -1 1 1
Explaination: There is no number at the
left of 1. Smaller number than 6 and 2 is 1.

**Example 2:**
Input: n = 6
a = {1, 5, 0, 3, 4, 5}
Output: -1 1 -1 0 3 4
Explaination: Upto 3 it is easy to see
the smaller numbers. But for 4 the smaller
numbers are 1, 0 and 3. But among them 3
is closest. Similary for 5 it is 4.
*/

function findNearestSmallerElements(arr) {
  const stack = []; // to store elements
  const result = new Array(arr.length); // to store the nearest smaller elements

  // Traverse the array from left to right
  for (let i = 0; i < arr.length; i++) {
    // Remove elements from the stack that are greater than or equal to the current element
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    // If there is no smaller element on the left, set it as -1
    if (stack.length === 0) {
      result[i] = -1;
    } else {
      // If there is a smaller element, store it
      result[i] = stack[stack.length - 1];
    }

    // Push the current element to the stack
    stack.push(arr[i]);
  }

  return result;
}

// Example usage:
const arr1 = [1, 6, 2];
const result1 = findNearestSmallerElements(arr1);
console.log(result1); // Output: [-1, 1, 1]

const arr2 = [1, 5, 0, 3, 4, 5];
const result2 = findNearestSmallerElements(arr2);
console.log(result2); // Output: [-1, 1, -1, 0, 3, 4]
