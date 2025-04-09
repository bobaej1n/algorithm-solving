// 직각삼각형

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

for (var i = 0; i < input.length - 1; i++) {
    let arr = [...input[i].trim().split(" ").map(Number)];
    let sortedArr = Object.values(arr).sort((a, b) => b - a);

    console.log(
        Math.pow(sortedArr[0], 2) == Math.pow(sortedArr[1], 2) + Math.pow(sortedArr[2], 2)
        ? "right" : "wrong"
    );
}