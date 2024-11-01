// 문자열 반복

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const times = parseInt(input[0]);
var result = [];

for(var i = 0; i < times; i++) {
    const times2 = parseInt(input[i + 1].split(" ")[0]);
    const str = input[i + 1].split(" ")[1].trim();
    let str2 = "";

    for (var j = 0; j < str.length; j++) str2 += str[j].repeat(times2);
    result.push(str2);
}

console.log(result.join("\n"));