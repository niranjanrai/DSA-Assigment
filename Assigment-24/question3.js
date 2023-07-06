/**
 
 3. **Majority Element**

Given an array `nums` of size `n`, return *the majority element*.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.

**Example 1:**
Input: nums = [3,2,3]
Output: 3

**Example 2:**
Input: nums = [2,2,1,1,1,2,2]
Output: 2

**Constraints:**

- `n == nums.length`
- `1 <= n <= 5 * 10^4`
- `-10^9 <= nums[i] <= 10^9`

 */

function majorityElement(nums) {
  let count = 0;
  let majority = null;

  for (let i = 0; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
      count++;
    } else if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }

  return majority;
}

let nums = [3, 2, 3];
let result = majorityElement(nums);
console.log(result); // Output: 3

nums = [2, 2, 1, 1, 1, 2, 2];
result = majorityElement(nums);
console.log(result); // Output: 2
