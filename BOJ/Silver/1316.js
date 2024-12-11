// 그룹 단어 체커

const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const times = input[0];
let result = 0;

for (var i = 0; i < times; i++) {
    let str = input[i + 1].trim();
    let arr = str.split("");
    let arr2 = [];

    for (var j = 0; j < str.length; j++) {
        if (j == 0) {
            arr2.push(arr[j]);
            continue;
        }
        if (arr2[j - 1] == arr[j]) arr2.push(arr[j]);
        else {
            if (arr2.includes(arr[j]))  continue;
            arr2.push(arr[j]);
        }
    }
    if (arr.join("") === arr2.join("")) result++;
}

console.log(result);