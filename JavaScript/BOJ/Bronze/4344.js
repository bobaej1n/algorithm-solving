// 평균은 넘겠지

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const num = input[0] * 1;

for (let i = 1; i <= num; i++)
{
    let score = input[i].split(" ");
    let num2 = score.shift() * 1;
    let avg = score.reduce((pre, cur) => pre += cur * 1, 0);
    let count = 0;

    avg /= num2;

    for (let j = 0; j < num2; j++)
    {
        if (score[j] > avg)
        {
            count++;
        }
    }
    
    let result = ((count / num2) * 100).toFixed(3);

    console.log(result + "%");
}
