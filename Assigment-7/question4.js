/*

 **Question 4**

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

**Example 1:**

**Input:** s = "Let's take LeetCode contest"

**Output:** "s'teL ekat edoCteeL tsetnoc"


*/
const reverseWords = (s) => {
  const words = s.split(" ");

  // Reverse each word in the array
  const reversedWords = words.map((word) => {
    return word.split("").reverse().join("");
  });

  // Join the reversed words back into a sentence
  const reversedSentence = reversedWords.join(" ");

  return reversedSentence;
};

// Example usage:
const s = "Let's take LeetCode contest";
console.log(reverseWords(s)); // Output: "s'teL ekat edoCteeL tsetnoc"
