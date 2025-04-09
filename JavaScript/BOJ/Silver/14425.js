// 문자열 집합

let input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const [N, M] = input.shift().trim().split(" ").map(Number);

const arr1 = input.map((i) => i.trim());
const arr2 = arr1.slice(0, N);
const arr3 = arr1.slice(N);

const set = new Set(arr2);

let result = 0;

arr3.forEach((str) => {
    if (set.has(str))
    {
        result++;
    }
})

console.log(result);