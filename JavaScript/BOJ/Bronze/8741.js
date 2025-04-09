// 이진수 합

const fs = require("fs");
let input = +fs.readFileSync("dev/stdin").toString().trim();

let result = "";

for (let i = 0; i < input; i++) result += '1';
for (let i = 1; i < input; i++) result += '0';

console.log(result);