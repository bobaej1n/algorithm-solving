// OX 퀴즈

const input = require("fs").readFileSync(0, "utf8").toString().split("\n");
const times = input[0];

for(var i = 1; i <= times; i++) {
    let str = input[i].trim().split("");
    let answer = 0;
    let answerSum = 0;
    for(var j = 0; j < str.length; j++) {
        if(str[j] == "O") {
            answer++;
            answerSum += answer;
        } else answer = 0;
    }
    console.log(answerSum);
}