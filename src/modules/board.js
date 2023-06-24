import Node from "./node.js";

class Gameboard {
  static adjacencyList() {
    const arr = [];
    for (let i = 0; i <= 7; i++) {
      const newNode = new Node(i);
      for (let j = 0; j <= 7; j++) {
        newNode.edgeList.push(j);
      }
      arr.push(newNode);
    }
    return arr;
  }
}

export default Gameboard;
