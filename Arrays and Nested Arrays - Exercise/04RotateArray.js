function solve(matrix, n) {
    for (let i = 0; i < n; i++) {
        let num = matrix.pop(matrix[matrix.length - 1])
        matrix.unshift(num)
    }
    return matrix.join(' ');
}

console.log(solve(['1',
        '2',
        '3',
        '4'],
    2
))
console.log(solve(['Banana',
        'Orange',
        'Coconut',
        'Apple'],
    15
))