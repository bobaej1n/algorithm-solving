// 패션왕 신해빈

const [testCase, ...input] = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");

let n = 0;
let index = 0;
let dressInfo = [];
let result = [];
let sum = 1;

for (let i = 0; i < Number(testCase); i++)
{
	sum = 1;
	n = Number(input[index++].trim());

	let dress = new Map();
	let dressType = new Set();

	for (let j = 0; j < n; j++)
	{
		dressInfo = input[index++].trim().split(" ");
		dressType.add(dressInfo[1]);

		if (dress.has(dressInfo[1]))
			dress.set(dressInfo[1], dress.get(dressInfo[1]) + 1);
		else
			dress.set(dressInfo[1], 1);
	}

	if (dress.size === 1)
		result.push(n);
	else
	{
		dressType.forEach((type) => {
			sum *= Number(dress.get(type) + 1);
		});
		result.push(sum - 1);
	}
}

console.log(result.join("\n"));