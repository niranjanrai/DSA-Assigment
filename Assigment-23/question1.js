/*
 Question-1:

Given preorder of a binary tree, calculate its **[depth(or height)](https://www.geeksforgeeks.org/write-a-c-program-to-find-the-maximum-depth-or-height-of-a-tree/)** [starting from depth 0]. The preorder is given as a string with two possible characters.

1. ‘l’ denotes the leaf
2. ‘n’ denotes internal node

The given tree can be seen as a full binary tree where every node has 0 or two children. The two children of a node can ‘n’ or ‘l’ or mix of both.

**Examples :**

Input  : nlnll
Output : 2



*/

function calculateDepth(preorder) {
  let depth = 0;
  let level = 0;

  for (let i = 0; i < preorder.length; i++) {
    if (preorder[i] === "n") {
      level++;
    } else if (preorder[i] === "l") {
      level--;
    }

    depth = Math.max(depth, level);
  }

  return depth;
}

// Example usage:
const preorder = "nlnll";
const depth = calculateDepth(preorder);
console.log("Depth of the binary tree:", depth);
