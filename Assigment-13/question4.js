/*

 **Question 4**

Given a linked list, write a function to reverse every alternate k nodes (where k is an input to the function) in an efficient way. Give the complexity of your algorithm.

**Example:**

Inputs:   1->2->3->4->5->6->7->8->9->NULL and k = 3
Output:   3->2->1->4->5->6->9->8->7->NULL.

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

  append(data) {
    const newNode = new Node(data);

    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }
}

function reverseAlternateKNodes(list, k) {
  if (!list.head || k <= 1) {
    return list;
  }

  let current = list.head;
  let prev = null;
  let next = null;
  let count = 0;

  // Reverse the first k nodes
  while (current && count < k) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
    count++;
  }

  // Connect the reversed sublist with the remaining list
  if (next) {
    list.head.next = next;
  }

  // Skip the next k nodes
  count = 0;
  while (current && count < k - 1) {
    current = current.next;
    count++;
  }

  // Recursively reverse the next alternate k nodes
  if (current) {
    current.next = reverseAlternateKNodes(new LinkedList(current.next), k);
  }

  return new LinkedList(prev);
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);
list.append(9);

const k = 3;

const reversedList = reverseAlternateKNodes(list, k);

// Printing the reversed list
let current = reversedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
