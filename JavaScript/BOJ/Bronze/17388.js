// 와글와글 숭고한

const [a, b, c] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const minNum = Math.min(a, b, c);

if (a + b + c >= 100)
{
	console.log("OK");
}
else if (minNum == a)
{
	console.log("Soongsil");
}
else if (minNum == b)
{
	console.log("Korea");
}
else if (minNum == c)
{
	console.log("Hanyang");
}