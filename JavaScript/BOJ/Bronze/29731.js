// 2033년 밈 투표

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const pledges = [
	"Never gonna give you up",
	"Never gonna let you down",
	"Never gonna run around and desert you",
	"Never gonna make you cry",
	"Never gonna say goodbye",
	"Never gonna tell a lie and hurt you",
	"Never gonna stop"
];

const arr = input.slice(1).map(String);

// every() 메서드 사용
// 모든 요소가 조건을 만족하면 true, 하나라도 만족하지 않으면 false 리턴
const allIncluded = arr.every(sentence => pledges.includes(sentence));

console.log(allIncluded ? "No" : "Yes");