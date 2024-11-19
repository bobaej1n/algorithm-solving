// 팩토리얼 0의 개수

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const repeat = Number(input.shift());
const arr = input.map((element) => element.split(" ").map(Number));
const result = new Array(repeat).fill(1);

for (var i = 0; i < repeat; i++)
{
    for (var j = 0; j < repeat; j++)
    {
        if ((i !== j) && (arr[i][0] < arr[j][0]) && (arr[i][1] < arr[j][1]))
            result[i]++;
    }
}

console.log(result.join(" "));