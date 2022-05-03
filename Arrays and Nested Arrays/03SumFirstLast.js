function solve(input) {
    const first = Number([...input].shift())
    const last = Number([...input].pop())
    return first + last;
}

console.log(solve(['20', '30', '40']))
console.log(solve(['5', '10']))

