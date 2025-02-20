// 팩토리얼 2

const input = +require("fs").readFileSync(0, "utf8").trim();

function factorial(n)
{
	if (n <= 1)
	{
		return 1;
	}
	
	return n * factorial(n - 1);
}

console.log(factorial(input));