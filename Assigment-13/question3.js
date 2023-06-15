/*

 **Question 3**

Given a linked list of size **N**. The task is to reverse every **k** nodes (where k is an input to the function) in the linked list. If the number of nodes is not a multiple of *k* then left-out nodes, in the end, should be considered as a group and must be reversed (See Example 2 for clarification).

Example: 
Input:
LinkedList: 1->2->2->4->5->6->7->8
K = 4
Output:4 2 2 1 8 7 6 5
Explanation:
The first 4 elements 1,2,2,4 are reversed first
and then the next 4 elements 5,6,7,8. Hence, the
resultant linked list is 4->2->2->1->8->7->6->5.

Example : 
Input:
LinkedList: 1->2->3->4->5
K = 3
Output:3 2 1 5 4
Explanation:
The first 3 elements are 1,2,3 are reversed
first and then elements 4,5 are reversed.Hence,
the resultant linked list is 3->2->1->5->4. 

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

function reverseKNodes(list, k) {
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
    list.head.next = reverseKNodes(new LinkedList(next), k).head;
  }

  return new LinkedList(prev);
}

// Example usage:
const list = new LinkedList();
list.append(1);
list.append(2);
list.append(2);
list.append(4);
list.append(5);
list.append(6);
list.append(7);
list.append(8);

const k = 4;

const reversedList = reverseKNodes(list, k);

// Printing the reversed list
let current = reversedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
