function solve(matrix, n) {
    let result = [matrix[0]]
    for (let i = n; i < matrix.length; i += n) {
        result.push(matrix[i])
    }
    return result;
}

console.log(solve(['5',
        '20',
        '31',
        '4',
        '20'],
    2
))
console.log(solve(['dsa',
        'asd',
        'test',
        'tset'],
    2
))
console.log(solve(['1',
        '2',
        '3',
        '4',
        '5'],
    6
))