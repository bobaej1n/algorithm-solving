// 팩토리얼 3

const input = BigInt(require("fs").readFileSync(0, "utf8").trim());

function factorial(start, end) {
    if (start > end)
    {
        return 1n;
    }
    if (start === end)
    {
        return start;
    }
    if (end - start === 1n)
    {
        return start * end;
    }

    let mid = (start + end) / 2n;
    
    return factorial(start, mid) * factorial(mid + 1n, end);
}

console.log(factorial(1n, input).toString());