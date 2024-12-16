// 파도반 수열

const [count, ...arr] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
let result = [];

for (let i = 0; i < arr.length; i++)
{
	const len = arr[i] + 1;
	const seq = new Array(len).fill(0);

	seq[1] = 1;
	seq[2] = 1;
	seq[3] = 1;

	for (let j = 4; j < seq.length; j++)
		seq[j] = seq[j -3] + seq[j - 2];

	result.push(seq[arr[i]]);
}

console.log(result.join("\n"));