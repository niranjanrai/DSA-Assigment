/*
 **Question 5**

We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.





*/

function countSubstrings(S) {
  let count = 0;

  for (let i = 0; i < S.length; i++) {
    for (let j = i; j < S.length; j++) {
      if (S[i] === S[j]) {
        count++;
      }
    }
  }

  return count;
}

console.log(countSubstrings("abc")); // Output: 3
console.log(countSubstrings("aab")); // Output: 4
