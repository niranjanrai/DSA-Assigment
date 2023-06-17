/*


 **Question 1**

Given a linked list of **N** nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

**Example 1:**

Input:
N = 3
value[] = {1,3,4}
X = 2
Output:1
Explanation:The link list looks like
1 -> 3 -> 4
     ^    |
     |____|
A loop is present. If you remove it
successfully, the answer will be 1.

**Example 2:**
Input:
N = 4
value[] = {1,8,3,4}
X = 0
Output:1
Explanation:The Linked list does not
contains any loop.

**Example:3 **
Input:
N = 4
value[] = {1,2,3,4}
X = 1
Output:1
Explanation:The link list looks like
1 -> 2 -> 3 -> 4
^              |
|______________|
A loop is present.
If you remove it successfully,
the answer will be 1.

*/
class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

function detectAndRemoveLoop(head) {
  if (head === null || head.next === null) {
    return; // No loop exists
  }

  let slowPtr = head;
  let fastPtr = head;

  // Move the pointers to find the meeting point (if loop exists)
  while (fastPtr !== null && fastPtr.next !== null) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next.next;

    if (slowPtr === fastPtr) {
      break; // Meeting point found
    }
  }

  // If no loop exists, return
  if (slowPtr !== fastPtr) {
    return;
  }

  // Move slow pointer to the head and find the node where the loop starts (X)
  slowPtr = head;

  while (slowPtr.next !== fastPtr.next) {
    slowPtr = slowPtr.next;
    fastPtr = fastPtr.next;
  }

  // Unlink the last node to remove the loop
  fastPtr.next = null;
}

// Function to create a linked list
function createLinkedList(values) {
  let head = null;
  let tail = null;

  for (let i = 0; i < values.length; i++) {
    const newNode = new Node(values[i]);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.next = newNode;
      tail = newNode;
    }
  }

  return head;
}

// Test the implementation
const values = [1, 2, 3, 4];
const X = 1;

const head = createLinkedList(values);

// Connect the last node to create a loop (if X > 0)
if (X > 0) {
  let currentNode = head;
  let loopNode = null;
  let position = 1;

  while (currentNode.next !== null) {
    if (position === X) {
      loopNode = currentNode;
    }

    currentNode = currentNode.next;
    position++;
  }

  currentNode.next = loopNode;
}

detectAndRemoveLoop(head);

// Print the linked list after removing the loop
let current = head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}
