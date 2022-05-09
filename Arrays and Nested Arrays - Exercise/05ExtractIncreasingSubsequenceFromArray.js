function solve(matrix) {
    let result = []
    if (matrix.length >= 0) {
        result = [matrix[0]]
        let maxNum = matrix[0]
        for (let i = 0; i < matrix.length; i++) {
            if (matrix[i] > maxNum) {
                result.push(matrix[i])
                maxNum = matrix[i]
            }
        }
    }
    return result;
}
 
console.log(solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
))
console.log(solve([1,
    2,
    3,
    4]
))
console.log(solve([20,
    3,
    2,
    15,
    6,
    1]
))