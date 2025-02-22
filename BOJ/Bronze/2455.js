// 지능형 기차

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
let cur = 0;
let answer = 0;

for (var i = 0; i < 4; i++)
{
    const [sub, add] = input[i].split(" ").map(Number);
    cur += add;
    cur -= sub;
    answer = Math.max(answer, cur);
}

console.log(answer);
