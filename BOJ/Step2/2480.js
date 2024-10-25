// 주사위 세개

const input = require("fs").readFileSync(0, "utf8").trim().split(" ").map(Number);
const dice1 = input[0];
const dice2 = input[1];
const dice3 = input[2];
var prizeMoney = 0;

if (dice1 == dice2 && dice1 == dice3)
{
  prizeMoney = 10000 + dice1 * 1000;
}
else if (dice1 == dice2 || dice1 == dice3 || dice2 == dice3)
{
    if (dice1 == dice2 || dice1 == dice3)
    {
        prizeMoney = 1000 + dice1 * 100;
    }
    else
    {
        prizeMoney = 1000 + dice2 * 100;
    }
}
else
{
    prizeMoney = (Math.max(dice1, dice2, dice3)) * 100;
}

console.log(prizeMoney);
