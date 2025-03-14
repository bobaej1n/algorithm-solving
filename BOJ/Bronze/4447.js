// 좋은놈 나쁜놈

let input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = +input.shift();
const gbn = ["is GOOD", "is A BADDY", "is NEUTRAL"];
let answer = [];

for (let i = 0; i < repeat; i++)
{
	let sentence = input[i].trim().split("");
	let goodOrBad = 0;

	for (let i of sentence)
	{
		if ((i.charCodeAt() === 71) || (i.charCodeAt() === 103))
		{
			goodOrBad++;
		}
		else if ((i.charCodeAt() === 66) || (i.charCodeAt() === 98))
		{
			goodOrBad--;
		}
	}

	if (goodOrBad > 0)
	{
		answer.push(sentence.concat(" ", gbn[0]).join(""));
	}
	else if (goodOrBad < 0)
	{
		answer.push(sentence.concat(" ", gbn[1]).join(""));
	}
	else
	{
		answer.push(sentence.concat(" ", gbn[2]).join(""));
	}
}

console.log(answer.join("\n"))