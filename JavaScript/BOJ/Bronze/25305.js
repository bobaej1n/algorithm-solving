// 커트라인

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [n, k] = input[0].split(" ").map(Number);
const sorted = input[1].split(" ").map(Number).sort((a, b) => b - a);

console.log(sorted[k - 1]);