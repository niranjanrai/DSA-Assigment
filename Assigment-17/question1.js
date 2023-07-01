/*

 **Question 1**

Given a string `s`, *find the first non-repeating character in it and return its index*. If it does not exist, return `-1`.

**Example 1:**
Input: s = "leetcode"
Output: 0

**Example 2:**
Input: s = "loveleetcode"
Output: 2

**Example 3:**
Input: s = "aabb"
Output: -1
*/
function firstUniqChar(s) {
  const charCount = {};

  // Count the occurrence of each character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the index of the first non-repeating character
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (charCount[char] === 1) {
      return i;
    }
  }

  // No non-repeating character found
  return -1;
}

// Example usage:
console.log(firstUniqChar("leetcode")); // Output: 0
console.log(firstUniqChar("loveleetcode")); // Output: 2
console.log(firstUniqChar("aabb")); // Output: -1
