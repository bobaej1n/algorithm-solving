// 큰 수 (BIG)

const input = BigInt(require("fs").readFileSync(0, "utf8").trim());

console.log((input % 20000303n).toString());