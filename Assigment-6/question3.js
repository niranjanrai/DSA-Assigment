/*



💡 **Question 3**


💡 **Question 3**

Given an array of integers arr, return *true if and only if it is a valid mountain array*.

Recall that arr is a mountain array if and only if:

- arr.length >= 3
- There exists some i with 0 < i < arr.length - 1 such that:
    - arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
    - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]





*/
function validMountainArray(arr) {
  if (arr.length < 3) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] < arr[left + 1]) {
      left++;
    } else if (arr[right] < arr[right - 1]) {
      right--;
    } else {
      break;
    }
  }

  return left === right && left !== 0 && right !== arr.length - 1;
}

const arr = [2, 1];

console.log(validMountainArray(arr)); // Output: false
