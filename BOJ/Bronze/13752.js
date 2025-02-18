// 히스토그램

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const repeat = input.shift();

for (let i = 0; i < repeat; i++)
{
	for (let j = 0; j < input[i]; j++)
	{
		process.stdout.write("=");
	}
	process.stdout.write("\n");
}