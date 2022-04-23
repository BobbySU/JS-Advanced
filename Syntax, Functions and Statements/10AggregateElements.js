function solve(input) {
    let sum = 0;
    let sumInverse = 0;
    let concat = '';
    input.forEach(element => {
        sum += element;
        sumInverse += 1/element;
        concat += element
    });
    console.log(sum);
    console.log(sumInverse);
    console.log(concat);
}

solve([1, 2, 3])
solve([2, 4, 8, 16])
