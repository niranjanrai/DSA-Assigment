/*
function nextPermutation(nums) {
  Find the first pair of adjacent elements where nums[i] < nums[i+1]
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
     Find the smallest element in the subarray to the right of nums[i] that is greater than nums[i]
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
     Swap nums[i] with nums[j]
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  Reverse the subarray to the right of index i
  let left = i + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

 Example usage:
const nums = [1, 2, 3];
nextPermutation(nums);
console.log(nums); // Output: [1, 3, 2]
*/

function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid; // Target found, return the index
    } else if (nums[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  // The target was not found, return the index where it would be inserted
  return left;
}

// Example usage:
const nums = [1, 3, 5, 6];
const target = 5;
const result = searchInsert(nums, target);
console.log(result); // Output: 2
