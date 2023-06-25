/** 
  Implement a queue using an array in JavaScript. Include the necessary methods such as enqueue, dequeue, and isEmpty.
*/

class Queue {
  constructor() {
    this.items = []; // Array to store queue elements
  }

  // Add element to the rear of the queue
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element from the queue
  dequeue() {
    if (this.isEmpty()) {
      return "Queue is empty";
    }
    return this.items.shift();
  }

  // Check if the queue is empty
  isEmpty() {
    return this.items.length === 0;
  }
}

// Usage example
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // Output: 10

console.log(queue.isEmpty()); // Output: false

console.log(queue.dequeue()); // Output: 20

console.log(queue.isEmpty()); // Output: false

console.log(queue.dequeue()); // Output: 30

console.log(queue.isEmpty()); // Output: true

console.log(queue.dequeue()); // Output: Queue is empty
