// 줄번호

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

const repeat = +input.shift();

let reuslt = [];

for (let i = 0; i < repeat; i++)
{
	reuslt.push(i + 1 + ". " + input[i]);
}

console.log(reuslt.join("\n"));