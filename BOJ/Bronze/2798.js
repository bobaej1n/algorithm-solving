// 블랙잭

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const [N, M] = input[0].trim().split(" ").map(Number);
const arr = [...input[1].trim().split(" ").map(Number)];
let sum = 0;
let max = 0;

for (var i = 0; i < N - 2; i++) {
    for (var j = i + 1; j < N - 1; j++) {
        for (var k = j + 1; k < N; k++) {
            sum = arr[i] + arr[j] + arr[k];
            if (sum <= M) {
                if (max < sum) max = sum;
            }
        }
    }
}

console.log(max);