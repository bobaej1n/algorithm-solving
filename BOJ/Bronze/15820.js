// 맞았는데 왜 틀리죠?

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [s1, s2] = input[0].split(" ").map(Number);
let answer = "Accepted";

for (let i = 1; i <= s1 + s2; i++)
{
	let [num1, num2] = input[i].split(" ").map(Number);

	if (num1 == num2)
	{
		continue;
	}
	else if ((num1 != num2) && (i > s1))
	{
		answer = "Why Wrong!!!";
		break;
	}
	else
	{
		answer = "Wrong Answer";
		break;
	}
}

console.log(answer);