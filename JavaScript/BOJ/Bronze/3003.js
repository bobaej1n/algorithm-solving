// 킹, 퀸, 룩, 비숍, 나이트, 폰

const input = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const count = [1, 1, 2, 2, 2, 8];
let result = [];

for (let i = 0; i < 6; i++)	result.push(count[i] - input[i]);

console.log(result.join(" "));