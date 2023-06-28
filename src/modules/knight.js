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
    const parent = {};
    const visited = [start];

    const queue = new Queue(start);
    parent[start] = null;

    while (!queue.isEmpty()) {
      const firstQItem = queue.dequeue();
      const allPossibleMoves = this.getValidMoves(firstQItem);

      if (this.isTheTarget(firstQItem, end)) {
        const path = this.reconstructPath(parent, end);
        console.log(
          `You made it in ${path.length - 1} moves! Here's your path:`
        );
        path.forEach((square) => {
          console.log(square);
        });
        return;
      }

      for (let i = 0; i < allPossibleMoves.length; i++) {
        const currNeighbor = allPossibleMoves[i];

        if (this.isTheTarget(currNeighbor, end)) {
          parent[currNeighbor] = firstQItem;
          const path = this.reconstructPath(parent, end);
          console.log(
            `You made it in ${path.length - 1} moves! Here's your path:`
          );
          path.forEach((square) => {
            console.log(square);
          });
          return;
        }

        if (!this.hasVisited(currNeighbor, visited)) {
          parent[currNeighbor] = firstQItem;
          visited.push(currNeighbor);
          queue.enqueue(currNeighbor);
        }
      }
    }
    return this.reconstructPath(parent, end);
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

  reconstructPath(parent, end) {
    let currNode = end;
    const path = [];
    while (currNode !== null) {
      path.push(currNode);
      currNode = parent[currNode];
    }
    path.reverse();
    return path;
  }
}

export default Knight;
