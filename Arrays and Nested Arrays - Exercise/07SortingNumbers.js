function solve(matrix) {
    matrix.sort((a, b) => a - b);
    const result = [];
    while (matrix.length > 0) {
        result.push(matrix.shift())
        result.push(matrix.pop())
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]
))