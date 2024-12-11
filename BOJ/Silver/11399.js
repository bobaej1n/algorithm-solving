// ATM

const input = require("fs").readFileSync("input.txt", "utf8").toString().trim().split("\n");
const N = Number(input.shift());
const arr = input.toString().split(" ").map(Number).sort((a, b) => a - b);
let totalTime = 0;

for (let i = 0; i < N; i++)
{
    let waitingTime = arr[i];
    
    for (let j = 0; j < i; j++) waitingTime += arr[j];

    totalTime += waitingTime;
}

console.log(totalTime);