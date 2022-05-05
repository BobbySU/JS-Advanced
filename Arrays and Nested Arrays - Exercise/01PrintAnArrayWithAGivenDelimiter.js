function solve(matrix, del) {
    return matrix.join(del);
}

console.log(solve(['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
))
console.log(solve(['How about no?',
        'I',
        'will',
        'not',
        'do',
        'it!'],
    '_'
))