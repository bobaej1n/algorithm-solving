// 방학 숙제

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n").map(Number);

const mathDay = input[1] / input[3];
const langDay = input[2] / input[4];

const math = input[1] % input[3] === 0 ? mathDay : parseInt(mathDay) + 1;
const lang = input[2] % input[4] === 0 ? langDay : parseInt(langDay) + 1;

console.log(input[0] - Math.max(math, lang));