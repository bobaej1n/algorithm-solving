// 직사각형

const [lenA, lenB] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);

console.log(lenA * lenB);