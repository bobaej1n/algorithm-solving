// 수 정렬하기 2

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const repeat = input[0];
let arr = [];
let sortedArr;

for (var i = 1; i <= repeat; i++) arr.push(input[i]);
sortedArr = Object.values(arr).sort((a, b) => a - b); 

console.log(sortedArr.join("\n"));