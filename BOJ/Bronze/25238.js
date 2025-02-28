// 가희와 방어율 무시

const [a, b] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const rate = a - (a * b / 100);

console.log(rate >= 100 ? 0 : 1);