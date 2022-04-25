function solve(input) {
    const pattern = /[\w]+/g;
    let result = input.match(pattern);
    console.log(result.join(', ').toUpperCase());
}

solve('Hi, how are you?')
solve('hello')