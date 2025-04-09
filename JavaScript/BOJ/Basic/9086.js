// 문자열

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const times = parseInt(input[0]);
const arr = [];

for(var i = 1; i <= times; i++) {
    var str = input[i].trim();
    var start, end = "";
    start = str[0];
    end = str[str.length - 1];
    arr.push(start + end);
}

console.log(arr.join("\n"));