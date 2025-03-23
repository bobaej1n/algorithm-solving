// 8진수

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

let str = input;
let result = "";

while (str.length % 3 !== 0)
{
    str = '0' + str;
}


for (let i = str.length - 3; i >= 0;)
{
    result += String.fromCharCode(((str[i] - "0") * 4 + (str[i + 1] - "0") * 2 + (str[i + 2] - "0")) + "0".charCodeAt(0));
    i -= 3;
}

console.log(result.split("").reverse().join(""));