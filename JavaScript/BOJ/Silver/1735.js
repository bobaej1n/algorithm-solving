// 분수 합

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [A1, B1] = input[0].split(" ").map(Number);
const [A2, B2] = input[1].split(" ").map(Number);

const gcd = (b1, b2) => b1 % b2 === 0 ? b2 : gcd(b2, b1 % b2);
let den = Math.floor((B1 * B2) / gcd(B1, B2));
let num = den / B1 * A1 + den / B2 * A2;

let tmp = den;

while (tmp)
{
	if (num == 1 || tmp == 1) break;
	if (num % tmp == 0 && den % tmp == 0)
	{
		den /= tmp;
		num /= tmp;
	}
	else tmp--;
}

console.log(num + " " + den);