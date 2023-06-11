/*

 **Question 3**

****Given a set represented as a string, write a recursive code to print all subsets of it. The subsets can be printed in any order.

**Example 1:**

Input :  set = “abc”

Output : { “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”}

**Example 2:**

Input : set = “abcd”

Output : { “”, “a” ,”ab” ,”abc” ,”abcd”, “abd” ,”ac” ,”acd”, “ad” ,”b”, “bc” ,”bcd” ,”bd” ,”c” ,”cd” ,”d” }


*/
function generateSubsets(set, index = 0, currentSubset = "", subsets = []) {
  if (index === set.length) {
    subsets.push(currentSubset);
    return;
  }

  generateSubsets(set, index + 1, currentSubset, subsets);
  generateSubsets(set, index + 1, currentSubset + set[index], subsets);

  return subsets;
}

console.log(generateSubsets("abc")); // Output: ["", "c", "b", "bc", "a", "ac", "ab", "abc"]
console.log(generateSubsets("abcd")); // Output: ["", "d", "c", "cd", "b", "bd", "bc", "bcd", "a", "ad", "ac", "acd", "ab", "abd", "abc", "abcd"]
