const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {

  constructor () {
    this.queue = {};
    this.length = 0;
    this.first = 0;
    this.head = null;
    this.temp = null;
  }

  getUnderlyingList() {
    for (let i = 0; i < this.length; i += 1) {
      let piece = new ListNode(this.queue[i]);
      if (this.head === null && piece.value > 0) {
        this.head = piece;
        this.temp = piece;
      } else if (piece.value > 0) {
        this.temp.next = piece;
        this.temp = piece;
      }
    }
    return this.head;
  }

  enqueue(value) {
    this.queue[this.length] = value;
    this.length += 1;
  }

  dequeue() {

    if (this.length === 0) {
      return {};
    }

    let deleted = this.queue[this.first];
    delete this.queue[this.first];
    this.first += 1;
    return deleted;
    }
}

module.exports = {
  Queue
};
