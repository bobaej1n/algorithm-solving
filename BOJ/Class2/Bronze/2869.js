const input = require("fs").readFileSync(0, "utf8").toString().trim().split(" ");
const A = input[0]; 
const B = input[1];
const V = input[2];

console.log(Math.ceil((V - B) / (A - B)));