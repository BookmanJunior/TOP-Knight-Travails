import Queue from "./queue.js";

class Knight {
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

  moves(start, end) {
    const visited = [start];
    const queue = new Queue(start);

    while (!queue.isEmpty()) {
      const firstQItem = queue.dequeue();
      const allPossibleMoves = this.getValidMoves(firstQItem);

      if (this.isTheTarget(firstQItem, end)) {
        console.log(`Found it`);
        visited.push(end);
        return visited;
      }

      for (let i = 0; i < allPossibleMoves.length; i++) {
        const currNeighbor = allPossibleMoves[i];

        if (this.isTheTarget(currNeighbor, end)) {
          console.log(`Found it`);
          visited.push(end);
          return visited;
        }

        if (!this.hasVisited(currNeighbor, visited)) {
          visited.push(currNeighbor);
          queue.enqueue(currNeighbor);
        }
      }
    }
    return visited;
  }

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

  isTheTarget(square, target) {
    return square.every((move, index) => move === target[index]);
  }

  hasVisited(curr, arr) {
    return arr.find((move) => move.every((m, index) => m === curr[index]));
  }
}

export default Knight;
