// 유기농 배추

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const T = +input.shift();
const arr = input.map((i) => i.split(" ").map(Number));

let farm = [];
let visited = [];

const row = [0, 0, -1, 1];
const col = [-1, 1, 0, 0];

const dfs = (j, k, N, M) =>
{
	visited[j][k] = true;

	for (let i = 0; i < 4; i++)
	{
		newJ = j + col[i];
		newK = k + row[i];

		if ((newJ >= 0) && (newJ < N) && (newK >= 0) && (newK < M))
		{
			if (farm[newJ][newK] === 1 && visited[newJ][newK] === false)
			{
				dfs(newJ, newK, N, M);
			}
		}
	}
};

for (let i = 0; i < T; i++)
{
	let result = 0;

	let [M, N, K] = arr.shift();
	farm = Array.from(Array(N), () => new Array(M).fill(0));
	visited = Array.from(Array(N), () => new Array(M).fill(false));
	
	while (K > 0)
	{
		K--;
		const [x, y] = arr.shift();
		farm[y][x] = 1;
	}

	for (let j = 0; j < N; j++)
	{
		for (let k = 0; k < M; k++)
		{
			if ((farm[j][k] === 1) && (visited[j][k] === false))
			{
				dfs(j, k, N, M);
				result++;
			}
		}
	}
	console.log(result);
}