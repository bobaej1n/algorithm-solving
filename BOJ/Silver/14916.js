// 거스름돈

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const n = +input[0];

function solution(n)
{
    let result = 0;

    if (n === 1 || n === 3)
    {
        return -1;
    }

    while (n > 0)
    {
        if (n % 2 === 1 || n % 5 === 0)
        {
            result += 1;
            n -= 5;
        }
        else if (n % 2 === 0)
        {
            result += 1;
            n -= 2;
        }
    }

    return result;
}

const result = solution(n);
console.log(result);