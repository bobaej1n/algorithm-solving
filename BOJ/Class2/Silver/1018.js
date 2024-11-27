const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
let [size, ...arr] = input;
let [M, N] = size.split(" ");
arr = arr.map((i) => i.split(""));
const result = [];

const white = [
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
];

const black = [
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
	"BWBWBWBW",
	"WBWBWBWB",
];

function whiteFirst(x, y)
{
	let count = 0;
	for (let i = 0; i < 8; i++)
	{
		for (let j = 0; j < 8; j++)
		{
			if (arr[i + x][j + y] !== white[i][j]) count++;
		}
	}
	return count;
}

function blackFirst(x, y)
{
	let count = 0;
	for (let i = 0; i < 8; i++)
	{
		for (let j = 0; j < 8; j++)
		{
			if (arr[i + x][j + y] !== black[i][j]) count++;
		}
	}
	return count;
}

for (let i = 0; i < M - 7; i++)
{
	for (let j = 0; j < N - 7; j++)
	{
		result.push(whiteFirst(i, j));
		result.push(blackFirst(i, j));
	}
}

console.log(Math.min(...result));