// 욱 제

let fs = require("fs");
let [a, b] = fs.readFileSync("dev/stdin").toString().trim().split(" ").map(Number);

let m = (b - a) / 400;

console.log(1 / (1 + Math.pow(10, m)));