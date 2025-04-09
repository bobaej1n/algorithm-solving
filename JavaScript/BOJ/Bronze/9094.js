// 수학적 호기심

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = +input.shift();

for (let i = 0; i < repeat; i++)
{
	const [n, m] = input[i].trim().split(" ").map(Number);
	let result = 0;

	for (let b = 1; b < n; b++)
	{
		for (let a = 1; a < b; a++)
		{
			let num = (a * a + b * b + m) / (a * b);

			if (Number.isInteger(num))
			{
				result++
			}
		}
	}
	console.log(result);
}