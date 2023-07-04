/*

  1. **Merge k Sorted Lists**

You are given an array of `k` linked-lists `lists`, each linked-list is sorted in ascending order.

*Merge all the linked-lists into one sorted linked-list and return it.*

**Example 1:**
Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
  1->4->5,
  1->3->4,
  2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6

**Example 2:**
Input: lists = []
Output: []

**Example 3:**
Input: lists = [[]]
Output: []

*/

function merge(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let [start, end] = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    const [nextStart, nextEnd] = intervals[i];
    if (end >= nextStart) {
      end = Math.max(end, nextEnd);
    } else {
      result.push([start, end]);
      [start, end] = [nextStart, nextEnd];
    }
  }

  result.push([start, end]);

  return result;
}

// Example usage:
console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // Output: [[1, 6], [8, 10], [15, 18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // Output: [[1, 5]]
