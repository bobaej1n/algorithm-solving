// 단어 뒤집기
const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");

for (let i = 1; i <= +input[0]; i++)
{
	let words = input[i].trim().split(" ");
	let reverseWords = [];

	for (let j = 0; j < words.length; j++)
	{
		reverseWords.push(words[j].split("").reverse().join(""));
	}
	
	console.log(reverseWords.join(" "));
}