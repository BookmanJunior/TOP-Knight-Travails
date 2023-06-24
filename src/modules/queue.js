class Queue {
  constructor(start) {
    this.queue = [start];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return !this.queue.length;
  }
}

export default Queue;
