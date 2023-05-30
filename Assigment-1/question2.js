function removeElement(nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

const nums = [3, 2, 2, 3];
const val = 3;
const result = removeElement(nums, val);
console.log(result); // Output: 2
console.log(nums); // Output: [2, 2, ...]
