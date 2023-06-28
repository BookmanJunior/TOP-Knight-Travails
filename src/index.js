import Knight from "./modules/knight.js";

const knight = new Knight();

console.log(knight.moves([0, 0], [0, 0]));
console.log(knight.moves([0, 0], [3, 3]));
console.log(knight.moves([3, 3], [0, 0]));
console.log(knight.moves([3, 3], [4, 3]));
