// 스위트콘 가격 구하기

const input = +require("fs").readFileSync("input.txt", "utf8").trim();

console.log(input / 11 * 10);