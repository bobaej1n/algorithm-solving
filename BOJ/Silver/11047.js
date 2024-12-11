// 동전 0

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
let [N, K] = input.shift().split(" ").map(Number);
const coins = input.map(Number);
let result = 0;

for (let i = N - 1; i >= 0; i--)
{
    result += Math.floor(K / coins[i]);
    K %= coins[i];
}

console.log(result);