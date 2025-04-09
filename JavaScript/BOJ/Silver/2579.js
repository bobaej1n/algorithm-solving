// 계단 오르기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const count = input.shift();

const arr = new Array(count).fill(0);

arr[0] = input[0];
arr[1] = Math.max(input[0] + input[1], input[1]);
arr[2] = Math.max(input[1], input[0]) + input[2];

for (let i = 3; i < input.length; i++)
{
	arr[i] = Math.max(arr[i - 3] + input[i - 1], arr[i - 2]) + input[i];
}

console.log(arr[input.length - 1]);