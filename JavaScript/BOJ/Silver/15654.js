// N과 M (5)

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].trim().split(" ").map(Number);
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);

let visited = Array(N + 1).fill(false);
let tmp = [];
let result = [];

function dfs(lev, start) {
	if (lev === M)
	{
		result.push(tmp.join(" "));
		return;
	}

	for (let i = 0; i < arr.length; i++)
	{
		if (visited[i])
		{
			continue;
		}

		visited[i] = true;
		tmp.push(arr[i]);
		dfs(lev + 1, arr[i]);
		tmp.pop(arr[i]);
		visited[i] = false
	}
}

dfs(0, arr[0]);
console.log(result.join("\n"));