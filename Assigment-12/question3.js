/*

**Question 3**

Given a linked list consisting of **L** nodes and given a number **N**. The task is to find the **N**th node from the end of the linked list.

**Example 1:**

```
Input:
N = 2
LinkedList: 1->2->3->4->5->6->7->8->9
Output:8
Explanation:In the first example, there
are 9 nodes in linked list and we need
to find 2nd node from end. 2nd node
from end is 8.

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

  getNthFromEnd(n) {
    if (n <= 0 || this.head === null) {
      // Invalid input or empty list
      return null;
    }

    let slowPtr = this.head;
    let fastPtr = this.head;

    // Move the fast pointer n nodes ahead of the slow pointer
    for (let i = 1; i <= n; i++) {
      if (fastPtr === null) {
        // N is greater than the number of nodes in the list
        return null;
      }
      fastPtr = fastPtr.next;
    }

    // Move both pointers until the fast pointer reaches the end
    while (fastPtr !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next;
    }

    return slowPtr.data;
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
}

// Create the linked list
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);
linkedList.insert(6);
linkedList.insert(7);
linkedList.insert(8);
linkedList.insert(9);

// Find the Nth node from the end
const N = 2;
const nthFromEnd = linkedList.getNthFromEnd(N);

console.log(nthFromEnd); // Output: 8
