function solve(matrix) {
    matrix.sort((a, b) => a.localeCompare(b))
    for (let i = 0; i < matrix.length; i++) {
        let n = i + 1
        matrix[i] = n + '.' + matrix[i]
    }
    return matrix.join('\n');
}

console.log(solve(["John",
    "Bob",
    "Christina",
    "Ema"]
))