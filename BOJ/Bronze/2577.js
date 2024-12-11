// 숫자의 개수

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const sumArr = [...((input[0] * input[1] * input[2]).toString())];
let result = new Array(10).fill(0);

for (var i = 0; i < 10; i++) result[sumArr[i]]++;

console.log(result.join("\n"));