/*

 **Question 5**

Given an array of integers **arr**, the task is to find maximum element of that array using recursion.

**Example 1:**

Input: arr = {1, 4, 3, -5, -4, 8, 6};
Output: 8

**Example 2:**

Input: arr = {1, 4, 45, 6, 10, -8};
Output: 45



*/

function findMax(arr, start, end) {
  // Base case: When the array has only one element
  if (start === end) {
    return arr[start];
  }

  // Recursive case: Divide the array and find the maximum of each half
  const mid = Math.floor((start + end) / 2);
  const leftMax = findMax(arr, start, mid);
  const rightMax = findMax(arr, mid + 1, end);

  // Compare and return the maximum of the two halves
  return Math.max(leftMax, rightMax);
}

// Example usage:
const arr1 = [1, 4, 3, -5, -4, 8, 6];
console.log(findMax(arr1, 0, arr1.length - 1)); // Output: 8

const arr2 = [1, 4, 45, 6, 10, -8];
console.log(findMax(arr2, 0, arr2.length - 1)); // Output: 45
