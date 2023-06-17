/*


 **Question 4**

You are given a special linked list with **N** nodes where each node has a next pointer pointing to its next node. You are also given **M** random pointers, where you will be given **M** number of pairs denoting two nodes **a** and **b**  **i.e. a->arb = b** (arb is pointer to random node)**.**

Construct a copy of the given list. The copy should consist of exactly **N** new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

For example, if there are two nodes **X** and **Y** in the original list, where **X.arb** **-->** **Y**, then for the corresponding two nodes **x** and **y** in the copied list, **x.arb --> y.**

Return the head of the copied linked list.

**Note** :- The diagram isn't part of any example, it just depicts an example of how the linked list may look like.

**Example 1:**
Input:
N = 4, M = 2
value = {1,2,3,4}
pairs = {{1,2},{2,4}}
Output:1
Explanation:In this test case, there
are 4 nodes in linked list.  Among these
4 nodes,  2 nodes have arbitrary pointer
set, rest two nodes have arbitrary pointer
as NULL. Second line tells us the value
of four nodes. The third line gives the
information about arbitrary pointers.
The first node arbitrary pointer is set to
node 2.  The second node arbitrary pointer
is set to node 4.

Example 2:
Input:
N = 4, M = 2
value[] = {1,3,5,9}
pairs[] = {{1,1},{3,4}}
Output:1
Explanation:In the given testcase ,
applying the method as stated in the
above example, the output will be 1.
```

*/
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.random = null;
  }
}

function copyRandomList(head) {
  if (head === null) {
    return null;
  }

  // Step 1: Create a copy of each node and insert it next to the original node
  let current = head;
  while (current !== null) {
    const newNode = new Node(current.data);
    newNode.next = current.next;
    current.next = newNode;
    current = newNode.next;
  }

  // Step 2: Adjust the random pointers of the copied nodes
  current = head;
  while (current !== null) {
    if (current.random !== null) {
      current.next.random = current.random.next;
    }
    current = current.next.next;
  }

  // Step 3: Separate the original and copied linked lists
  current = head;
  let copiedHead = head.next;
  let copiedCurrent = copiedHead;
  while (current !== null) {
    current.next = current.next.next;
    current = current.next;
    if (copiedCurrent.next !== null) {
      copiedCurrent.next = copiedCurrent.next.next;
      copiedCurrent = copiedCurrent.next;
    }
  }

  // Step 4: Return the head of the copied linked list
  return copiedHead;
}

// Function to create a special linked list
function createSpecialLinkedList(values, pairs) {
  const nodes = new Map();

  // Create nodes with values
  for (let i = 0; i < values.length; i++) {
    const node = new Node(values[i]);
    nodes.set(i + 1, node);
  }

  // Set random pointers
  for (const [a, b] of pairs) {
    const nodeA = nodes.get(a);
    const nodeB = nodes.get(b);
    nodeA.random = nodeB;
  }

  // Connect nodes
  for (let i = 0; i < values.length - 1; i++) {
    const node = nodes.get(i + 1);
    const nextNode = nodes.get(i + 2);
    node.next = nextNode;
  }

  // Return the head of the special linked list
  return nodes.get(1);
}

// Function to print the linked list
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
    let randomData = current.random !== null ? current.random.data : "null";
    process.stdout.write(`(${current.data}, ${randomData}) -> `);
    current = current.next;
  }
  process.stdout.write("null\n");
}

// Test the implementation
const linkedList1 = createSpecialLinkedList(
  [1, 2, 3, 4],
  [
    [1, 2],
    [2, 4],
  ]
);
const copiedList1 = copyRandomList(linkedList1);
console.log("Input:");
printLinkedList(linkedList1);
console.log("Output:");
printLinkedList(copiedList1);

const linkedList2 = createSpecialLinkedList(
  [1, 3, 5, 9],
  [
    [1, 1],
    [3, 4],
  ]
);
const copiedList2 = copyRandomList(linkedList2);
console.log("Input:");
printLinkedList(linkedList2);
console.log("Output:");
printLinkedList(copiedList2);
