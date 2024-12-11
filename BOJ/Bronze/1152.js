// 단어의 개수

const input = require("fs").readFileSync(0, "utf8").trim().split(" ");
let count = 0;

for(var i = 0; i < input.length; i++) {
    if(input[i] !== '') count++;
}

console.log(count);