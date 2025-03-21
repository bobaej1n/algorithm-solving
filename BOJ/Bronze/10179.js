// 쿠폰

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);

for (let t = 1; t <= T; t++)
{
    let price = parseFloat(input[t]);

    console.log(`$${(price * 0.8).toFixed(2)}`);
}