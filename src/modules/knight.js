import Queue from "./queue.js";

class Knight {
  constructor(board) {
    this.board = board;
  }

  possibleMoves = [
    [-2, -1],
    [-1, -2],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, 1],
    [2, -1],
  ];

  getValidMoves = (start) =>
    this.possibleMoves
      .filter((square) =>
        square.every((move, index) => move + start[index] >= 0)
      )
      .map((square) => [square[0] + start[0], square[1] + start[1]]);

  // iterative approach
  // getValidMoves = (start) => {
  //   const allMoves = [];

  //   for (let i = 0; i < this.possibleMoves.length; i++) {

  //     const x = this.possibleMoves[i][0];
  //     const y = this.possibleMoves[i][1];
  //     const nextX = x + start[0];
  //     const nextY = y + start[1];

  //     if (nextX >= 0 && nextY >= 0) {
  //       allMoves.push([nextX, nextY]);
  //     }
  //   }
  //   return allMoves;
  // };

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
