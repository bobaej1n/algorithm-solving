// 곱셈

const [A, B, C] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(BigInt);

const getRest = (a, b, c) =>
{
	if (b === BigInt(1))
	{
		return a % c;
	}

	if (b % BigInt(2) === BigInt(0))
	{
		return getRest(a, b / BigInt(2), c) ** BigInt(2) % c;
	}

	else
	{
		return (getRest(a, (b - BigInt(1)) / BigInt(2), c) ** BigInt(2) * a) % c;
	}
};

const result = getRest(A, B, C).toString();

console.log(result);