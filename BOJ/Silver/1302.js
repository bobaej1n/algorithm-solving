// 베스트셀러

let [N, ...arr] = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");

let maxCount = 0;
let maxName = "";
const dict = {};

arr.forEach(name => {
    if (dict[name])
    {
        dict[name]++;
    } 
    else
    {
        dict[name] = 1;
    }


    if (dict[name] === maxCount && name < maxName)
    {
        maxName = name;
    } 
    else if (dict[name] > maxCount)
    {
        maxName = name;
        maxCount = dict[name];
    }
});


console.log(maxName);