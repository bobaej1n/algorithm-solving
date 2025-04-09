// 카드1

let input = Number(require("fs").readFileSync(0, "utf8").toString().trim());
let arr = [];
let newArr = [];

for (var i = 0; i < input; i++) arr.push(i + 1);

while (input >= 1)
{
    newArr.push(arr.shift());
    arr.push(arr.shift());
    input--;
}

console.log(newArr.join(" "));