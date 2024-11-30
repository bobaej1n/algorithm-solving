// 제로

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const repeat = input.shift();
let sum = 0;
let stack = [];

for (let i = 0; i < repeat; i++)
{
    let num = input[i];

    if (num == 0)
    {
        if (i == 0) sum = 0;
        else
        {
            sum -= stack.pop();
        }
    }
    else
    {
        sum += num;
        stack.push(num);
    }
}

console.log(sum);