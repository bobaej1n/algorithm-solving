// ACM 호텔

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const times = input[0];

for (var i = 1; i <= times; i++) {
    let [H, W, N] = input[i].trim().split(" ").map(Number);
    let newH = N % H == 0 ? H : N % H;
    let newW = Math.ceil(N / H);

    newW < 10 ? console.log(`${newH}0${newW}`) : console.log(`${newH}${newW}`);
}