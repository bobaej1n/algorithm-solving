// 수열

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, K] = input.shift().split(" ").map(v => +v);
const arr = input.toString().split(" ").map(v => +v);

let sum = arr.slice(0, K).reduce((acc, cur) => acc + cur, 0);
let result = sum;

for (let i = 0; i < (N - K); i++)
{
	sum += (arr[i + K] - arr[i]);
	if (sum > result) result = sum;
};

console.log(result);