// 검증수
const input = require("fs").readFileSync(0, "utf8").split(" ").map(Number);
let numSum = 0;

for (var i = 0; i < input.length; i++) numSum += input[i] * input[i];

console.log(numSum % 10);