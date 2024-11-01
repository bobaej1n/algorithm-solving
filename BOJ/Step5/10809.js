// 알파벳 찾기 

const input = require("fs").readFileSync(0, "utf8").trim().split("");
const result = [];

for (let i = 97; i <= 122; i++) result.push(input.indexOf(String.fromCharCode(i)));

console.log(result.join(" "));