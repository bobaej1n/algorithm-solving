// 배열 합치기

const input = require('fs').readFileSync(0, "utf8").trim().split("\n");
const arrA = input[1].split(" ").map(Number);
const arrB = input[2].split(" ").map(Number);
const result = [].concat(arrA, arrB).sort((a, b) => a - b);

console.log(result.join(" "));