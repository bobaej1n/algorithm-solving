// 예비 소집 결과 보고서

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = +input.shift();
let result = 0;

for (let i = 0; i < repeat; i++)
{
    let arr = input[i].toString().split(" ").map(Number);
    let sum = arr[0] + arr[1] + arr[2];

    if (sum == -3)
    {
        continue;
    }

    for (let j = 0; j < arr.length; j++)
    {
        if (arr[j] == -1)
        {
            arr[j] = 121;
        }
    }

    if ((arr[0] <= arr[1]) && (arr[1] <= arr[2]))
    {
        result++;
    }
}

console.log(result);