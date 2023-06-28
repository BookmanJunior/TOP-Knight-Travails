function isTheTarget(square, target) {
  return square.every((move, index) => move === target[index]);
}

function hasVisited(curr, arr) {
  return arr.find((move) => move.every((m, index) => m === curr[index]));
}

function reconstructPath(parent, end) {
  let currNode = end;
  const path = [];
  while (currNode !== null) {
    path.push(currNode);
    currNode = parent[currNode];
  }
  path.reverse();
  return path;
}

export { isTheTarget, hasVisited, reconstructPath };
