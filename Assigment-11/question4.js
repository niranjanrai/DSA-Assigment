/*

**Question 4**

Given an array of integers `nums` containing `n + 1` integers where each integer is in the range `[1, n]` inclusive.

There is only **one repeated number** in `nums`, return *this repeated number*.

You must solve the problem **without** modifying the array `nums` and uses only constant extra space.

**Example 1:**

```
Input: nums = [1,3,4,2,2]
Output: 2

```

*/
const findDuplicate = (nums) => {
  let slow = nums[0];
  let fast = nums[0];

  // Find the intersection point of the slow and fast pointers
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);

  // Move one pointer to the beginning while keeping the other at the intersection point
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

// Example usage:
console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
