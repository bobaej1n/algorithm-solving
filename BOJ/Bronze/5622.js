// 다이얼

const input = require("fs").readFileSync(0, "utf8").trim().split("");
const arr = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUQ", "WXYZ"];
let num = 0;

for (var i = 0; i < input.length; i++) {
    for (var j = 0; j < arr.length; j++) {
        if(arr[j].includes(input[i])) {
            num += j + 3;
        }
    }
}

console.log(num);