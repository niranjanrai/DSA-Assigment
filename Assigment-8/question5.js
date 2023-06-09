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

function compress(chars) {
  let compressedIndex = 0; // Pointer for the position to store compressed characters
  let count = 1; // Counter for consecutive repeating characters

  for (let i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) {
      // If the current character is the same as the previous one, increment the counter
      count++;
    } else {
      // Otherwise, we have encountered a new character or reached the end of the array
      chars[compressedIndex] = chars[i - 1]; // Store the current character

      if (count > 1) {
        // If the count is greater than 1, we need to append the count to the compressed string
        const countString = count.toString();

        for (let j = 0; j < countString.length; j++) {
          chars[++compressedIndex] = countString[j]; // Store each digit of the count
        }
      }

      compressedIndex++; // Move to the next position for storing the next compressed character
      count = 1; // Reset the counter for the new character
    }
  }

  return compressedIndex; // Return the new length of the array
}

// Example usage:
const chars = ["a", "a", "b", "b", "c", "c", "c"];
console.log(compress(chars)); // Output: 6
console.log(chars.slice(0, 6)); // Output: ["a", "2", "b", "2", "c", "3"]
