// 삼각형

const fs = require("fs");
const [w, h] = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

console.log((w * h / 2).toFixed(1));