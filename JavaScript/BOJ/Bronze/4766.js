// 일반 화학 실험

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);

for (let i = 0; i < input.length - 2; i++)
{
	console.log((input[i + 1] - input[i]).toFixed(2));
}