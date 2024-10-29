// 공 바꾸기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const baskets = new Array(n);

for (var i = 1; i <= n; i++) {
    baskets[i - 1] = i;
}

for (var i = 1; i <= m; i++) {
    const [start, end] = input[i].split(" ").map(Number);
    const temp = baskets[start - 1];
    baskets[start - 1] = baskets[end - 1];
    baskets[end - 1] = temp;
}

console.log(baskets.join(" "));