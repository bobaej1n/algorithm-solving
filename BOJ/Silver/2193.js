// 이친수

const input = +require("fs").readFileSync("input.txt", "utf8").trim();
const arr = new Array(input + 1);

arr[1] = 1;
arr[2] = 1;

for (let i = 3; i < arr.length; i++)
{
  	arr[i] = BigInt(arr[i - 1]) + BigInt(arr[i - 2]);
}

console.log(String(arr[input]));