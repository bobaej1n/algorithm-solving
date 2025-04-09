// 쉽게 푸는 문제

const [a, b] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
let start = 1;
let count = b;
let arr = [];

outerLoop:
for (let i = 0; i < b; i++)
{
	for (let j = 0; j <= i; j++)
	{
		arr.push(start);
		count--;

		if (count <= 0)
		{
			break outerLoop;
		}
	}
	start++;
}

let answer = arr.slice(a - 1, b).reduce((acc, cur) => acc + cur, 0);

console.log(answer);