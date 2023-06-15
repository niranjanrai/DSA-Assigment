/*
 **Question 5**

Given a linked list and a key to be deleted. Delete last occurrence of key from linked. The list may have duplicates.

**Examples**:
Input:   1->2->3->5->2->10, key = 2
Output:  1->2->3->5->10


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

function deleteLastOccurrence(list, key) {
  if (!list.head) {
    return list;
  }

  let lastOccurrence = null;
  let current = list.head;

  // Traverse the list to find the last occurrence of the key
  while (current) {
    if (current.data === key) {
      lastOccurrence = current;
    }
    current = current.next;
  }

  if (!lastOccurrence) {
    return list; // Key not found in the list
  }

  if (lastOccurrence === list.head) {
    // If the last occurrence is the head node, update the head
    list.head = lastOccurrence.next;
  } else {
    // Find the node before the last occurrence
    current = list.head;
    while (current.next !== lastOccurrence) {
      current = current.next;
    }

    // Update the links to delete the last occurrence
    current.next = lastOccurrence.next;
  }

  return list;
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(5);
list.append(2);
list.append(10);

const key = 2;

const updatedList = deleteLastOccurrence(list, key);

// Printing the updated list
let current = updatedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
