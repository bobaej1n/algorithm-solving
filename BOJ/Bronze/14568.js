// 2017 연세대학교 프로그래밍 경시대회

const input = +require("fs").readFileSync(0, "utf8").trim();
let answer = 0;

for (let i = 1; i <= input; i++)
{
	for (let j = 1; j <= input; j++)
	{
		for (let k = 1; k <= input; k++)
		{
			if ((i + j + k == input) && (i >= j + 2) && (k % 2 == 0))
			{
				answer++;
			}
		}
	}
}

console.log(answer);