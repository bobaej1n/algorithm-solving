// 숫자 카드

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const set = new Set(input[1].split(" ").map(Number));
const card = input[3].split(" ").map(Number);
let result = [];

for (let i = 0; i < +input[2]; i++)
{
	set.has(card[i]) ? result.push(1) : result.push(0);
}

console.log(result.join(" "));