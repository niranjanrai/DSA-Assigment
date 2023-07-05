/*

 Question-1

Given a binary tree, your task is to find subtree with maximum sum in tree.

Examples:

Input1 :       

       1

     /   \

   2      3

  / \    / \

4   5  6   7

Output1 : 28

As all the tree elements are positive, the largest subtree sum is equal to sum of all tree elements.

Input2 :

       1

     /    \

  -2      3

  / \    /  \

4   5  -6   2

Output2 : 7

Subtree with largest sum is :

 -2

 / \

4   5

Also, entire tree sum is also 7.


*/
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function maxSubtreeSum(root) {
  let maxSum = -Infinity;

  function subtreeSum(node) {
    if (node === null) {
      return 0;
    }

    const leftSum = subtreeSum(node.left); // Recursively calculate the sum of the left subtree
    const rightSum = subtreeSum(node.right); // Recursively calculate the sum of the right subtree

    // Calculate the sum of the current subtree by adding the node's value, left subtree sum, and right subtree sum
    const currentSum = node.val + leftSum + rightSum;

    // Update the maximum sum if the current subtree sum is greater
    maxSum = Math.max(maxSum, currentSum);

    // Return the sum of the current subtree to be used by its parent
    return currentSum;
  }

  subtreeSum(root); // Start the recursive traversal from the root node

  return maxSum;
}

// Example usage:
// Create the binary tree
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

// Find the subtree with the maximum sum
console.log(maxSubtreeSum(root)); // Output: 28
