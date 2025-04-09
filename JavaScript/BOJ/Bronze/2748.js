// 피보나치 수 2

const input = BigInt(require("fs").readFileSync("input.txt", "utf8").trim());

let num1 = 0n;
let num2 = 1n;
let answer = 0n;

if (input === 0n)
{
	answer = num1;
}
else if (input === 1n)
{
	answer = num2;
}
else
{
	for (let i = 2n; i <= input; i++)
	{
		answer = num1 + num2;
		num1 = num2;
		num2 = answer;
	}
}

console.log(answer.toString());