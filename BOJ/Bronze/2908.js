// 상수

const input = require("fs").readFileSync(0, "utf8").trim().split(" ");
const num1 = parseInt(input[0].split("").reverse().join(""));
const num2 = parseInt(input[1].split("").reverse().join(""));

console.log(Math.max(num1, num2));