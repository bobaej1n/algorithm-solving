// 사토르 마방진

let fs = require("fs");
let input = +fs.readFileSync("dev/stdin").toString().trim().split("\n");

let N = +input[0];
let str = input.slice(1, N + 1);

for (let i = 0; i < N; i++)
{
    for (let j = 0; j < N; j++)
	{
        if (str[i][j] !== str[j][i])
		{
            console.log("NO");
            process.exit(0);
        }
    }
}

console.log("YES");