// 바구니 뒤집기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const baskets = [];

for (var i = 1; i <= n; i++) baskets[i - 1] = i;
for (var i = 1; i <= m; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    const temp = [...(baskets.slice(start - 1, end)).reverse()];
    baskets.splice(start - 1, end - start + 1, ...temp);
}
console.log(baskets.join(" "));