// 문자와 문자열

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const str = input[0];
const num = parseInt(input[1]);

console.log(str.charAt(num - 1));