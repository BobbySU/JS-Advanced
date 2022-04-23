function solve(m, n) {
    let num1 = Number(m)
    let num2 = Number(n)
    let result = 0;

    for (let index = num1; index <= num2; index++) {
        result += index;   
    }
    console.log(result)
}

solve('1', '5')
solve('-8', '20')