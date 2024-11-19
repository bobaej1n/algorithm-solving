// 팩토리얼 0의 개수

let input = Number(require("fs").readFileSync(0, "utf8").trim());
let result = 0;

// 5의 배수마다 맨 끝의 0의 개수가 한 개씩 늘어남
while (input >= 5)
{
    result += parseInt(input / 5);
    input /= 5;
}

console.log(result);