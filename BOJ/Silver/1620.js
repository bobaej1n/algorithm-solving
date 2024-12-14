// 나는야 포켓몬 마스터 이다솜

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(v => +v);

const NumToName = new Map();
const NameToNum = new Map();

for (let i = 0; i < N; i++)
{
    NumToName.set(i + 1, input[i]);
    NameToNum.set(input[i], i + 1);
}

const quiz = input.slice(N, input.length);
let result = "";

quiz.forEach(v => {
    if (isNaN(v)) result += NameToNum.get(v) + "\n";
    else result += NumToName.get(+v) + "\n";
});

console.log(result.trim());