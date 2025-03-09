// 세로읽기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const maxLen = Math.max(...input.map(i => i.length));
let sen = "";

for (let i = 0; i < maxLen; i++)
{
    for (let j = 0; j < input.length; j++)
    {
        sen += input[j][i] || "";
    }
}

console.log(sen);