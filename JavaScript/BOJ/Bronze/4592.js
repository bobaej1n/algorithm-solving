// 중복을 없애자

const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n");

for (let i = 0; i < input.length - 1; i++)
{
    let nums = input[i].split(" ").map(Number);
    nums.shift();

    let result = [nums[0]];

    for (let j = 1; j < nums.length; j++)
    {
        if (nums[j] !== nums[j - 1])
        {
            result.push(nums[j]);
        }
    }
  
    console.log(result.join(' ') + ' $');
}