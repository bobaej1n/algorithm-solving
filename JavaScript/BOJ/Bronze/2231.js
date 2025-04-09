// 분해합

const input = require("fs").readFileSync(0, "utf8").toString().trim();
const N = parseInt(input);
let M = 0;

for (var i = 0; i < N; i++)
{
	let sum = 0;
	const num1 = i;	// 후보값
	const num2 = num1.toString();

	for (var j = 0; j < num2.length; j++) sum += parseInt(num2[j]);

	sum += num1;

	if (sum == N)
	{
		M = num1;
		break;
	}
}

console.log(M);