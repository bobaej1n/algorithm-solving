// N과 M (8)

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(a => a.split(" ").map(Number));
const [N, M] = input[0];
const nums = input[1].sort((a, b) => a - b);
let result = [];

function dfs(arr, start) {
    if (start === M)
    {
        result.push(arr.join(" "));
    }
    else
    {
        for (let i = 0; i < N; i++)
        {
            if (nums[i] >= arr[arr.length - 1])
            {
                arr.push(nums[i]);
                dfs(arr, start + 1);
                arr.pop();
            }
        }
    }
}

for (let i = 0; i < N; i++)
{
    dfs([nums[i]], 1);
}

console.log(result.join("\n"));