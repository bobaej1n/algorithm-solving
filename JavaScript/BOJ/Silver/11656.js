// 접미사 배열

let input = require("fs").readFileSync(0, "utf8").toString().trim().split("");
const repeat = input.length;
let result = [];

for (let i = 0; i < repeat; i++)
{
    let arr = [...input];
    
    result.push(arr.join(""));
    input.shift();
}

console.log(result.sort().join("\n"));