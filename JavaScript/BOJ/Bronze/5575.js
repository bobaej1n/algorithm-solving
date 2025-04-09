// 타임 카드

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

for (let i = 0; i < input.length; i++)
{
	let time = input[i].split(" ").map(Number);
	let workingHours = [0, 0, 0];

	for (let i = 2; i >= 0; i--)
	{
		if (time[i] <= time[i + 3])
		{
			workingHours[i] = time[i + 3] - time[i];
		}
		else
		{
			workingHours[i] = 60 + (time[i + 3] - time[i]);
			time[i + 2] -= 1;
		}
	}
	console.log(workingHours.join(" "));
}