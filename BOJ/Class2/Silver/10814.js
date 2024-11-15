// 나이순 정렬

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n"));