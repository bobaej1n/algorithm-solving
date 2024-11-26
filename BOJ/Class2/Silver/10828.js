// 스택

const input = require("fs").readFileSync("input.txt", "utf8").toString().split("\n");
const stack = [];
const result = [];

const repeat = input.shift();

for (let i = 0; i < repeat; i++) {
	switch (input[i].trim()) {
		case 'pop':
			result.push(stack.pop() || -1);
			break;

		case 'size':
			result.push(stack.length);
			break;

		case 'empty':
			result.push(stack[0] ? 0 : 1);
			break;

		case 'top':
			result.push(stack[stack.length - 1] || -1);
			break;

		default:
			stack.push(input[i].split(" ")[1]);
			break;
	}
}

console.log(result.join('\n'));