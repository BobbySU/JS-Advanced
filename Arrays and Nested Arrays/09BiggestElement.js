function solve(input) {
    let result = input[0][0]
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input[i].length; j++) {
            if (result < input[i][j]) {
                result = input[i][j]
            }
        }
    }
    return result;
}

console.log(solve([[20, 50, 10],
    [8, 33, 145]]
))
console.log(solve([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
))