// 소트인사이드

console.log(require("fs").readFileSync(0, "utf8").trim().split("").map(Number).sort((a, b) => b - a).join(""));