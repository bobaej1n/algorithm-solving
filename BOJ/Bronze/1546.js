// 평균

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const m = parseInt(input[0].split(" "));
const scores = input[1].split(" ").map(Number);
const maxScore = Math.max(...scores);
let sum = 0;

for (var i = 0; i < m; i++) sum += (scores[i] / maxScore * 100);

console.log(sum / m);