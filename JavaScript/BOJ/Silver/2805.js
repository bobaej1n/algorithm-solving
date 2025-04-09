const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const trees = input[1].split(" ").map(Number).sort((a, b) => a - b);

function cutTree(trees, target)
{
	let start = 0;
	let end = trees[trees.length - 1];
	let result = Number.MIN_SAFE_INTEGER;

	while (start <= end)
	{
		let mid = Math.floor((start + end) / 2);
		let sum = 0;

		for (let i of trees)
			if (i > mid) sum += i - mid;

		if (sum >= target)
		{
			if (mid > result) result = mid;
			start = mid + 1;
		}
		else end = mid - 1;
	}

	return result
}

console.log(cutTree(trees, M));