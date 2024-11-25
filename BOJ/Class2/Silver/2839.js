// 설탕 배달

let input = require('fs').readFileSync(0, "utf8").split("\n").map(Number);

const sugar = input.shift();
let result = -1;
let _5kg = Math.floor(sugar / 5);

while (_5kg >= 0)
{
	let rest = sugar - _5kg * 5;
	if (rest % 3 === 0)
	{
		result = rest / 3 + _5kg;
		break;
	} else _5kg -= 1;
}

console.log(result);