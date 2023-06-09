/*

💡 **Question 3**

Given two strings word1 and word2, return *the minimum number of **steps** required to make* word1 *and* word2 *the same*.

In one **step**, you can delete exactly one character in either string.

**Example 1:**

**Input:** word1 = "sea", word2 = "eat"

**Output:** 2

**Explanation:** You need one step to make "sea" to "ea" and another step to make "eat" to "ea".



*/
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  // Create a 2D table to store the minimum number of steps
  // dp[i][j] represents the minimum number of steps for word1[:i] and word2[:j]
  const dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  // Fill in the first row (deleting characters from word1)
  for (let i = 1; i <= m; i++) {
    dp[i][0] = dp[i - 1][0] + 1;
  }

  // Fill in the first column (deleting characters from word2)
  for (let j = 1; j <= n; j++) {
    dp[0][j] = dp[0][j - 1] + 1;
  }

  // Fill in the rest of the table
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1.charAt(i - 1) === word2.charAt(j - 1)) {
        // Characters are equal, no deletion needed
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        // Characters are different, consider deletion
        dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1);
      }
    }
  }

  // Return the minimum number of steps
  return dp[m][n];
}

// Example usage:
const word1 = "sea";
const word2 = "eat";
console.log(minDistance(word1, word2)); // Output: 2
