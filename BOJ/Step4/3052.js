// 나머지

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const result = [];

for (var i = 0; i < 10; i++) {
    if (!result.includes(input[i] % 42))
        result.push(input[i] % 42);
}

console.log(result.length);