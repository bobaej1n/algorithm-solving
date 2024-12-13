// 팰린드롬인지 확인하기

const input = require("fs").readFileSync(0, "utf8").toString().trim();
const reverse = input.split("").reverse().join("");

console.log(input === reverse ? 1 : 0);