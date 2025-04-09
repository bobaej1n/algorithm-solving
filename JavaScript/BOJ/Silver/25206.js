// 너의 평점은

const input = require("fs").readFileSync("input.txt", "utf8").trim().split("\n");
let subjectSum = 0;
let scaleSum = 0;
const gradeScale = {
    "A+": 4.5,
    "A0": 4.0,
    "B+": 3.5,
    "B0": 3.0,
    "C+": 2.5,
    "C0": 2.0,
    "D+": 1.5,
    "D0": 1.0,
    "F": 0.0
}

for (var i = 0; i < 20; i ++) {
    let scale = parseInt(input[i].split(" ")[1]);
    let grade = Number(gradeScale[input[i].split(" ")[2].trim()]);

    if (Number.isNaN(grade) === true) continue;
    else {
        subjectSum += scale * grade;
        scaleSum += scale;
    }
}

console.log(subjectSum / scaleSum);