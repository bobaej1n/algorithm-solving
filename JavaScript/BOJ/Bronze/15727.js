// 조별과제를 하려는데 조장이 사라졌다

const L = +require("fs").readFileSync(0, "utf8").trim();
const dis = L / 5;

console.log(L % 5 === 0 ? dis : parseInt(dis) + 1);