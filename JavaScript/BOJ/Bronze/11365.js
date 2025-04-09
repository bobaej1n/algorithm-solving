// !밀비 급일

let input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++)
{
	let sen = input[i].trim().split("");
	console.log(sen.reverse().join(""));
}