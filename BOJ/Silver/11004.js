// K번째 수

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);

console.log(arr[K - 1]);