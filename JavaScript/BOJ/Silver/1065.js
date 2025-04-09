// 한 수

const input = +require("fs").readFileSync(0, "utf8").trim();
let result = 0;

for (let i = 1; i <= input; i++)
{
	let hundreads = parseInt(i / 100);
	let tens = parseInt((i % 100) / 10);
	let ones = parseInt(i % 10);

	if (i < 100)
	{
		result++;
	}
	else
	{
		if ((hundreads - tens) === (tens - ones))
		{
			result++;
		}
		else
		{
			continue;
		}
	}
}

console.log(result);