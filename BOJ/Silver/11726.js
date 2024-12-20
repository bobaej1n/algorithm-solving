// 2xn 타일링

const input = Number(require("fs").readFileSync(0, "utf8").trim());

const arr = Array(input + 1).fill(0);

arr[1] = 1;
arr[2] = 2;

for (let i = 3; i <= input; i++)
{
  	arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
}

console.log(arr[input]);