function solve(input) {
    if (input) {
        input = Number(input);
    } else {
        input = 5;
    }
    for (let i = 1; i <= input; i++) {
        console.log("* ".repeat(input));
    }
}

solve(1)
solve(2)
solve(5)
solve()
