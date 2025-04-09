// 피보나치 수 5

let fs = require("fs");
let input = +fs.readFileSync("input.txt").toString().trim();

function fibo(input)
{
	if (input === 0)
	{
		return 0;
	}
	if (input === 1 || input === 2)
	{
		return 1;
	}
	
	return fibo(input - 1) + fibo(input - 2);
}

console.log(fibo(input));