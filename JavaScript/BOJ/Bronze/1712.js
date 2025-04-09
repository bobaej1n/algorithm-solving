// 손익분기점

const [a, b, c] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const margin = c - b;
let answer = Math.floor(a / margin) + 1;

console.log(margin <= 0 ? -1 : answer);