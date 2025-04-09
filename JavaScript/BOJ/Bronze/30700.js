// KOREA 문자열 만들기

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

const korea = ["K", "O", "R", "E", "A"];
let length = 0;

for (let i = 0; i < input.length; i++)
{
    if (input[i] == korea[length % 5])
    {
        length += 1;
    }
}

console.log(length);