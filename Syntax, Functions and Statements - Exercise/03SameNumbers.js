function solve(input) {
    const stringInput = String(input);
    let sum = 0;
    let isSame = true;
    for (let i = 0; i < stringInput.length; i++) {
        if (i < stringInput.length - 1) {
            if (stringInput[i] !== stringInput[i + 1]) {
                isSame = false;
            }
        }
        sum += Number(stringInput[i]);
    }
    console.log(isSame)
    console.log(sum)
}

solve(2222222)
solve(1234)