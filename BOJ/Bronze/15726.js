// 이칙연산

const [a, b, c] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

let num1 = a * b / c;
let num2 = a / b * c;

console.log(parseInt(Math.max(num1, num2)));