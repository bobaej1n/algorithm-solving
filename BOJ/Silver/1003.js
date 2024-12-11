// 피보나치 함수

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n").map(Number);
const T = input.shift();

for (let i = 0; i < T; i++)
{
	let zeroCount = 1;
	let oneCount = 0;

	for (let j = 1; j <= input[i]; j++)
	{
		const count = zeroCount;
		zeroCount = oneCount;
		oneCount = count + oneCount;
	}

	console.log(zeroCount + " " + oneCount);
}