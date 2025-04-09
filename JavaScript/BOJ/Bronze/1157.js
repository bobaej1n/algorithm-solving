// 단어 공부

const input = require("fs").readFileSync(0, "utf8").trim().toUpperCase();
const list = {};

input.split("").forEach(key => {
        list[key] = (list[key] || 0) + 1;
    });

const sortedList = Object.values(list).sort((a, b) => b - a);
const maxNum = sortedList[0];
const maxKey = sortedList[0] === sortedList[1]
    ? "?"
    : Object.keys(list).find(key => list[key] === maxNum);
  
console.log(maxKey);