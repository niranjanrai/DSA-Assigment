/* 


 **Question 2**

A number **N** is represented in Linked List such that each digit corresponds to a node in linked list. You need to add 1 to it.

**Example 1:**
Input:
LinkedList: 4->5->6
Output:457

**Example 2:**
Input:
LinkedList: 1->2->3
Output:124
*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function addOne(head) {
  // Step 1: Reverse the linked list
  let current = head;
  let prev = null;
  let next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;

  // Step 2: Traverse the reversed linked list and add 1
  let carry = 1; // Initialize carry as 1 to add 1 to the number
  current = head;

  while (current !== null) {
    let sum = current.data + carry;
    carry = Math.floor(sum / 10);
    current.data = sum % 10;
    current = current.next;
  }

  // Step 3: Handle carry if present
  if (carry > 0) {
    let newNode = new Node(carry);
    let tail = head;

    while (tail.next !== null) {
      tail = tail.next;
    }

    tail.next = newNode;
  }

  // Step 4: Reverse the linked list again
  current = head;
  prev = null;
  next = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  head = prev;

  return head;
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

// Function to convert the linked list to a number
function linkedListToNumber(head) {
  let num = 0;
  let current = head;

  while (current !== null) {
    num = num * 10 + current.data;
    current = current.next;
  }

  return num;
}

// Function to convert a number to a linked list
function numberToLinkedList(num) {
  let digits = [];
  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num / 10);
  }

  return createLinkedList(digits.reverse());
}

// Test the implementation
const linkedList1 = createLinkedList([4, 5, 6]);
const linkedList2 = createLinkedList([1, 2, 3]);

const result1 = addOne(linkedList1);
const result2 = addOne(linkedList2);

console.log("Input: ", linkedListToNumber(linkedList1));
console.log("Output: ", linkedListToNumber(result1));
console.log("Input: ", linkedListToNumber(linkedList2));
console.log("Output: ", linkedListToNumber(result2));
