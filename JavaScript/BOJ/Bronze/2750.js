// 수 정렬하기

const [n, ...arr] = require("fs").readFileSync(0, "utf8").trim().split("\n");

console.log(arr.map(Number).sort((a, b) => a - b).join("\n"));