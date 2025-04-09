// 삼각형과 세 변

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
input.pop();

for (let i = 0; i < input.length; i++)
{
	let [a, b, c] = input[i].split(' ').map((n) => Number(n));
	let sort = [a, b, c].sort((x, y) => x - y);
	let [x, y, z] = sort;

	if (z >= x + y)
	{
		console.log('Invalid');
	} else
	{
		if (x === y && y === z)
		{
			console.log('Equilateral');
		}
		else if(x !== y && x !== z && y !== z)
		{
			console.log('Scalene');
		} else
		{
			console.log('Isosceles');
		}
	}
}