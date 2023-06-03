/* 
<aside>
💡 **Question 2**

Given two **0-indexed** integer arrays nums1 and nums2, return *a list* answer *of size* 2 *where:*

- answer[0] *is a list of all **distinct** integers in* nums1 *which are **not** present in* nums2*.*
- answer[1] *is a list of all **distinct** integers in* nums2 *which are **not** present in* nums1.

**Note** that the integers in the lists may be returned in **any** order.

**Example 1:**

**Input:** nums1 = [1,2,3], nums2 = [2,4,6]

**Output:** [[1,3],[4,6]]

**Explanation:**

For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].

For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].

</aside>

*/

function findDisjointIntegers(nums1, nums2) {
  const distinctNums1 = new Set(nums1);
  const distinctNums2 = new Set(nums2);

  const result = [
    Array.from(distinctNums1).filter((num) => !distinctNums2.has(num)),
    Array.from(distinctNums2).filter((num) => !distinctNums1.has(num)),
  ];

  return result;
}

// Example usage
const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];

const disjointIntegers = findDisjointIntegers(nums1, nums2);
console.log(disjointIntegers); // Output: [[1, 3], [4, 6]]
