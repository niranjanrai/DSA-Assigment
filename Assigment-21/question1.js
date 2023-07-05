/*
 Question-1

You are given a binary tree. The binary tree is represented using the TreeNode class. Each TreeNode has an integer value and left and right children, represented using the TreeNode class itself. Convert this binary tree into a binary search tree.

Input:

        10

       /   \

     2      7

   /   \

 8      4

Output:

        8

      /   \

    4     10

  /   \

2      7



*/
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function convertToBST(root) {
  // Step 1: Perform an in-order traversal to obtain sorted values
  const values = [];
  inorderTraversal(root, values);

  // Step 2: Sort the values in ascending order
  values.sort((a, b) => a - b);

  // Step 3: Replace node values with sorted values
  let index = 0;
  inorderReplace(root, values, index);

  return root;
}

// In-order traversal to obtain sorted values
function inorderTraversal(node, values) {
  if (node === null) return;

  inorderTraversal(node.left, values);
  values.push(node.val);
  inorderTraversal(node.right, values);
}

// In-order traversal to replace node values with sorted values
function inorderReplace(node, values, index) {
  if (node === null) return;

  inorderReplace(node.left, values, index);
  node.val = values[index];
  index++;
  inorderReplace(node.right, values, index);
}

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(8);
root.left.right = new TreeNode(4);

console.log("Original Binary Tree:");
console.log(root);

const converted = convertToBST(root);

console.log("Converted Binary Search Tree:");
console.log(converted);
