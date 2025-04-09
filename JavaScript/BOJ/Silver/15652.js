// N과 M (4)

const [N, M] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

const result = [];

function dfs(count, start) {
	if (start === M)
	{
		console.log(result.join(" "));
		return;
	}

	for (let i = count; i < N; i++)
	{
		result.push(i + 1);
		dfs(i, start + 1);
		result.pop();
	}
}

dfs(0, 0);