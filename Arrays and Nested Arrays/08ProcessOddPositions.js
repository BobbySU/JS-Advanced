function solve(input) {
    return input
        .filter((v, i) => i % 2 == 1)
        .map(x => x * 2)
        .reverse()
        .join(' ')
}

function solve1(input) {
    let result = []
    for (let i = 1; i < input.length; i += 2) {
        result.unshift(input[i] * 2)
    }
    return result.join(' ');
}

console.log(solve([10, 15, 20, 25]))
console.log(solve1([3, 0, 10, 4, 7, 3]))