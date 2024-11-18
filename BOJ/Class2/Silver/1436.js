// 영화감독 숌

const input = Number(require("fs").readFileSync(0, "utf8").trim());
let count = 1;
let six = 666;

while (count !== input) {
    six++;
    if (String(six).includes("666")) count++;
}

console.log(six);