// 분수찾기

let input = +require("fs").readFileSync(0, "utf8").toString().trim();
let topNum;
let botNum;
let line = 0;

while (input > 0)
{
    line++;
    input -= line;
}

let linePosition = line + input;

if (line % 2 === 1)
{
    topNum = line;
    botNum = 1;
    
    for (let i = 0; i < linePosition - 1; i++)
    {
      topNum--;
      botNum++;
    }
}

if (line % 2 === 0)
{
    topNum = 1;
    botNum = line;
    
    for (let i = 0; i < linePosition - 1; i++)
    {
      topNum++;
      botNum--;
    }
}

console.log(`${topNum}/${botNum}`);
