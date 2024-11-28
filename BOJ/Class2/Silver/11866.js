// 요세푸스 문제 0

const [N, K] = require("fs").readFileSync("input.txt", "utf8").trim().split(" ").map(Number);
let queue = Array.from({ length: N }, (_, i) => i + 1);
let result = [];

while(queue.length)
{
	for (let i = 0; i < K; i++)	queue.push(queue.shift());
	result.push(queue.pop());
}

console.log("<" + result.join(", ") + ">");