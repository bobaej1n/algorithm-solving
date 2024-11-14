// 벌집

const input = Number(require("fs").readFileSync(0, "utf8").trim().split("\n"));

let room = 1;
let sum = 1;

while (sum < input)
{
    sum += 6 * room;
    room++;
}

console.log(room);