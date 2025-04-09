// N과 M (1)

const [N, M] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const arr = Array(M).fill("");
const visited = Array(N + 1).fill(false);

function dfs(level)
{
    if (level === M)
    {
        console.log(arr.join(" "));
        return;
    }

    for (let i = 1; i <=N; i++)
    {
        if (visited[i])
        {
            continue;
        }

        arr[level] = i;
        visited[i] = true;
        dfs(level + 1);
        visited[i] = false;
    }
}

dfs(0);