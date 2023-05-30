function moveZeroes(nums) {
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    if (nums[right] !== 0) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }

  for (let i = left; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result); // Output: [1, 3, 12, 0, 0]
