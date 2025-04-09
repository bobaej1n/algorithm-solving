// 바이러스

const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
let node = Number(input[0]);
let edge = Number(input[1]);
let graph = [...new Array(node + 1)].map(() => []);
let visited = [...new Array(node + 1)].fill(0);
let result = 0;

visited[1] = 1;

for (let i = 0; i < edge; i++)
{
    let start = Number(input[i + 2].split(" ")[0]);
    let end = Number(input[i + 2].split(" ")[1]);
    graph[start].push(end);
    graph[end].push(start);
}

function dfs(start)
{
    for (let end of graph[start])
    {
        if (!visited[end]) {
        visited[end] = 1;
        result++;
        dfs(end);
        }
    }
}

dfs(1);
console.log(result);