// 랜선 자르기

const input = require("fs").readFileSync(0, "utf8").toString().trim().split('\n');
const [n, k] = input.shift().split(" ").map((i) => +i);
const lines = input.map((a) => +a).sort();
let max = Math.max(...lines);
let min = 1;

while (min <= max)
{
    let mid = parseInt((max + min) / 2);
    let num = lines
      .map((line) => parseInt(line / mid))
      .reduce((a, b) => a + b, 0);
    if (num >= k) min = mid + 1;
    else max = mid - 1;
}

console.log(max);