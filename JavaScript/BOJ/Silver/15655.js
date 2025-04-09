// N과 M (6)

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].trim().split(" ").map(Number);
const arr = input[1].split(" ").map(Number).sort((a, b) => a - b);
let result = [];

const dfs = (lev, start) => {
	let answer = "";

	if (start === M)
	{
		for (let i = 0; i < M; i++)
		{
			answer += `${result[i]} `;
		}

		console.log(answer);
	}

	for (let i = lev; i <= N; i++)
	{
		result[start] = arr[i - 1];
		dfs(i + 1, start + 1);
	}
}

dfs(1, 0);