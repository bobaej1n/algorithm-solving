// HI-ARC=?

const [H, I, A, R, C] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

console.log((H * I) - (A * R * C));