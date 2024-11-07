// 음계

const input = require("fs").readFileSync(0, "utf8").split(" ").map(Number);
let result = 0;

for(var i = 0; i < input.length; i++) {
    if (input[i] < input[i + 1]) result++;
}

switch (result) {
    case 7:
        console.log("ascending");
        break;
    case 0:
        console.log("descending");
        break;
    default:
        console.log("mixed");
}