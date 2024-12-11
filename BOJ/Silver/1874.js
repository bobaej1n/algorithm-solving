// 스택 수열

let input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n").map((i) => Number(i));
const repeat = input.shift();

let result = [];
let stack = [];
let stackNum = 1;

for (let i = 0; i < repeat; i++)
{
    let num = input[i];

	while (stackNum <= num)
	{
        stack.push(stackNum);
        stackNum++;
        result.push("+");
    }

    let stackPop = stack.pop();
    result.push("-");
    
	if (stackPop !== num)
	{
        result = ["NO"];
        break;
    }   
}

console.log(result.join("\n"));
