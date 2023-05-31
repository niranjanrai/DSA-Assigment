function twoSum(nums, target) {
  const complementMap = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (complement in complementMap) {
      return [complementMap[complement], i];
    }
    complementMap[num] = i;
  }
  return []; // No solution found
}

const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); // Output: [0, 1]
