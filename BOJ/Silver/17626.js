// Four Squares

const n = Number(require("fs").readFileSync(0, "utf8").trim());
const arr = [0, 1];

for (let i = 2; i <= n; i++)
{
	let min_value = Infinity;
	let j = 1;

	while (Math.pow(j, 2) <= i)
	{
		min_value = Math.min(min_value, arr[i - Math.pow(j, 2)]);
		j += 1;
	}

	arr.push(min_value + 1);
}

console.log(arr[n]);