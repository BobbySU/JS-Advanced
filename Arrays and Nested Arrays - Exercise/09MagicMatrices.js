function solve(matrix) {
    let sum = 0;
    matrix[0].forEach(x => sum += x);

    for (let row = 1; row < matrix.length; row++) {
        let rowSum = 0;
        matrix[row].forEach(x => rowSum += x);
        if (rowSum != sum) {
            return false;
        }
    }

    for (let col = 0; col < matrix[0].length; col++) {
        let colSum = 0;
        for (let row = 0; row < matrix.length; row++) {
            colSum += matrix[row][col];
        }
        if (colSum != sum) {
            return false;
        }
    }
    return true;
}

console.log(solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
))
console.log(solve([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]
))
console.log(solve([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]
))