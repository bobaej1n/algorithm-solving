// 수 정렬하기 3

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
input.shift();

let sortedArr = Object.values(input).sort((a, b) => a - b); 

console.log(sortedArr);