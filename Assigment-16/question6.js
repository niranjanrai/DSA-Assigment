/**
 **Question 6**

Given an integer k and a **[queue](https://www.geeksforgeeks.org/queue-data-structure/)** of integers, The task is to reverse the order of the first **k** elements of the queue, leaving the other elements in the same relative order.

Only following standard operations are allowed on queue.

- **enqueue(x) :** Add an item x to rear of queue
- **dequeue() :** Remove an item from front of queue
- **size() :** Returns number of elements in queue.
- **front() :** Finds front item.

 */
function reverseKElements(queue, k) {
  if (k <= 0 || k > queue.length) {
    return;
  }

  const stack = [];

  // Push the first k elements into the stack
  for (let i = 0; i < k; i++) {
    stack.push(queue.shift());
  }

  // Enqueue the elements from the stack back into the queue
  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  // Move the remaining (n - k) elements to the end of the queue
  for (let i = 0; i < queue.length - k; i++) {
    queue.push(queue.shift());
  }
}

// Example usage:
const queue = [1, 2, 3, 4, 5];
const k = 3;

reverseKElements(queue, k);
console.log(queue); // Output: [3, 2, 1, 4, 5]
