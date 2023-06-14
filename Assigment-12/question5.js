/*
 **Question 6**

Given a linked list and two integers M and N. Traverse the linked list such that you retain M nodes then delete next N nodes, continue the same till end of the linked list.

Difficulty Level: Rookie

**Examples**:

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

  retainAndDeleteNodes(M, N) {
    let currentNode = this.head;

    // Traverse the linked list
    while (currentNode !== null) {
      let retainCount = 0;
      let deleteCount = 0;

      // Retain M nodes
      while (currentNode !== null && retainCount < M) {
        retainCount++;
        currentNode = currentNode.next;
      }

      // Delete N nodes
      while (currentNode !== null && deleteCount < N) {
        deleteCount++;
        currentNode = currentNode.next;
      }
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

// Create the linked list
const linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);
linkedList.insert(4);
linkedList.insert(5);
linkedList.insert(6);
linkedList.insert(7);
linkedList.insert(8);
linkedList.insert(9);

// Retain M nodes and delete N nodes
const M = 2;
const N = 3;
linkedList.retainAndDeleteNodes(M, N);

// Print the modified linked list
linkedList.printList();
