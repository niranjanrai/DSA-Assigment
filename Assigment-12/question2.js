/* 

 **Question 2**

Given a linked list of **N** nodes. The task is to check if the linked list has a loop. Linked list can contain self loop.

**Example 1:**

```
Input:
N = 3
value[] = {1,3,4}
x(position at which tail is connected) = 2
Output:True
Explanation:In above test case N = 3.
The linked list with nodes N = 3 is
given. Then value of x=2 is given which
means last node is connected with xth
node of linked list. Therefore, there
exists a loop.
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

  hasLoop() {
    let slowPtr = this.head;
    let fastPtr = this.head;

    while (fastPtr !== null && fastPtr.next !== null) {
      slowPtr = slowPtr.next;
      fastPtr = fastPtr.next.next;

      if (slowPtr === fastPtr) {
        // Loop detected
        return true;
      }
    }

    // No loop found
    return false;
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
linkedList.insert(3);
linkedList.insert(4);

// Create a loop by connecting the tail to the second node
linkedList.head.next.next.next = linkedList.head.next;

// Check if the linked list has a loop
const hasLoop = linkedList.hasLoop();

console.log(hasLoop); // Output: true
