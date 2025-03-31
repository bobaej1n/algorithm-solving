// 중간계 전쟁

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const t = parseInt(input[0]);

for (let i = 0; i < t; i++)
{
    const good = input[i * 2 + 1].split(" ").map(Number);
    const evil = input[i * 2 + 2].split(" ").map(Number);

	const goodScore = good[0] + 2 * good[1] + 3 * good[2] + 3 * good[3] + 4 * good[4] + 10 * good[5];
	const evilScore = evil[0] + 2 * evil[1] + 2 * evil[2] + 2 * evil[3] + 3 * evil[4] + 5 * evil[5] + 10 * evil[6];

    if (goodScore > evilScore)
	{
		console.log(`Battle ${i + 1}: Good triumphs over Evil`);
    }
	else if (goodScore < evilScore)
	{
		console.log(`Battle ${i + 1}: Evil eradicates all trace of Good`);
    }
	else
	{
		console.log(`Battle ${i + 1}: No victor on this battle field`);
    }
}