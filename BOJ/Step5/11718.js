// 그대로 출력하기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

for(var i = 0; i < input.length; i++) console.log(input[i]);