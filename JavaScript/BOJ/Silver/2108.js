// 통계학

const input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n").map(Number);
const len = input.shift();
input.sort((a, b) => a - b);
let result = [];

// 1. 산술평균
result.push(Math.round(input.reduce((a, b) => a + b, 0) / len));

// 2. 중앙값
result.push(input[parseInt(len / 2)]);

// 3. 최빈값
const map = new Map();
let max = 0;
let frq = [];

for (let i of input)
{
	if (map.get(i)) map.set(i, map.get(i) + 1);
	else map.set(i, 1);

	if (map.get(i) > max) max = map.get(i);
}

for (let i of new Set(input))
{
	if (map.get(i) == max) frq.push(i);
}

frq.length > 1 ? result.push(frq[1]) : result.push(frq[0]);

// 4. 범위: N개의 수들 중 최댓값과 최솟값의 차이
result.push(input[len - 1] - input[0]);

console.log(result.join("\n"));