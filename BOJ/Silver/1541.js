// 잃어버린 괄호

const input = require("fs").readFileSync(0, "utf8").toString().trim();
const temp = input.split("-");
let result = [];

temp.forEach((i) =>
{
	if (i.includes("+"))
	{
		let sum = 0;

		i = i.split("+").map(Number);
		i.forEach((i) => (sum += i));
		result.push(sum);
	}
	else result.push(Number(i));
});

console.log(result.reduce((prev, cur) => prev - cur));