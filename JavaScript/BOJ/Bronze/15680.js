// 연세대학교

const input = +require("fs").readFileSync(0, "utf8").trim();
const name = "YONSEI";
const slogan = "Leading the Way to the Future";

console.log(input == 0 ? name : slogan);