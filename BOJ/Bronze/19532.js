// 수학은 비대면강의입니다

const input = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

for (let x = -999; x <= 999; x++)
{
	for (let y = -999; y <= 999; y++)
	{
		if ((input[0] * x + input[1] * y == input[2]) && (input[3] * x + input[4] * y == input[5]))
			console.log(x + " " + y);
	}
}