// A + B - C

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);

console.log([input[0] + input[1] - input[2], parseInt(input[0].toString() + input[1].toString()) - input[2]].join("\n"));