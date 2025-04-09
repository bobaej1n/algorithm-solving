const input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n").map(Number);
const repeat = input.shift();

if (repeat == 0)
{
	console.log(0);
	process.exit();
}

const trimmedMean = Math.round(repeat * 0.15);

console.log(
	Math.round(input
		.sort((a, b) => a - b)
		.slice(trimmedMean, repeat - trimmedMean)
		.reduce((a, b) => a + b, 0)
		/ (repeat - 2 * trimmedMean)
	)
);