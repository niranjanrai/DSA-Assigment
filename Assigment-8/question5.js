/*


 **Question 5**

Given an array of characters chars, compress it using the following algorithm:

Begin with an empty string s. For each group of **consecutive repeating characters** in chars:

- If the group's length is 1, append the character to s.
- Otherwise, append the character followed by the group's length.

The compressed string s **should not be returned separately**, but instead, be stored **in the input character array chars**. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

After you are done **modifying the input array,** return *the new length of the array*.

You must write an algorithm that uses only constant extra space.

**Example 1:**

**Input:** chars = ["a","a","b","b","c","c","c"]

**Output:** Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

**Explanation:**

The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".




*/

const reverseStr = (s, k) => {
  const chars = s.split(""); // Convert the string to an array of characters

  for (let i = 0; i < chars.length; i += 2 * k) {
    let start = i; // Start index of the chunk
    let end = Math.min(i + k - 1, chars.length - 1); // End index of the chunk

    // Reverse the first k characters in the chunk
    while (start < end) {
      const temp = chars[start];
      chars[start] = chars[end];
      chars[end] = temp;
      start++;
      end--;
    }
  }

  return chars.join(""); // Convert the array back to a string
};

// Example usage:
const s = "abcdefg";
const k = 2;
console.log(reverseStr(s, k)); // Output: "bacdfeg"
