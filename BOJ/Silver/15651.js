// N과 M (3)

const [N, M] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const arr = [];
let result = "";

function dfs(count) {
	if (count === M)
	{
		result += `${arr.join(" ")}\n`;
		return;
	}

	for (let i = 0; i < N; i++)
	{
		arr.push(i + 1);
		dfs(arr.length);
		arr.pop();
	}
}

dfs(0);
console.log(result.trim());