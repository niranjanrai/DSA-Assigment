/*

 **Question 1**

Given a singly linked list, delete **middle** of the linked list. For example, if given linked list is 1->2->**3**->4->5 then linked list should be modified to 1->2->4->5.If there are **even** nodes, then there would be **two middle** nodes, we need to delete the second middle element. For example, if given linked list is 1->2->3->4->5->6 then it should be modified to 1->2->3->5->6.If the input linked list is NULL or has 1 node, then it should return NULL

**Example 1:**

```
Input:
LinkedList: 1->2->3->4->5
Output:1 2 4 5

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

  deleteMiddle() {
    if (this.head === null || this.head.next === null) {
      // If the list is empty or has only one node, return null
      return null;
    }

    let slowPtr = this.head;
    let fastPtr = this.head;
    let prevPtr = null;

    // Move the fast pointer two nodes ahead and the slow pointer one node ahead
    while (fastPtr !== null && fastPtr.next !== null) {
      fastPtr = fastPtr.next.next;
      prevPtr = slowPtr;
      slowPtr = slowPtr.next;
    }

    // Delete the middle node(s)
    prevPtr.next = slowPtr.next;

    return this.head;
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

  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " ";
      current = current.next;
    }
    console.log(result.trim());
  }
}

// Create the linked list
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);

// Print the original list
console.log("Original List:");
linkedList.printList();

// Delete the middle node(s)
linkedList.deleteMiddle();

// Print the modified list
console.log("Modified List:");
linkedList.printList();
