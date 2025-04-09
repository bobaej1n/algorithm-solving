// 이상한 기호

const [A, B] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

console.log((A + B) * (A - B));