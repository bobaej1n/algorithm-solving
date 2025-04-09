// 부녀회장이 될테야

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const repeat = input.shift();

for (var i = 1; i <= repeat; i += 1)
{
	const k = input.shift();
	const n = input.shift();
	const apt = Array.from(Array(k + 1), () => Array(n + 1).fill(0));

	apt[0].forEach((_, index) => apt[0][index] = index);

	for (let j = 1; j <= k; j += 1)
	{
		for (let g = 1; g <= n; g += 1)
			apt[j][g] = apt[j - 1][g] + apt[j][g - 1];
	}
	console.log(apt[k][n]);
}