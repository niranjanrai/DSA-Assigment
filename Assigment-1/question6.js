function containsDuplicate(nums) {
  const set = new Set();

  for (let num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }

  return false;
}

const nums = [1, 2, 3, 1];
const result = containsDuplicate(nums);
console.log(result); // Output: true
