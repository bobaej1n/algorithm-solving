// UOS 문자열

const input = parseInt(require("fs").readFileSync(0, "utf8").trim());
const remainder = input % 3;
var result;

if (remainder === 1) result = "U";
else if (remainder === 2) result = "O";
else result = "S";

console.log(result);