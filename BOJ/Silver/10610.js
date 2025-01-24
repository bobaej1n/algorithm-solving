// 30

let input = require("fs").readFileSync(0, "utf8").trim().split("").map(Number);
input.sort((a, b) => b - a);

const sum = input.reduce((acc, cur) => acc + cur);

console.log(((sum % 3 === 0) && (input.includes(0))) ? input.join("") : -1);