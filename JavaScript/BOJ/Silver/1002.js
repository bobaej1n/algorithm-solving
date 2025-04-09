// 터렛

const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const T = parseInt(input[0]);

for (let i = 1; i <= T; i++)
{
	const [x1, y1, r1, x2, y2, r2] = input[i].split(" ").map(num => parseInt(num));
	const p1 = {x: x1, y: y1};
	const p2 = {x: x2, y: y2};

	const dis = getDistance(p1, p2);
	console.log(countCoordinates(dis, r1, r2));
}

function getDistance(p1, p2)
{
	return ((p1.x - p2.x) ** 2) + ((p1.y - p2.y) ** 2);
}

function countCoordinates(dis, r1, r2)
{
	const sumR = (r1 + r2) ** 2;
	const subR = (r1 - r2) ** 2;

	if (dis == 0)
	{
		if (r1 == r2)
		{
			return -1;
		}
		return 0;
	}
	else
	{
		if ((dis > sumR) || (dis < subR))
		{
			return 0;
		}
		else if (dis == sumR || dis == subR)
		{
			return 1;
		}
		else if (dis < sumR)
		{
			return 2;
		}
	}
}