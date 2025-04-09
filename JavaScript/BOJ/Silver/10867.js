// 중복 빼고 정렬하기

const [N, input] = require("fs").readFileSync(0, "utf8").trim().split("\n");
const arr = input.split(" ").map(Number);
let result = [];

for (i of arr)
{
	if (result.includes(i))
	{
		continue;
	}
	else
	{
		result.push(i);
	}
}

console.log(result.sort((a, b) => a - b).join(" "));