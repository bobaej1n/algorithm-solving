//알람 시계

const input = require("fs").readFileSync(0, "utf8").trim().split(' ');
var hour = Number(input[0]);
var min = Number(input[1]);

if ((hour == 0) && (min < 45))
{
    hour = 23;
    min += 15;
}
else if (min < 45)
{
    hour -= 1;
    min += 15;
}
else min -= 45;

console.log(hour, min);