// Conveyor Belt Sushi

const [co3, co4, co5] = require("fs").readFileSync(0, "utf8").trim().split("\n").map(Number);

console.log(co3 * 3 + co4 * 4 + co5 * 5);