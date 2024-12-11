// 영수증

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const total = parseInt(input[0]);
const itemType = parseInt(input[1]);
let sum = 0;

for(let i = 2; i < itemType + 2 ; i++) {
    let data = input[i].split(' ');
    let realS = parseInt(data[0]) * parseInt(data[1]);
    sum += realS;
}

console.log(total === sum ? "Yes" : "No");