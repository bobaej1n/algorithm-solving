// 성택이의 은밀한 비밀번호

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = input.shift();

for (let i of input)
{
	let len = i.length;
	if (len >= 6 && i.length <= 9)
	{
		console.log("yes");
	}
	else
	{
		console.log("no");
	}
}