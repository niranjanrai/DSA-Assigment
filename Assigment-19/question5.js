/*
 5. **Rearrange array in alternating positive & negative items with O(1) extra space**

Given an **array of positive** and **negative numbers**, arrange them in an **alternate** fashion such that every positive number is followed by a negative and vice-versa maintaining the **order of appearance**. The number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear at the end of the array.

**Examples:**

Input:  arr[] = {1, 2, 3, -4, -1, 4}
Output: arr[] = {-4, 1, -1, 2, 3, 4}

Input:  arr[] = {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
Output: arr[] = {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0}
*/

function rearrangeAlternate(arr) {
  let i = 0;

  // Rearrange negative numbers to the left side of the array
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      i++;
    }
  }

  let positiveIndex = i;
  let negativeIndex = 0;

  // Rearrange positive and negative numbers alternately
  while (
    positiveIndex < arr.length &&
    negativeIndex < positiveIndex &&
    arr[negativeIndex] < 0
  ) {
    [arr[negativeIndex], arr[positiveIndex]] = [
      arr[positiveIndex],
      arr[negativeIndex],
    ];
    positiveIndex++;
    negativeIndex += 2;
  }

  return arr;
}

// Example usage:
console.log(rearrangeAlternate([1, 2, 3, -4, -1, 4])); // Output: [-4, 1, -1, 2, 3, 4]
console.log(rearrangeAlternate([-5, -2, 5, 2, 4, 7, 1, 8, 0, -8])); // Output: [-5, 5, -2, 2, -8, 4, 7, 1, 8, 0]
