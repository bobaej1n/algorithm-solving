// 비밀번호 찾기

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);

const addressMap = new Map();

for (let i = 0; i < N; i++)
    addressMap.set(input[i].trim().split(" ")[0], input[i].trim().split(" ")[1]);

for (let i = N; i < N + M; i++ )
    console.log(addressMap.get(input[i].toString().trim()));