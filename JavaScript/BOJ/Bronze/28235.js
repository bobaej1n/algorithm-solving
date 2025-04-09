// 코드마스터 2023

const input = require("fs").readFileSync(0, "utf8").toString().trim();
let result = "";

if (input === "SONGDO")
{
	result = "HIGHSCHOOL";
}
else if (input === "CODE")
{
	result = "MASTER";
}
else if (input === "2023")
{
	result = "0611";
}
else
{
	result = "CONTEST"
}

console.log(result);