/*

 **Question 6**

Given two sorted linked lists consisting of **N** and **M** nodes respectively. The task is to merge both of the lists (in place) and return the head of the merged list.

**Examples:**
Input: a: 5->10->15, b: 2->3->20

Output: 2->3->5->10->15->20

Input: a: 1->1, b: 2->4

Output: 1->1->2->4


*/

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeSortedLists(a, b) {
  if (!a) {
    return b;
  }
  if (!b) {
    return a;
  }

  let result = null;
  let tail = null;

  // Initialize the result with the smaller head node
  if (a.data <= b.data) {
    result = a;
    a = a.next;
  } else {
    result = b;
    b = b.next;
  }
  tail = result;

  // Merge the lists by comparing nodes
  while (a && b) {
    if (a.data <= b.data) {
      tail.next = a;
      a = a.next;
    } else {
      tail.next = b;
      b = b.next;
    }
    tail = tail.next;
  }

  // Append the remaining nodes of the list
  if (a) {
    tail.next = a;
  } else if (b) {
    tail.next = b;
  }

  return result;
}

// Example usage:
const listA = new Node(5);
listA.next = new Node(10);
listA.next.next = new Node(15);

const listB = new Node(2);
listB.next = new Node(3);
listB.next.next = new Node(20);

const mergedList = mergeSortedLists(listA, listB);

// Printing the merged list
let current = mergedList;
while (current) {
  console.log(current.data);
  current = current.next;
}
