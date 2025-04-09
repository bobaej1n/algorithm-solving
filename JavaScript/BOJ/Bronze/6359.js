// 만취한 상범

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const repeat = input.shift();
let result = [];

for (let i = 0; i < repeat; i++)
{
	let room = new Array(input[i] + 1).fill(true);

	for (let j = 2; j <= input[i]; j++)
	{
		for (let k = j; k <= input[i]; k += j)
		{
			room[k] = !room[k];
		}
	}

	result.push(room.filter((e) => e === true).length - 1);
}

console.log(result.join("\n"));