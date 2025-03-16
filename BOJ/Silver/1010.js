// 다리 놓기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = parseInt(input.shift());
const num = 0;

function factorial (num)
{
        if (num <= 1) return 1;
        return num * factorial(num - 1);
}

for (let i = 0 ; i < repeat; i++)
{
        const arr = input[i].split(' ');
        const N = parseInt(arr[0]);
        const M = parseInt(arr[1]);
        
        console.log(Math.round((factorial(M) / (factorial(M - N) * factorial(N)))));
}
