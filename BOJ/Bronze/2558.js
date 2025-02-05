// A+B - 2

const [A, B] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);

console.log(A + B);