// 보물

const input = require("fs").readFileSync("input.txt", "utf8").trim().split("\n");
const N = +input[0];
const A = input[1].trim().split(" ").map(Number);
const B = input[2].trim().split(" ").map(Number);
let result = 0;

A.sort((a, b) => a - b);
B.sort((a, b) => b - a);

for(let i = 0; i < N; i++)
{
	result += A[i] * B[i];
}

console.log(result);