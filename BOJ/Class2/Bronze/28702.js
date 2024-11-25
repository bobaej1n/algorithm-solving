// FizzBuzz

const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
let nextNum;

for (var i = 0; i < 3; i++)
{
	let str = input[i].trim();
	if (!isNaN(str))
	{
		nextNum = Number(str) + (3 - i);
		break;
	}
}

if ((nextNum % 3 == 0) && (nextNum % 5 == 0))
	console.log("FizzBuzz");
else if ((nextNum % 3 == 0) && (nextNum % 5 != 0))
	console.log("Fizz");
else if ((nextNum % 3 != 0) && (nextNum % 5 == 0))
	console.log("Buzz");
else
	console.log(nextNum);