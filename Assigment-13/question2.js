/* 

 **Question 2**

Write a function that takes a list sorted in non-decreasing order and deletes any duplicate nodes from the list. The list should only be traversed once.

For example if the linked list is 11->11->11->21->43->43->60 then removeDuplicates() should convert the list to 11->21->43->60.

**Example 1:**
Input:
LinkedList: 
11->11->11->21->43->43->60
Output:
11->21->43->60

** Example 2: ** 
Input:
LinkedList: 
10->12->12->25->25->25->34
Output:
10->12->25->34

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

function removeDuplicates(list) {
  if (!list.head) {
    return null;
  }

  let current = list.head;

  while (current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return list;
}

// Example usage:
const list = new LinkedList();
list.append(11);
list.append(11);
list.append(11);
list.append(21);
list.append(43);
list.append(43);
list.append(60);

const deduplicatedList = removeDuplicates(list);

// Printing the deduplicated list
let current = deduplicatedList.head;
while (current) {
  console.log(current.data);
  current = current.next;
}
