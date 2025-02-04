// CASIO

const [A, B] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

console.log(A === B ? 1 : 0);