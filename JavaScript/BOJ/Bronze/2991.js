// 사나운 개

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

let [a, b, c, d] = input[0].split(" ").map(Number);
let time = input[1].split(" ").map(Number);

let result = [0, 0, 0];

for (let i = 0; i < 3; i++)
{
	let dog1 = time[i] % (a + b) ;
	let dog2 = time[i] % (c + d);

	if ((dog1 <= a) && (dog1 != 0))
	{
		result[i]++;
	}

	if ((dog2 <= c) && (dog2 != 0))
	{
		result[i]++;
	}
}

console.log(result.join("\n"));