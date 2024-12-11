// 최댓값

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
let max, order;

for(var i = 0; i < input.length; i++)
{
    max = Math.max(...input);
    if (max == input[i]) order = i + 1;
}

console.log(max + "\n" + order);