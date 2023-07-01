/* 

 **Question 2**

Given a **circular integer array** `nums` of length `n`, return *the maximum possible sum of a non-empty **subarray** of* `nums`.

A **circular array** means the end of the array connects to the beginning of the array. Formally, the next element of `nums[i]` is `nums[(i + 1) % n]` and the previous element of `nums[i]` is `nums[(i - 1 + n) % n]`.

A **subarray** may only include each element of the fixed buffer `nums` at most once. Formally, for a subarray `nums[i], nums[i + 1], ..., nums[j]`, there does not exist `i <= k1`, `k2 <= j` with `k1 % n == k2 % n`.

**Example 1:**
Input: nums = [1,-2,3,-2]
Output: 3
Explanation: Subarray [3] has maximum sum 3.

**Example 2:**
Input: nums = [5,-3,5]
Output: 10
Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

**Example 3:**
Input: nums = [-3,-2,-3]
Output: -2
Explanation: Subarray [-2] has maximum sum -2.
*/
function maxSubarraySumCircular(nums) {
  const n = nums.length;

  // Kadane's algorithm to find the maximum subarray sum within a linear array
  function kadane(nums) {
    let maxSum = nums[0];
    let currentSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
      currentSum = Math.max(nums[i], currentSum + nums[i]);
      maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
  }

  // Case 1: Maximum subarray sum is within the circular array
  const maxSumLinear = kadane(nums);

  // Case 2: Maximum subarray sum wraps around the circular array
  let totalSum = 0;
  for (let i = 0; i < n; i++) {
    totalSum += nums[i];
    nums[i] = -nums[i]; // Invert the signs of the elements to find the minimum subarray sum
  }
  const maxSumCircular = totalSum + kadane(nums);

  // Return the maximum of the two cases
  return Math.max(maxSumLinear, maxSumCircular);
}

// Example usage:
console.log(maxSubarraySumCircular([1, -2, 3, -2])); // Output: 3
console.log(maxSubarraySumCircular([5, -3, 5])); // Output: 10
console.log(maxSubarraySumCircular([-3, -2, -3])); // Output: -2
