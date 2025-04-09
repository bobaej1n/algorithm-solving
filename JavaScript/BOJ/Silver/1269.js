// 대칭 차집합

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const set1 = new Set(input[1].split(" ").map(Number));
const set2 = new Set(input[2].split(" ").map(Number));

const intersectionSize = [...set1].filter((v) => set2.has(v)).length;
const unionSize = [...set1, ...set2].length;

console.log(unionSize - intersectionSize *2);