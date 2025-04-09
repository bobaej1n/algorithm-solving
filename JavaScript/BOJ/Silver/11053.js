// 가장 긴 증가하는 부분 수열

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const N = +input.shift();
const arr = input.shift().split(" ").map(Number);

const dp = new Array(N);
dp[0] = 1;

for (let i = 1; i < N; i++)
{
	let max = 0;
	
	for (let j = 0; j <= i; j++)
	{
		if (arr[j] < arr[i])
		{
			max = Math.max(max, dp[j]);
		}
	}
	dp[i] = max + 1;
}

console.log(Math.max(...dp));