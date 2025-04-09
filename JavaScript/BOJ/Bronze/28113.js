// 정보섬의 대중교통

const [N, A, B] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);

if (A < B)
{
	console.log("Bus");
}
else if (A > B)
{
	console.log("Subway");
}
else
{
	console.log("Anything")
}