// 오븐 시계

const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

var hour = parseInt(input[0].split(" ")[0]);
var min = parseInt(input[0].split(" ")[1]);
var time = parseInt(input[1]);

var newHour = Math.floor((min + time) / 60);
min = min + time - newHour * 60;

if (hour + newHour >= 24) {
  hour = hour + newHour - 24;
} else hour += newHour;

console.log(hour, min);