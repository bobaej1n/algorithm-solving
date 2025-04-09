// 균형잡힌 세상

const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
input.pop();
let result = [];

for (let str of input) {
	let stack = [];
	let res = 1;

	for (let i = 0; i < str.length; i++) {
		switch (str[i]) {
			case "[":
				stack.push(str[i]);
				break;
			case "(":
				stack.push(str[i]);
				break;
			case "]":
				if (stack[stack.length - 1] == "[") {
					stack.pop();
				}
				else res = 0;
				break;
			case ")":
				if (stack[stack.length - 1] == "(") {
					stack.pop();
				}
				else res = 0;
				break;
		}
	}
	if (stack.length > 0 || !res) result.push("no");
	else result.push("yes");
}

console.log(result.join("\n"));