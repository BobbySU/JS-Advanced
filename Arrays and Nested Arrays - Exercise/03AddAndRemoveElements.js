function solve(matrix) {
    let n = 1
    let result = []
    for (let i = 0; i < matrix.length; i++) {
        switch (matrix[i]) {
            case 'add':
                result.push(n)
                n++
                break;
            case 'remove':
                result.pop(matrix[i])
                n++
                break;
        }
    }
    return result.length <= 0 ? 'Empty' : result.join('\n');
}

console.log(solve(['add',
    'add',
    'add',
    'add']
))
console.log(solve(['add',
    'add',
    'remove',
    'add',
    'add']
))
console.log(solve(['remove',
    'remove',
    'remove']
))