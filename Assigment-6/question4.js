/*

💡 **Question 4**

Given a binary array nums, return *the maximum length of a contiguous subarray with an equal number of* 0 *and* 1.

**Example 1:**

**Input:** nums = [0,1]

**Output:** 2

**Explanation:**

[0, 1] is the longest contiguous subarray with an equal number of 0 and 1.


*/

function findMaxLength(nums) {
  const prefixSum = {};
  let maxLen = 0;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;

    if (count === 0) {
      maxLen = i + 1;
    } else if (prefixSum[count] !== undefined) {
      maxLen = Math.max(maxLen, i - prefixSum[count]);
    } else {
      prefixSum[count] = i;
    }
  }

  return maxLen;
}

const nums = [0, 1];

console.log(findMaxLength(nums)); // Output: 2
