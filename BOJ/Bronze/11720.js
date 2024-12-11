// 숫자의 합

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const times = parseInt(input[0]);
const numbers = input[1].split("").map(Number);
var sum = 0;

for(var i = 0; i < times; i++) sum += numbers[i];

console.log(sum);