/*

 Question-3

Given an array of size n. The problem is to check whether the given array can represent the level order traversal of a Binary Search Tree or not.

Examples:

Input1 : arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output1 : Yes

For the given arr[], the Binary Search Tree is:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10

Input2 : arr[] = {11, 6, 13, 5, 12, 10}

Output2 : No

The given arr[] does not represent the level order traversal of a BST.



*/
function canRepresentBST(levelOrder) {
  const n = levelOrder.length;

  // Helper function to check if a given subarray represents a valid BST
  function isBSTUtil(arr, start, end) {
    if (start >= end) {
      return true;
    }

    const root = arr[start];
    let i;

    // Find the first element greater than the root (right subtree starts)
    for (i = start + 1; i <= end; i++) {
      if (arr[i] > root) {
        break;
      }
    }

    // Check if all elements after the above found element are greater than the root
    for (let j = i; j <= end; j++) {
      if (arr[j] < root) {
        return false;
      }
    }

    // Recursively check if left and right subtrees are BSTs
    const leftBST = isBSTUtil(arr, start + 1, i - 1);
    const rightBST = isBSTUtil(arr, i, end);

    return leftBST && rightBST;
  }

  return isBSTUtil(levelOrder, 0, n - 1);
}

// Example usage:
const arr1 = [7, 4, 12, 3, 6, 8, 1, 5, 10];
console.log(canRepresentBST(arr1)); // Output: true

const arr2 = [11, 6, 13, 5, 12, 10];
console.log(canRepresentBST(arr2)); // Output: false
