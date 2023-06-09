/* 

💡 **Question 2**

Given a string s containing only three types of characters: '(', ')' and '*', return true *if* s *is **valid***.

The following rules define a **valid** string:

- Any left parenthesis '(' must have a corresponding right parenthesis ')'.
- Any right parenthesis ')' must have a corresponding left parenthesis '('.
- Left parenthesis '(' must go before the corresponding right parenthesis ')'.
- '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

**Example 1:**

**Input:** s = "()"

**Output:**

true


*/
function isValid(s) {
  const stack = [];

  // Iterate through each character in the string
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);

    if (char === "(" || char === "*") {
      // If the character is '(' or '*', push it onto the stack
      stack.push(char);
    } else if (char === ")") {
      // If the character is ')', try to match it with a '('
      if (
        stack.length > 0 &&
        (stack[stack.length - 1] === "(" || stack[stack.length - 1] === "*")
      ) {
        // If a '(' or '*' is found, pop it from the stack
        stack.pop();
      } else if (stack.length > 0 && stack[stack.length - 1] === ")") {
        // If a ')' is found, it cannot be matched with a '(' or '*', so the string is invalid
        return false;
      } else {
        // If the stack is empty, there is no '(' to match the ')', so the string is invalid
        return false;
      }
    }
  }

  // After iterating through all characters, check the remaining characters in the stack
  let openParenCount = 0; // Count of remaining '(' characters in the stack

  while (stack.length > 0) {
    const top = stack.pop();

    if (top === "(") {
      // Increment the count for '(' characters
      openParenCount++;
    } else if (top === "*") {
      // If '*' is found, it can be treated as an empty string, so decrement the count for '(' characters
      openParenCount--;
    } else {
      // If any other character is found, it cannot be matched with a ')', so the string is invalid
      return false;
    }

    // If the count of '(' characters becomes negative, there are more ')' characters than '(' characters, so the string is invalid
    if (openParenCount < 0) {
      return false;
    }
  }

  // If the stack is empty and all remaining '(' characters are matched, the string is valid
  return true;
}

// Example usage:
const s = "()";
console.log(isValid(s)); // Output: true
