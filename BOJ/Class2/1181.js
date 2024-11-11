// 단어 정렬

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");
const repeat = Number(input[0]);
let arr = [];

for (var i = 0; i < repeat; i++) {
    arr.push(...input[i + 1].trim().split("\n"));
}

// 중복 단어 제거
const uniqueArr = arr.filter((element, index) => {
    return arr.indexOf(element) === index;
})

// 단어 길이 짧은 순대로 정렬
// 길이 같으면 사전 순
let sortedArr = uniqueArr.sort((a, b) => {
    if (a.length != b.length) return a.length - b.length;
    else {
        if (a > b) return 1;
        if (a < b) return -1;
    }
})

console.log(sortedArr.join("\n"));