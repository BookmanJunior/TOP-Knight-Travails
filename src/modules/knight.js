import Queue from "./queue.js";

class Knight {
  constructor(board) {
    this.board = board;
  }

  moves(start) {
    const bfsInfo = [];

    for (let i = 0; i < this.board.length; i++) {
      bfsInfo[i] = {
        distance: null,
        predecessor: null,
      };
    }

    bfsInfo[start].distance = 0;
    const queue = new Queue(start);

    while (!queue.isEmpty()) {
      const firstQItem = queue.dequeue();
      const currEdgelist = this.board[firstQItem].edgeList;

      for (let i = 0; i < currEdgelist.length; i++) {
        const currNeighbor = currEdgelist[i];
        const currNeighborInfo = bfsInfo[currNeighbor];

        // check if node has been visited
        if (currNeighborInfo.distance === null) {
          currNeighborInfo.distance = bfsInfo[firstQItem].distance + 1;
          currNeighborInfo.predecessor = firstQItem;
          queue.enqueue(currNeighbor);
        }
      }
    }
    return bfsInfo;
  }
}

export default Knight;
