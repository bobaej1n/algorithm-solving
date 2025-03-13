// 준영이의 등급

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const ranking = input[1].split(" ").map(Number);
let answer = [];

for (let i = 0; i < k; i++)
{
	let percentage = parseInt(ranking[i] * 100 / n);

	if ((percentage >= 0) && (percentage <= 4))	answer.push(1);
	else if ((percentage > 4) && (percentage <= 11))	answer.push(2);
	else if ((percentage > 11) && (percentage <= 23))	answer.push(3);
	else if ((percentage > 23) && (percentage <= 40))	answer.push(4);
	else if ((percentage > 40) && (percentage <= 60))	answer.push(5);
	else if ((percentage > 60) && (percentage <= 77))	answer.push(6);
	else if ((percentage > 77) && (percentage <= 89))	answer.push(7);
	else if ((percentage > 89) && (percentage <= 96))	answer.push(8);
	else if ((percentage > 96) && (percentage <= 100))	answer.push(9);
}

console.log(answer.join(" "));