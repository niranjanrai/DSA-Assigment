/*

You need to construct a binary tree from a string consisting of parenthesis and integers.

The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure.
You always start to construct the **left** child node of the parent first if it exists.
**Input:** s = "4(2(3)(1))(6(5))"

**Output:** [4,2,6,3,1,5]

*/
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function constructBinaryTree(s) {
  // Helper function to parse the integer at the current position in the string
  function parseIntFromString(str, start) {
    let num = 0;
    let sign = 1;
    let i = start;

    if (str.charAt(i) === "-") {
      sign = -1;
      i++;
    }

    while (i < str.length && !isNaN(parseInt(str.charAt(i)))) {
      num = num * 10 + parseInt(str.charAt(i));
      i++;
    }

    return num * sign;
  }

  // Helper function to construct the binary tree recursively
  function buildTree(s, start) {
    if (start >= s.length || s.charAt(start) === ")") {
      return null;
    }

    // Parse the integer value
    const value = parseIntFromString(s, start);

    const root = new TreeNode(value);
    let index = start + value.toString().length;

    if (index < s.length && s.charAt(index) === "(") {
      // Construct the left child node
      root.left = buildTree(s, index + 1);
    }

    index++;

    if (index < s.length && s.charAt(index) === "(") {
      // Construct the right child node
      root.right = buildTree(s, index + 1);
    }

    return root;
  }

  const root = buildTree(s, 0);

  // Perform pre-order traversal to get the binary tree as an array
  function preorderTraversal(node, result) {
    if (node === null) {
      return;
    }

    result.push(node.val);
    preorderTraversal(node.left, result);
    preorderTraversal(node.right, result);
  }

  const result = [];
  preorderTraversal(root, result);

  return result;
}

// Example usage:
const s = "4(2(3)(1))(6(5))";
console.log(constructBinaryTree(s)); // Output: [4, 2, 3, 1, 6, 5]
