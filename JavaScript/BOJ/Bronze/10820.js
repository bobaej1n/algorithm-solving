// 문자열 분석

const fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().split("\n");

const repeat = inputs.length;
let result = [];

for (let i = 0; i < repeat; i++)
{
    let input = inputs[i].split("");
    let strArr = [0, 0, 0, 0];

    if (input.length === 0) continue;

    for (let str of input)
    {
        let ascii = str.charCodeAt();

        if (ascii >= 97 && ascii <= 122)
        {
            strArr[0]++;
        }
        else if (ascii >= 65 && ascii <= 90)
        {
            strArr[1]++;
        }
        else if (ascii >= 48 && ascii <= 57)
        {
            strArr[2]++;
        }
        else if (ascii === 32)
        {
            strArr[3]++;
        }
    }

    result.push(strArr.join(" "));
}

console.log(result.join("\n"));