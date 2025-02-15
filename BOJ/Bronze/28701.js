// 세제곱의 합

let input = +require("fs").readFileSync("input.txt", "utf8").trim();
let sumN = 0;
let sumNNN = 0;

for (let i = 1; i <= input; i++)
{
    sumN += i;
    sumNNN += i * i * i;
}
  
console.log(sumN + "\n" + sumN * sumN + "\n" + sumNNN);