// RGB거리

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, ...arr] = input.map((i) => i.split(" ").map(Number));

const dp = arr;

for (let i = 1; i < N; i++)
{
    dp[i][0] = dp[i][0] + Math.min(dp[i - 1][1], dp[i - 1][2]);
    dp[i][1] = dp[i][1] + Math.min(dp[i - 1][0], dp[i - 1][2]);
    dp[i][2] = dp[i][2] + Math.min(dp[i - 1][0], dp[i - 1][1]);
}

console.log(Math.min(...dp[N - 1]));