function solve(input) {
    const result = input.sort((a, b) => a - b);
    return result[0] + ' ' + result[1];
}

console.log(solve([30, 15, 50, 5]))
console.log(solve([3, 0, 10, 4, 7, 3]))