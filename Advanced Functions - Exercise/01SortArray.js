function solve(input, type) {
    if (type == 'asc') {
        input.sort((a, b) => a - b);
    } else {
        input.sort((a, b) => b - a);
    }
    return input;
}

function solve2(input, type) {
    let method = {
        asc: (a, b) => a - b,
        desc: (a, b) => b - a
    }
    input.sort(method[type])
    return input;
}


console.log(solve([14, 7, 17, 6, 8], 'asc'));

console.log(solve2([14, 7, 17, 6, 8], 'desc'));
