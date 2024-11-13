// 이항 계수 1

const input = require("fs").readFileSync(0, "utf8").trim().split(" ");
const [n, k] = input.map(Number);

let num1 = 1;
let num2 = 1;

for (i = 0; i < k; i++) {
    num1 *= n - i;
    num2 *= k - i;
}

console.log(num1 / num2);