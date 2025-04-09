// 과제 안 내신 분..?

const input = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);
const unsubmittedStudent = [];

input.sort(function(a, b) {
    return a - b;
} );

for (var i = 1; i <= 30; i++) {
    if(!input.includes(i))
        unsubmittedStudent.push(i);
}

console.log(unsubmittedStudent[0] + "\n" + unsubmittedStudent[1]);