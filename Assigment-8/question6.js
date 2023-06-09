/*

💡 **Question 6**

Given two strings s and p, return *an array of all the start indices of* p*'s anagrams in* s. You may return the answer in **any order**.

An **Anagram** is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

**Input:** s = "cbaebabacd", p = "abc"

**Output:** [0,6]

**Explanation:**

The substring with start index = 0 is "cba", which is an anagram of "abc".

The substring with start index = 6 is "bac", which is an anagram of "abc".






*/
function findAnagrams(s, p) {
  const result = [];
  const pMap = new Map();

  // Create a frequency map for string p
  for (let char of p) {
    pMap.set(char, pMap.get(char) + 1 || 1);
  }

  let left = 0; // Left pointer of the sliding window
  let right = 0; // Right pointer of the sliding window
  let count = p.length; // Number of characters remaining to be matched

  while (right < s.length) {
    // If the current character exists in the frequency map, decrement the count
    if (pMap.has(s.charAt(right)) && pMap.get(s.charAt(right)) > 0) {
      count--;
    }

    // Update the frequency map and move the right pointer
    pMap.set(s.charAt(right), pMap.get(s.charAt(right)) - 1);
    right++;

    // If all characters are matched, add the left pointer to the result
    if (count === 0) {
      result.push(left);
    }

    // If the window size is equal to the length of p, move the left pointer
    if (right - left === p.length) {
      // If the left character exists in the frequency map, increment the count
      if (pMap.has(s.charAt(left)) && pMap.get(s.charAt(left)) >= 0) {
        count++;
      }

      // Update the frequency map and move the left pointer
      pMap.set(s.charAt(left), pMap.get(s.charAt(left)) + 1);
      left++;
    }
  }

  return result;
}

// Example usage:
const s = "cbaebabacd";
const p = "abc";
console.log(findAnagrams(s, p)); // Output: [0, 6]
