// 1, 2, 3 더하기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const repeat = input.shift();
let arr = [];
let result = [];

for (let i = 1; i <= 11; i++)
{
	if (i == 1) arr.push(1);
	else if (i == 2) arr.push(2);
	else if (i == 3) arr.push(4);
	else arr.push(arr[i - 4] + arr[i - 3] + arr[i - 2]);
}

for (let j = 0; j < repeat; j++) result.push(arr[input[j]- 1]);

console.log(result.join("\n"));