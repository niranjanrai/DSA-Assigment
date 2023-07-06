/**
 5. **Ugly Numbers**

An **ugly number** is a positive integer whose prime factors are limited to `2`, `3`, and `5`.

Given an integer `n`, return *the* `nth` ***ugly number***.

**Example 1:**
Input: n = 10
Output: 12
Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

**Example 2:**
Input: n = 1
Output: 1
Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

**Constraints:**

- `1 <= n <= 1690`

 */

function nthUglyNumber(n) {
  const ugly = [1];
  let p2 = 0,
    p3 = 0,
    p5 = 0;

  while (ugly.length < n) {
    const nextUgly = Math.min(ugly[p2] * 2, ugly[p3] * 3, ugly[p5] * 5);
    ugly.push(nextUgly);

    if (nextUgly === ugly[p2] * 2) p2++;
    if (nextUgly === ugly[p3] * 3) p3++;
    if (nextUgly === ugly[p5] * 5) p5++;
  }

  return ugly[n - 1];
}

let n = 10;
let result = nthUglyNumber(n);
console.log(result); // Output: 12

n = 1;
result = nthUglyNumber(n);
console.log(result); // Output: 1
