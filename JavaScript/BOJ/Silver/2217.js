// 로프

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const N = input.shift();
const arr = input.map(Number).sort((a, b) => b - a);
const result = [];

for (let i = 0; i < N; i++)
{
  result.push(arr[i] * (i + 1));
}

console.log(Math.max(...result));