// 괄호

const input = require('fs').readFileSync(0, "utf8").trim().split("\n");
const repeat = Number(input[0]);

for (let i = 1; i <= repeat; i++)
{
	const str = input[i];
	const stack = [];
	let result = 'YES';

	for (let j = 0; j < str.length; j++)
	{
		if (str[j] === '(') stack.push(1);
		else
		{
			if (!stack.pop())
			{
				result = 'NO';
				break;
			}
		}
	}

	if (stack.length !== 0) result = 'NO';
	console.log(result);
}