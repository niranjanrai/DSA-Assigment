/* 

 Question-3:

Given a binary tree, print all its root-to-leaf paths without using recursion. For example, consider the following Binary Tree.

Input:

        6
     /    \
    3      5
  /   \     \
 2     5     4
     /   \
    7     4

Output:

There are 4 leaves, hence 4 root to leaf paths -
  6->3->2
  6->3->5->7
  6->3->5->4
  6->5>4



*/
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function printRootToLeafPaths(root) {
  if (root === null) {
    return;
  }

  const nodeStack = [];
  const pathStack = [];

  // Push the root node and its value to the stacks
  nodeStack.push(root);
  pathStack.push(String(root.val));

  while (nodeStack.length > 0) {
    const currentNode = nodeStack.pop();
    const currentPath = pathStack.pop();

    // If the current node is a leaf node, print the path
    if (currentNode.left === null && currentNode.right === null) {
      console.log(currentPath);
    }

    // Traverse the left subtree
    if (currentNode.left !== null) {
      nodeStack.push(currentNode.left);
      pathStack.push(currentPath + "->" + String(currentNode.left.val));
    }

    // Traverse the right subtree
    if (currentNode.right !== null) {
      nodeStack.push(currentNode.right);
      pathStack.push(currentPath + "->" + String(currentNode.right.val));
    }
  }
}

// Example usage:
const root = new TreeNode(6);
root.left = new TreeNode(3);
root.right = new TreeNode(5);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(4);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);

console.log("Binary Tree:");
console.log(root);

console.log("Root-to-Leaf Paths:");
printRootToLeafPaths(root);
