/**
 
We define a harmonious array as an array where the difference between its maximum value
and its minimum value is exactly 1.

Given an integer array nums, return the length of its longest harmonious subsequence
among all its possible subsequences.

A subsequence of an array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [1,3,2,2,5,2,3,7]
Output: 5

Explanation: The longest harmonious subsequence is [3,2,2,2,3].
 */

function findLHS(nums) {
  const numFreq = new Map();
  let maxLen = 0;

  // Count the frequency of each number
  for (const num of nums) {
    numFreq.set(num, (numFreq.get(num) || 0) + 1);
  }

  // Check if num and num + 1 exist in the hashmap
  for (const [num, freq] of numFreq.entries()) {
    if (numFreq.has(num + 1)) {
      const currLen = freq + numFreq.get(num + 1);
      maxLen = Math.max(maxLen, currLen);
    }
  }

  return maxLen;
}

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));
