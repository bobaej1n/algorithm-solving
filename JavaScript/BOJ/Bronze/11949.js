// 번호표 교환

let input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
input.toString().split("\n").map(Number);

for (let i = 1; i <= M; i++)
{
    for (let j = 0; j < N - 1; j++)
    {
        if (input[j] % i > input[j + 1] % i)
        {
            let temp = input[j];
            input[j] = input[j + 1];
            input[j + 1] = temp; 
        }
    }
}

console.log(input.join("\n"));