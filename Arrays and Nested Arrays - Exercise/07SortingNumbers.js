function solve(matrix) {
    matrix.sort((a, b) => a - b);
    const result = [];
    while (matrix.length > 0) {
        result.push(matrix.shift())
        result.push(matrix.pop())
    }
    return result;
}

function solve2(matrix) {
    matrix.sort((a, b) => a - b);
    const result = [];
    const mid = Math.floor(matrix.length / 2);
    for (let i = 0; i < mid; i++) {
        result.push(matrix[i])
        result.push(matrix[matrix.length - 1 - i])
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
))
console.log(solve2([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
))