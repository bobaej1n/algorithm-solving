// 색종이

let [num, ...input] = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
input = input.map((i) => i.split(" "));
let arr = Array.from(Array(100), () => Array(100).fill(0));
let count = 0;

for (let i = 0; i < +num; i++)
{
	let startX = +input[i][0];
	let startY = +input[i][1];

	for (let j = 0; j < 10; j++)
	{
		for (let k = 0; k < 10; k++)
		{
			if (arr[startX + j][startY + k] !== 0)
			{
				continue;
			}
			if (arr[startX + j][startY + k] == 0)
			{
				arr[startX + j][startY + k] = 1;
				count++;
			}
		}
	}
}

console.log(count);