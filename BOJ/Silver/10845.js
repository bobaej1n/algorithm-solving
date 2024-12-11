const input = require("fs").readFileSync(0, "utf8").toString().trim().split("\n");
const len = Number(input[0]);
let queue = [];
let result = [];

for (let i = 1; i <= len; i++) {
	let arr = input[i].split(" ");
	switch (arr[0]) {
		case 'push':
			queue.push(arr[1]);
			break;
		case 'pop':
			result.push(queue.shift() || -1);
			break;
		case 'size':
			result.push(queue.length);
			break;
		case 'empty':
			result.push(queue[0] ? 0 : 1);
			break;
		case 'front':
			result.push(queue[0] || -1);
			break;
		case 'back':
			result.push(queue[queue.length - 1] || -1);
			break;
	}
}

console.log(result.join("\n"));