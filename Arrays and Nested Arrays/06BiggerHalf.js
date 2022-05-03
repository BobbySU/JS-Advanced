function solve(input) {
    input.sort((a, b) => a - b);
    const mid = Math.floor(input.length / 2)
    const result = input.slice(mid)
    return result;
}

console.log(solve([4, 7, 2, 5]))
console.log(solve([3, 19, 14, 7, 2, 19, 6]))