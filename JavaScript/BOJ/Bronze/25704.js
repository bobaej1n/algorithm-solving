// 출석 이벤트

const [n, p] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
let min = p;

for (let i = 1; i <= 4; i++)
{
	if (i * 5 > n)
	{
		break;
	}

	switch (i)
	{
		case 1:
			min = Math.min(min, p - 500);
			break;
		case 2 :
			min = Math.min(min, p * 0.9);
			break;
		case 3:
			min = Math.min(min, p - 2000);
			break;
		case 4:
			min = Math.min(min, p * 0.75);
			break;
	}
}

console.log(min < 0 ? 0 : min);