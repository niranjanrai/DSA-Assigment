/* 


 **Question 2**

You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:

- Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
- Repeat the previous step again, but this time from right to left, remove the rightmost number and every other number from the remaining numbers.
- Keep repeating the steps again, alternating left to right and right to left, until a single number remains.

Given the integer `n`, return *the last number that remains in* `arr`.

**Example 1:**

```
Input: n = 9
Output: 6
Explanation:
arr = [1, 2,3, 4,5, 6,7, 8,9]
arr = [2,4, 6,8]
arr = [2, 6]
arr = [6]

```

*/

function lastRemaining(n) {
  let leftToRight = true; // Flag to indicate the direction of iteration
  let remaining = n; // Number of remaining elements
  let step = 1; // Step size for each iteration
  let head = 1; // The current head value

  while (remaining > 1) {
    if (leftToRight || remaining % 2 === 1) {
      // If iterating from left to right or there's an odd number of elements remaining
      head += step;
    }

    remaining = Math.floor(remaining / 2); // Reduce the number of remaining elements
    step *= 2; // Double the step size
    leftToRight = !leftToRight; // Toggle the direction
  }

  return head;
}

console.log(lastRemaining(9)); // Output: 6
