/* 

 Question-2:

Given a Binary Search Tree with all unique values and two keys. Find the distance between two nodes in BST. The given keys always exist in BST.

Example:

Consider the following BST:
**Input-1:**

n = 9

values = [8, 3, 1, 6, 4, 7, 10, 14,13]

node-1 = 6

node-2 = 14

**Output-1:**

The distance between the two keys = 4

**Input-2:**

n = 9

values = [8, 3, 1, 6, 4, 7, 10, 14,13]

node-1 = 3

node-2 = 4

**Output-2:**

The distance between the two keys = 2

*/
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function findDistance(root, node1, node2) {
  // Step 1: Find the Lowest Common Ancestor (LCA)
  const lca = findLCA(root, node1, node2);

  // Step 2: Calculate the distance between the LCA and both nodes
  const distance1 = findDistanceToNode(lca, node1, 0);
  const distance2 = findDistanceToNode(lca, node2, 0);

  // Step 3: Sum the distances to get the total distance between the two nodes
  const totalDistance = distance1 + distance2;

  return totalDistance;
}

// Step 1: Find the Lowest Common Ancestor (LCA)
function findLCA(root, node1, node2) {
  if (root === null || root.val === node1 || root.val === node2) {
    return root;
  }

  if (
    (root.val > node1 && root.val < node2) ||
    (root.val < node1 && root.val > node2)
  ) {
    return root;
  }

  if (root.val > node1 && root.val > node2) {
    return findLCA(root.left, node1, node2);
  }

  if (root.val < node1 && root.val < node2) {
    return findLCA(root.right, node1, node2);
  }
}

// Step 2: Calculate the distance between the LCA and a given node
function findDistanceToNode(node, target, distance) {
  if (node === null) {
    return 0;
  }

  if (node.val === target) {
    return distance;
  }

  if (target < node.val) {
    return findDistanceToNode(node.left, target, distance + 1);
  }

  if (target > node.val) {
    return findDistanceToNode(node.right, target, distance + 1);
  }
}

// Example usage:
const root = new TreeNode(8);
root.left = new TreeNode(3);
root.right = new TreeNode(10);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(6);
root.left.right.left = new TreeNode(4);
root.left.right.right = new TreeNode(7);
root.right.right = new TreeNode(14);
root.right.right.left = new TreeNode(13);

console.log("Binary Search Tree:");
console.log(root);

const node1 = 6;
const node2 = 14;
const distance = findDistance(root, node1, node2);

console.log(
  `The distance between node ${node1} and node ${node2} is ${distance}`
);
