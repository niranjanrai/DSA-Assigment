/*

💡 **Question 1**

Given two strings s1 and s2, return *the lowest **ASCII** sum of deleted characters to make two strings equal*.

**Example 1:**

**Input:** s1 = "sea", s2 = "eat"

**Output:** 231

**Explanation:** Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.

Deleting "t" from "eat" adds 116 to the sum.

At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.



*/ function minimumDeleteSum(s1, s2) {
  // Create a 2D table to store the minimum ASCII sum
  // dp[i][j] represents the minimum ASCII sum for s1[:i] and s2[:j]
  const dp = new Array(s1.length + 1)
    .fill(null)
    .map(() => new Array(s2.length + 1).fill(0));

  // Calculate the first row (deleting characters from s1)
  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
  }

  // Calculate the first column (deleting characters from s2)
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
  }

  // Fill in the rest of the table
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      if (s1.charAt(i - 1) === s2.charAt(j - 1)) {
        // Characters are equal, no deletion needed
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Characters are different, consider deletion
        dp[i][j] = Math.min(
          dp[i - 1][j] + s1.charCodeAt(i - 1),
          dp[i][j - 1] + s2.charCodeAt(j - 1)
        );
      }
    }
  }

  // Return the minimum ASCII sum
  return dp[s1.length][s2.length];
}

// Example usage:
const s1 = "sea";
const s2 = "eat";
console.log(minimumDeleteSum(s1, s2)); // Output: 231
