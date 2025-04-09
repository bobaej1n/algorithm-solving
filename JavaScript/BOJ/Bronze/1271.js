// 엄청난 부자2

let fs = require("fs");
let input = fs.readFileSync("dev/stdin").toString().trim().split(" ");

let money = BigInt(input.shift());
let people = BigInt(input.shift());

console.log((money / people).toString());
console.log((money % people).toString());