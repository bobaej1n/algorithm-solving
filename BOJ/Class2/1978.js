// 소수 찾기

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = Number(input[0]);
const arr = [...input[1].trim().split(" ")];
const primeNum = [];

for (var i = 0; i < repeat; i++) {
    let count = 0;
    if (arr[i] == 1) continue;

    for (var j = 2; j <= arr[i]; j++) {
        if (arr[i] % j == 0) count++;
    }
    
    if (count == 1) primeNum.push(arr[i]);
}

console.log(primeNum.length);