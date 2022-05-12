function solve(matrix) {
    let result = false;
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
         sum += matrix[j][i]
        } 
    }
    if(sum%9==0){
        result = true;
    }
    return result;
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