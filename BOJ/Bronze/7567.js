// 그릇

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("");

let result = 10;

for (let i = 0; i < input.length - 1; i++)
{
	if (input[i] === input[i + 1])
	{
		result += 5;
	}

	else
	{
		result += 10;
	}	
}

console.log(result);