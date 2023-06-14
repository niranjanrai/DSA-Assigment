/*

 **Question 5**

Given a linked list of **N** nodes such that it may contain a loop.

A loop here means that the last node of the link list is connected to the node at position X(1-based index). If the link list does not have any loop, X=0.

Remove the loop from the linked list, if it is present, i.e. unlink the last node which is forming the loop.

**Example 1:**

```
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

```

**Example 2:**

```
Input:
N = 4
value[] = {1,8,3,4}
X = 0
Output:1
Explanation:The Linked list does not
contains any loop.
```

*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  detectAndRemoveLoop() {
    let slowPtr = this.head;
    let fastPtr = this.head;

    // Find the meeting point of the slow and fast pointers
    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;

      if (slowPtr === fastPtr) {
        // Loop detected
        break;
      }
    }

    if (slowPtr === fastPtr) {
      // Loop exists, remove the loop
      slowPtr = this.head;
      while (slowPtr.next !== fastPtr.next) {
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
      }
      fastPtr.next = null;
    }
  }

  insert(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  createLoop(x) {
    if (x === 0) {
      return;
    }

    let count = 1;
    let currentNode = this.head;

    while (count < x && currentNode !== null) {
      currentNode = currentNode.next;
      count++;
    }

    let loopNode = currentNode;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    currentNode.next = loopNode;
  }
}

// Create the linked list
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(3);
linkedList.insert(4);

// Create a loop by connecting the tail to the second node
linkedList.createLoop(2);

// Remove the loop from the linked list
linkedList.detectAndRemoveLoop();

// Print the modified linked list
let current = linkedList.head;
while (current !== null) {
  console.log(current.data);
  current = current.next;
}

console.log(findDuplicate([1, 3, 4, 2, 2])); // Output: 2
