// 코딩은 체육과목 입니다

const input = parseInt(require("fs").readFileSync(0, "utf8").trim());
const times = Math.floor(input / 4);
let result ="";
let long = "long ";

for(let i = 0; i < times; i++) result += long;

console.log(result + "int");