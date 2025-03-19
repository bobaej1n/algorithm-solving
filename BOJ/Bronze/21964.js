// 선린인터넷고등학교 교가

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const len = +input[0];
const str = input[1].split("");

console.log(str.slice(len - 5).join(""));