// 최대공약수와 최소공배수

const input = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const minNum = Math.min(input[0], input[1]);
let gNum = 0;
let lNum = 0;

// 최대공약수
for (var i = 1; i <= minNum; i++) {
    if (input[0] % i == 0 && input[1] % i == 0) gNum = i;
}

// 최소공배수
lNum = gNum * input[0] / gNum * input[1] / gNum

console.log(gNum + "\n" + lNum);