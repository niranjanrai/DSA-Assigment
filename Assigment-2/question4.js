/* Question 4
You have a long flowerbed in which some of the plots are planted, and some are not.
However, flowers cannot be planted in adjacent plots.
Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return true if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule and false otherwise.

Example 1:
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true

*/

function canPlaceFlowers(flowerbed, n) {
  const len = flowerbed.length;
  let count = 0;

  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 0) {
      if (
        (i === 0 || flowerbed[i - 1] === 0) &&
        (i === len - 1 || flowerbed[i + 1] === 0)
      ) {
        // Empty plot with no adjacent flowers
        flowerbed[i] = 1; // Plant a flower
        count++; // Increment count
      }
    }
  }

  return count >= n; // Return true if count is greater than or equal to n
}

const flowerbed = [1, 0, 0, 0, 1];
const n = 1;
console.log(canPlaceFlowers(flowerbed, n));
