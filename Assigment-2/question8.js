/*
Question 8
You are given an integer array nums and an integer k.

In one operation, you can choose any index i where 0 <= i < nums.length and change nums[i] to nums[i] + x where x is an integer from the range [-k, k]. You can apply this operation at most once for each index i.

The score of nums is the difference between the maximum and minimum elements in nums.

Return the minimum score of nums after applying the mentioned operation at most once for each index in it.

Example 1:
Input: nums = [1], k = 0
Output: 0
*/

function minimumDifference(nums, k) {
  const n = nums.length;
  let maxNum = -Infinity;
  let minNum = Infinity;

  // Find the maximum and minimum values in nums
  for (let i = 0; i < n; i++) {
    maxNum = Math.max(maxNum, nums[i]);
    minNum = Math.min(minNum, nums[i]);
  }

  // If the difference is already <= 2k, return the difference
  if (maxNum - minNum <= 2 * k) {
    return maxNum - minNum;
  }

  // Adjust the values to minimize the score
  const mid = Math.floor((maxNum + minNum) / 2);
  maxNum = -Infinity;
  minNum = Infinity;

  for (let i = 0; i < n; i++) {
    nums[i] = Math.max(mid - k, Math.min(mid + k, nums[i]));
    maxNum = Math.max(maxNum, nums[i]);
    minNum = Math.min(minNum, nums[i]);
  }

  return maxNum - minNum;
}

const nums = [1];
const k = 0;
console.log(minimumDifference(nums, k));
