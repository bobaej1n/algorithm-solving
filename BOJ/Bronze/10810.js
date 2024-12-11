// 공 넣기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const baskets = new Array(n).fill(0);

for (var i = 1; i <= m; i++) {
    const [start, end, num] = input[i].split(" ").map(Number);
    for (var j = start; j <= end; j++) baskets[j - 1] = num;
}

console.log(baskets.join(" "));