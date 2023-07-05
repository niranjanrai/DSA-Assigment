/*
 Question-1:

Given a Binary Tree (Bt), convert it to a Doubly Linked List(DLL). The left and right pointers in nodes are to be used as previous and next pointers respectively in converted DLL. The order of nodes in DLL must be the same as in Inorder for the given Binary Tree. The first node of Inorder traversal (leftmost node in BT) must be the head node of the DLL.


*/
class TreeNode {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

function convertToDLL(root) {
  // Initialize the previous node
  let prev = null;

  // Convert BT to DLL using Inorder traversal
  function inorderTraversal(node) {
    if (node === null) {
      return;
    }

    // Recursively traverse the left subtree
    inorderTraversal(node.left);

    // Update the pointers
    node.left = prev;
    if (prev !== null) {
      prev.right = node;
    }
    prev = node;

    // Recursively traverse the right subtree
    inorderTraversal(node.right);
  }

  // Start the Inorder traversal from the root
  inorderTraversal(root);

  // Find the head of the DLL (leftmost node in BT)
  let head = root;
  while (head !== null && head.left !== null) {
    head = head.left;
  }

  return head;
}

// Example usage:
const root = new TreeNode(10);
root.left = new TreeNode(8);
root.right = new TreeNode(12);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(9);
root.right.left = new TreeNode(11);
root.right.right = new TreeNode(14);

console.log("Binary Tree:");
console.log(root);

const head = convertToDLL(root);

console.log("Doubly Linked List (DLL):");
let current = head;
while (current !== null) {
  console.log(current.val);
  current = current.right;
}
