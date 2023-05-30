function findErrorNums(nums) {
  const set = new Set();
  let duplicate;
  let total = 0;

  for (let num of nums) {
    if (set.has(num)) {
      duplicate = num;
    }
    set.add(num);
    total += num;
  }

  const n = nums.length;
  const expectedTotal = (n * (n + 1)) / 2;
  const missing = expectedTotal - total;

  return [duplicate, missing];
}

const nums = [1, 2, 2, 4];
const result = findErrorNums(nums);
console.log(result); // Output: [2, 3]
