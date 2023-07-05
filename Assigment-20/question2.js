/* 

 Question-2

Construct the BST (Binary Search Tree) from its given level order traversal.

Example:

Input: arr[] = {7, 4, 12, 3, 6, 8, 1, 5, 10}

Output: BST:

            7

         /    \

       4     12

     /  \     /

    3   6  8

   /    /     \

 1    5      10

*/

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function constructBST(levelOrder) {
  if (levelOrder.length === 0) {
    return null;
  }

  const root = new TreeNode(levelOrder[0]);
  const queue = [root];
  let i = 1;

  while (i < levelOrder.length) {
    const current = queue.shift();

    if (levelOrder[i] < current.val) {
      current.left = new TreeNode(levelOrder[i]);
      queue.push(current.left);
      i++;
    }

    if (i < levelOrder.length && levelOrder[i] > current.val) {
      current.right = new TreeNode(levelOrder[i]);
      queue.push(current.right);
      i++;
    }
  }

  return root;
}

// Example usage:
const levelOrder = [7, 4, 12, 3, 6, 8, 1, 5, 10];
const root = constructBST(levelOrder);

// Function to print the BST in in-order traversal
function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  inOrderTraversal(node.left);
  console.log(node.val);
  inOrderTraversal(node.right);
}

// Print the BST in in-order traversal
inOrderTraversal(root);
