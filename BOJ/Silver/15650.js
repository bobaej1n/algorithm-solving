// N과 M (2)

const [N, M] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

const arr = Array.from({ length: M }, () => 0)

function dfs(count, start)
{
    if (start === M)
    {
        console.log(arr.join(" "));
    }
    else
    {
        for (let i = count; i <= N; i++)
        {
            arr[start] = i;
            dfs(i + 1, start + 1);
        } 
    }
}

dfs(1, 0);