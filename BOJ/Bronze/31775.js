// 글로벌 포닉스

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let l = k = p = false;

for (let i = 0; i < 3; i++)
{
	let start = input[i][0];

	if (start === "l")	l = true;
	else if (start === "k")	k = true;
	else if (start === "p")	p = true;
}

console.log(((l === true) && (k === true) && (p === true)) ? "GLOBAL" : "PONIX");