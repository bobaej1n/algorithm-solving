// N과 M (7)

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(' ').map(Number).sort((a, b) => a - b);
let tmp = [];
let result = [];

const dfs = (num) =>
{
    if (num === M)
    {
        result.push(tmp.join(" ") + '\n');
        return
    }

    for (let i = 0; i < N; i++)
    {
        tmp.push(arr[i]);
        dfs(num + 1);
        tmp.pop();
    }
}

dfs(0);
console.log(result.join(""));