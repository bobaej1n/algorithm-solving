// 일곱 난쟁이

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const sum = input.reduce((acc, cur) => acc + cur, 0);
let result = [];

for (let i = 0; i < input.length; i++)
{
    for (let j = i + 1; j < input.length; j++)
    {
        const sum2 = input[i] + input[j];

        if (sum - sum2 === 100)
        {
            result = input.filter((item) => item !== input[i] && item !== input[j]).sort((a, b) => a - b);
            break;
        }
    }
}
  
console.log(result.join("\n"));