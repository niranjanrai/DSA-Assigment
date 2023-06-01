/* 
Question 5
Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

Example 1:
Input: nums = [1,2,3]
Output: 6

*/

function maximumProduct(nums) {
  nums.sort((a, b) => a - b); // Sort the array in ascending order
  const n = nums.length;

  // Case 1: The three largest positive numbers
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

  // Case 2: The two smallest negative numbers (if present) and the largest positive number
  const product2 = nums[0] * nums[1] * nums[n - 1];

  return Math.max(product1, product2);
}

const nums = [1, 2, 3];
console.log(maximumProduct(nums));
