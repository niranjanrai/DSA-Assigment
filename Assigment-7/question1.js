/*

 **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true


*/

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) {
    return false; // If the lengths are different, they cannot be isomorphic
  }

  const mapST = new Map(); // Map to store character mappings from s to t
  const mapTS = new Map(); // Map to store character mappings from t to s

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapST.has(charS) && mapST.get(charS) !== charT) {
      return false; // If a character in s already has a different mapping in t, they are not isomorphic
    }

    if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
      return false; // If a character in t already has a different mapping in s, they are not isomorphic
    }

    mapST.set(charS, charT); // Store the mapping from s to t
    mapTS.set(charT, charS); // Store the mapping from t to s
  }

  return true; // All characters have valid mappings, so s and t are isomorphic
};

// Example usage:
const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t)); // Output: true
