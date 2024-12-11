// 개수 세기

const input = require("fs").readFileSync("input.txt", "utf8").trim().split("\n");
const numbers = input[1].split(" ").map(Number);
const num = parseInt(input[2]);
let sum = 0;

for (var i = 0; i < numbers.length; i++) if (num == numbers[i]) sum++;

console.log(sum);