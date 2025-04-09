// 돌 게임 2

let input = +require("fs").readFileSync(0, "utf8").trim();

console.log(input % 2 === 0 ? "CY" : "SK");