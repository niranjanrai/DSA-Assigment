/*
 **Question 3**

Given a Linked List of size N, where every node represents a sub-linked-list and contains two pointers:(i) a **next** pointer to the next node,(ii) a **bottom** pointer to a linked list where this node is head.Each of the sub-linked-list is in sorted order.Flatten the Link List such that all the nodes appear in a single level while maintaining the sorted order. **Note:** The flattened list will be printed using the bottom pointer instead of next pointer.

**Example 1:**
Input:
5 -> 10 -> 19 -> 28
|     |     |     |
7     20    22   35
|           |     |
8          50    40
|                 |
30               45
Output: 5-> 7-> 8- > 10 -> 19-> 20->
22-> 28-> 30-> 35-> 40-> 45-> 50.
Explanation:
The resultant linked lists has every
node in a single level.(Note:| represents the bottom pointer.)

**Example 2:**
Input:
5 -> 10 -> 19 -> 28
|          |
7          22
|          |
8          50
|
30
Output: 5->7->8->10->19->22->28->30->50
Explanation:
The resultant linked lists has every
node in a single level.

(Note:| represents the bottom pointer.)
*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.bottom = null;
  }
}

function flattenLinkedList(head) {
  // Base case: If the head is null or the next pointer is null, return the head
  if (head === null || head.next === null) {
    return head;
  }

  // Recursively flatten the remaining linked list
  head.next = flattenLinkedList(head.next);

  // Merge the current head with the flattened next linked list
  head = merge(head, head.next);

  // Return the flattened linked list
  return head;
}

function merge(a, b) {
  // If the first linked list is empty, return the second linked list
  if (a === null) {
    return b;
  }

  // If the second linked list is empty, return the first linked list
  if (b === null) {
    return a;
  }

  let result;

  // Compare the data of the two linked lists
  if (a.data < b.data) {
    result = a;
    result.bottom = merge(a.bottom, b);
  } else {
    result = b;
    result.bottom = merge(a, b.bottom);
  }

  // Set the next pointer to null to avoid cycles
  result.next = null;

  return result;
}

// Function to create a linked list
function createLinkedList(data) {
  let head = null;
  let tail = null;

  for (let i = 0; i < data.length; i++) {
    const newNode = new Node(data[i]);

    if (head === null) {
      head = newNode;
      tail = newNode;
    } else {
      tail.bottom = newNode;
      tail = newNode;
    }
  }

  return head;
}

// Function to print the flattened linked list
function printFlattenedLinkedList(head) {
  let current = head;
  while (current !== null) {
    process.stdout.write(current.data + " -> ");
    current = current.bottom;
  }
  process.stdout.write("null\n");
}

// Test the implementation
const linkedList1 = createLinkedList([5, 10, 19, 28]);
linkedList1.bottom = createLinkedList([7, 20, 22, 35]);
linkedList1.bottom.bottom = createLinkedList([8, 50]);
linkedList1.bottom.bottom.bottom = createLinkedList([30]);

const linkedList2 = createLinkedList([5, 10, 19, 28]);
linkedList2.bottom = createLinkedList([7]);
linkedList2.bottom.bottom = createLinkedList([8]);
linkedList2.bottom.bottom.bottom = createLinkedList([30]);

console.log("Input:");
printFlattenedLinkedList(linkedList1);
console.log("Output:");
const result1 = flattenLinkedList(linkedList1);
printFlattenedLinkedList(result1);

console.log("Input:");
printFlattenedLinkedList(linkedList2);
console.log("Output:");
const result2 = flattenLinkedList(linkedList2);
printFlattenedLinkedList(result2);
