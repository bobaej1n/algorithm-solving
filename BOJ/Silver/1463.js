// 1로 만들기

const input = Number(require("fs").readFileSync(0, "utf8").toString());
const arr = new Array(input + 1).fill(0);

for (let i = 2; i <= input; i++)
{
    arr[i] = arr[i - 1] + 1;

    if (i % 2 === 0) arr[i] = Math.min(arr[i], arr[i / 2] + 1);
    if (i % 3 === 0) arr[i] = Math.min(arr[i], arr[i / 3] + 1);
}

console.log(arr[input]);