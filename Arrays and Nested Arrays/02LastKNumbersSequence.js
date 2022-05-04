function solve(num1, num2) {
    const n = Number(num1)
    const k = Number(num2)
    let result = [1];
    for (let i = 1; i < n; i++) {
        let sum = 0;
        let start = 0;
        if ((i - k) >= 0) {
            start = i - k;
        }
        for (let j = start; j < i; j++) {
            sum += result[j]
        }
        result.push(sum);
    }
    return result
}

console.log(solve(6, 3))
console.log(solve(8, 2))
