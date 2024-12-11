// 웰컴 키트

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const total = parseInt(input[0]);
const arr = [...input[1].trim().split(" ").map(Number)];
const [T, P] = input[2].trim().split(" ").map(Number);

const numT = arr.reduce((acc, cur) => Math.ceil(cur / T) + acc, 0);

console.log(numT + "\n" + Math.floor(total / P) + " " + total % P);