/*
<>
💡 **Question 5**

Given two integer arrays `nums1` and `nums2`, return *an array of their intersection*. Each element in the result must be **unique** and you may return the result in **any order**.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]

```




*/
const intersection = (nums1, nums2) => {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);
  const result = [];

  // Iterate over the elements in set1
  for (const num of set1) {
    // If the element is present in set2, it is an intersection element
    if (set2.has(num)) {
      result.push(num);
    }
  }

  return result;
};

// Example usage:
console.log(intersection([1, 2, 2, 1], [2, 2])); // Output: [2]
