// 구간 합 구하기 4

const input = require("fs").readFileSync("input.txt", "utf8").trim().split("\n");
const testCase = input.slice(2).map(i => i.split(" ").map(Number));
const numbers = input[1].split(' ').map(Number);

let tmp = 0;
let sum = [0];
let result = [];

for (const num of numbers)
{
	tmp += num;
	sum.push(tmp);
}

for (const [start, end] of testCase)
	result.push(sum[end] - sum[start - 1]);

console.log(result.join("\n"));