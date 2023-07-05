/* 

 2. **Count of Smaller Numbers After Self**

Given an integer array `nums`, return *an integer array* `counts` *where* `counts[i]` *is the number of smaller elements to the right of* `nums[i]`.

**Example 1:**
Input: nums = [5,2,6,1]
Output: [2,1,1,0]
Explanation:
To the right of 5 there are2 smaller elements (2 and 1).
To the right of 2 there is only1 smaller element (1).
To the right of 6 there is1 smaller element (1).
To the right of 1 there is0 smaller element.

**Example 2:**
Input: nums = [-1]
Output: [0]

**Example 3:**
Input: nums = [-1,-1]
Output: [0,0]

*/
function countSmaller(nums) {
  const result = [];

  // Create a copy of the input array with an additional index property
  const indexedNums = nums.map((num, index) => ({ num, index }));

  // Create an array to store the counts
  const counts = new Array(nums.length).fill(0);

  // Helper function to perform merge sort and count smaller numbers
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    const merged = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length || rightIndex < right.length) {
      if (
        rightIndex === right.length ||
        (leftIndex < left.length &&
          left[leftIndex].num <= right[rightIndex].num)
      ) {
        // Count the number of smaller elements on the right
        counts[left[leftIndex].index] += rightIndex;
        merged.push(left[leftIndex]);
        leftIndex++;
      } else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return merged;
  }

  mergeSort(indexedNums);

  // Extract the counts from the indexedNums array
  for (let i = 0; i < indexedNums.length; i++) {
    result[indexedNums[i].index] = counts[i];
  }

  return result;
}

// Example usage:
console.log(countSmaller([5, 2, 6, 1])); // Output: [2, 1, 1, 0]
console.log(countSmaller([-1])); // Output: [0]
console.log(countSmaller([-1, -1])); // Output: [0, 0]
