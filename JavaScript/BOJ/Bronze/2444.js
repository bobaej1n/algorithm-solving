// 별 찍기 - 7

const n = Number(require('fs').readFileSync(0, "utf8").trim());
let star = [];

for (let i = 1; i <= n; i++)
{
	for (let j = 1; j < n + i; j++)
	{
		if (j <= n - i) star += ' ';
		else star += '*';
	}
	star += '\n';
}

for (let i = n; i > 1; i--)
{
	for (let j = 1; j < n + i - 1; j++)
	{
		if (j <= n + 1 - i) star += ' ';
		else star += '*';
	}
	star += '\n';
}

console.log(star);