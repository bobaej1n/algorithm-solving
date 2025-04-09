const input = require("fs").readFileSync(0, "utf8").trim().split("\n");

let N = input[1].split(" ").map(Number).reduce((acc, cur) => {
	acc[cur] = (acc[cur] || 0 ) + 1;
	return acc
}, {});

let M = input[3].split(" ").map(Number).map(a => N[a] ? N[a] : 0).join(" ");

console.log(M);