// 소수 구하기

const [N, M] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const prime = { 1: true };
const result = [];

for (let i = 2; i <= Math.sqrt(M); i++)
{
    if (prime[i]) continue;
    for (let j = i ** 2; j <= M; j += i) prime[j] = true;
}

for (let i = N; i <= M; i++)
{
    if (!prime[i]) result.push(i);
}

console.log(result.join("\n"));