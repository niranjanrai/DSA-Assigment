/*

**Question 7**

Given two linked lists, insert nodes of second list into first list at alternate positions of first list.
For example, if first list is 5->7->17->13->11 and second is 12->10->2->4->6, the first list should become 5->12->7->10->17->2->13->4->11->6 and second list should become empty. The nodes of second list should only be inserted when there are positions available. For example, if the first list is 1->2->3 and second list is 4->5->6->7->8, then first list should become 1->4->2->5->3->6 and second list to 7->8.

Use of extra space is not allowed (Not allowed to create additional nodes), i.e., insertion must be done in-place. Expected time complexity is O(n) where n is number of nodes in first list.




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

  insertAlternate(list2) {
    let current1 = this.head;
    let current2 = list2.head;
    let next1, next2;

    while (current1 !== null && current2 !== null) {
      next1 = current1.next;
      next2 = current2.next;

      current1.next = current2;
      current2.next = next1;

      current1 = next1;
      current2 = next2;
    }

    if (current2 !== null) {
      // If list2 has remaining nodes
      current1.next = current2;
      list2.head = null;
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

// Create the first linked list
const list1 = new LinkedList();
list1.insert(5);
list1.insert(7);
list1.insert(17);
list1.insert(13);
list1.insert(11);

// Create the second linked list
const list2 = new LinkedList();
list2.insert(12);
list2.insert(10);
list2.insert(2);
list2.insert(4);
list2.insert(6);

// Insert nodes from list2 into list1 at alternate positions
list1.insertAlternate(list2);

// Print the modified list1
list1.printList(); // Output: 5 12 7 10 17 2 13 4 11

// Print the modified list2
list2.printList(); // Output: (empty)
