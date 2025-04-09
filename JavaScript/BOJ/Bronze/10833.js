// 사과

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let sum = 0;

for (let i = 1; i <= input.length - 1; i++)
{
	let [people, apples] = input[i].split(" ").map(Number);
	
	sum += apples % people;
}

console.log(sum);