// 수 이어 쓰기 1

const input = +require("fs").readFileSync(0, "utf8").trim();
let result = 0;

for (let i = 1; i <= input; i *= 10)
{
	result += input - i + 1;
}

console.log(result);
