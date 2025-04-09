// 좌표 정렬하기 2

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
input.shift();

let sortedArr = input.sort((a, b) => {
    if (a.trim().split(" ")[1] != b.trim().split(" ")[1])
        return a.trim().split(" ")[1] - b.trim().split(" ")[1];
    else
        return a.trim().split(" ")[0] - b.trim().split(" ")[0];
})

console.log(sortedArr.join("\n"));