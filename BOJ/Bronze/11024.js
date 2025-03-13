// 더하기 4

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = +input[0];
let answer = [];

for (let i = 0; i < repeat; i++)
{
	let arr = input[i + 1].split(" ").map(Number);
	let sum = arr.reduce((pre, cur) => pre + cur, 0);

	answer.push(sum);
}

console.log(answer.join("\n"));