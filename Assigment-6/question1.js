/*


💡 **Question 1**

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

- s[i] == 'I' if perm[i] < perm[i + 1], and
- s[i] == 'D' if perm[i] > perm[i + 1].

Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return **any of them**.

**Example 1:**

**Input:** s = "IDID"

**Output:**

[0,4,1,3,2]



*/

function diStringMatch(s) {
  const n = s.length;
  let low = 0;
  let high = n;
  const result = [];

  for (let i = 0; i <= n; i++) {
    if (s[i] === "I") {
      result.push(low);
      low++;
    } else if (s[i] === "D") {
      result.push(high);
      high--;
    }
  }

  result.push(low); // Add the last remaining element

  return result;
}

// Test Case
const s = "IDID";
const permutation = diStringMatch(s);
console.log(permutation); // Output: [0, 4, 1, 3, 2]
