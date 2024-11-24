const [repeat, str] = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
let result = 0;
let temp = 1;

for (var i = 0; i < repeat; i++)
{
    result += (str[i].charCodeAt() - 96) * temp;
    temp = (temp * 31) % 1234567891;
}

console.log(result % 1234567891);