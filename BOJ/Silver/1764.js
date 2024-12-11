// 듣보잡

const input = require('fs').readFileSync(0, "utf8").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

// Set 사용
const Nset = new Set();
const Mset = new Set();

const result = [];

input.forEach((element, i) => {
	if (i < N) Nset.add(element);
	else Mset.add(element);
});

Nset.forEach((element) => {
	if (Mset.has(element)) result.push(element)
})

result.sort();

console.log(result.length + "\n" + result.join("\n"));