// 최소공배수

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = +input.shift();
let answer = [];

for (let i = 0; i < repeat; i++)
{
    let [a, b] = input[i].toString().split(" ").map(Number);
    let a2 = a;
    let b2 = b;

    while (a % b !== 0)
    {
        let c = a % b;

        if (c != 0)
        {
            a = b;
            b = c;
        }
    }

    let min = a2 * b2 / b;
    answer.push(min);
}

console.log(answer.join("\n"));