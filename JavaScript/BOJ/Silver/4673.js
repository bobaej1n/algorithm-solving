// 셀프 넘버

let arr = [];
let result = [];

for (let i = 1; i <= 10000; i++) {
    let N = 0;
    let strNum = String(i);
        
    for (let j = 0; j < strNum.length; j++)
    {
        N += Number(strNum[j]);
    }
  
    let Num = i + N;
    arr.push(Num);
}

for (let i = 1; i <= 10000; i++)
{
    if (arr.indexOf(i) === -1)
    {
        result.push(i);
    }
}

console.log(result.join("\n"));