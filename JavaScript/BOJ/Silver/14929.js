// 귀찮아 (SIB)

const [n, input] = require("fs").readFileSync(0, "utf8").trim().split("\n");
const arr = input.split(" ").map(Number);
let sum = 0;
let result = 0;

for (let i = 0; i < +n; i++)
{
	result += sum * arr[i];
	sum += arr[i];
}

console.log(result);