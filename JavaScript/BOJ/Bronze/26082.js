// WARBOY

const [a, b, c] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

console.log((b / a) * 3 * c);