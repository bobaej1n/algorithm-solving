// 폰 노이만과 파리

const [S, T, D] = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const time = D / (S * 2);

console.log(T * time);