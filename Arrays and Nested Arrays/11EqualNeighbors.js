function solve(matrix) {
    let count = 0;
    for (let i = 0; i <= matrix.length - 2; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === matrix[i + 1][j]) {
                count++;
            }
        }
    }
    for (let m = 0; m < matrix.length; m++) {
        for (let l = 0; l < matrix[m].length - 1; l++) {
            if (matrix[m][l] === matrix[m][l + 1]) {
                count++;
            }
        }
    }
    return count;
}

console.log(solve([['2', '3', '4', '7', '0'],
    ['4', '0', '5', '3', '4'],
    ['2', '3', '5', '4', '2'],
    ['9', '8', '7', '5', '4']]
))
console.log(solve([['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']]
))