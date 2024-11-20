// 수 찾기

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const nArr = input[1].trim().split(" ").map(a => +a).sort((a, b) => a - b);
const mArr = input[3].trim().split(" ").map(a => +a);
let result = [];

mArr.forEach(num => {
    let start = 0;
    let end = nArr.length - 1;
    let res = false;

    while (start <= end)
    {
        let mid = parseInt((start + end) / 2);

        if (num < nArr[mid])
            end = mid - 1;
        else if (num > nArr[mid])
            start = mid + 1;
        else
        {
            res = true;
            break;
        }
    }

    if (res === true) result.push(1);
    else result.push(0);
})

console.log(result.join("\n"));