// 상근날드

let input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const burger = input.slice(0, 3);
const cola = input.slice(3);

console.log(Math.min(...burger) + Math.min(...cola) - 50);