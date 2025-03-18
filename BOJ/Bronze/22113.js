// 창영이와 버스

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

let [allBus, useBus] = input[0].split(' ').map(Number);
let listUseBus = input[1].split(' ').map(Number);
let listAllBus = [];
let fee = 0;

if (allBus < 2 || allBus > 100 || useBus > allBus || useBus < 1) return;

for (let i = 0; i < allBus; i++)
{
    listAllBus[i] = input[i + 2].split(' ').map(Number);
}

for (let i = 0; i < useBus - 1; i++)
{
    fee += listAllBus[listUseBus[i] - 1][listUseBus[i + 1] - 1];
}

console.log(fee);