// 크냐?

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

for(let i = 0; i < input.length - 1; i++)
{
	let [a, b] = input[i].split(" ").map(Number);
	console.log(a > b ? "Yes" : "No");
}