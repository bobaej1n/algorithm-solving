// J박스

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
let repeat = input.shift();

while (repeat--)
{
    const num = input[input.length - repeat - 1];

    for (let i = 0; i < num; i++)
    {
        for (let j = 0; j < num; j++)
        {
            if ((i != 0) && (i != num - 1) && (j != 0) && (j != num - 1))
            {
                process.stdout.write("J");
            }
            else
            {
                process.stdout.write("#");
            }
        }
        process.stdout.write("\n");
    }
    process.stdout.write("\n");
}