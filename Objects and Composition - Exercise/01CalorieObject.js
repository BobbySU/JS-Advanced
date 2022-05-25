function solve(input) {
    const objects = {}
    for (let i = 0; i < input.length; i+=2) {
        objects[input[i]]= Number(input[i+1])
    }
    console.log(objects)
}

solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])

solve(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42'])