// 크로아티아 알파벳

const input = require("fs").readFileSync(0, "utf8").toString().trim();

console.log(input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=|./g, "a").length);