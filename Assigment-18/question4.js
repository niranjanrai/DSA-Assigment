/*

  4. **Maximum Gap**

Given an integer array `nums`, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return `0`.

You must write an algorithm that runs in linear time and uses linear extra space.

**Example 1:**
Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

**Example 2:**
Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.

**Constraints:**

- `1 <= nums.length <= 10^5`
- `0 <= nums[i] <= 10^9`
*/

function maximumGap(nums) {
  if (nums.length < 2) {
    return 0;
  }

  // Find the maximum element
  let maxNum = Math.max(...nums);

  let exp = 1; // Current digit being considered
  let radix = 10; // Base 10 for decimal numbers
  const n = nums.length;

  // Perform Radix Sort
  while (maxNum / exp > 0) {
    const count = Array(radix).fill(0); // Count array for each digit
    const output = Array(n).fill(0); // Output array for sorted elements

    // Count the occurrences of each digit
    for (let i = 0; i < n; i++) {
      const digit = Math.floor(nums[i] / exp) % radix;
      count[digit]++;
    }

    // Calculate the cumulative count
    for (let i = 1; i < radix; i++) {
      count[i] += count[i - 1];
    }

    // Build the output array in sorted order
    for (let i = n - 1; i >= 0; i--) {
      const digit = Math.floor(nums[i] / exp) % radix;
      output[count[digit] - 1] = nums[i];
      count[digit]--;
    }

    // Update the array with the sorted order
    for (let i = 0; i < n; i++) {
      nums[i] = output[i];
    }

    // Update maxGap after each pass
    if (exp > 1) {
      let gap = nums[1] - nums[0];
      for (let i = 2; i < n; i++) {
        gap = Math.max(gap, nums[i] - nums[i - 1]);
      }
      maxGap = Math.max(maxGap, gap);
    }

    exp *= radix; // Move to the next digit
  }

  return maxGap;
}

// Example usage:
const nums = [3, 6, 9, 1];
console.log(maximumGap(nums)); // Output: 3
