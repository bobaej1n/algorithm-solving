// Mathematics

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const arr = input.slice(1).map(Number);
let result = arr.reduce((pre, cur) => pre + cur, 0)

console.log(result);