function solve(input) {
    let productIn = {};
    input.forEach(element => {
        let [product, price] = element.split(' : ');
        price = Number(price);
        let index = product[0];
        if (!productIn[index]) {
            productIn[index] = {};
        }
        productIn[index][product] = price;
    });
    let initialSort = Object.keys(productIn).sort((a, b) => a.localeCompare(b));
    for (let key of initialSort) {
        let products = Object.entries(productIn[key]).sort((a, b) => a[0].localeCompare(b[0]));
        console.log(key);
        products.forEach((el) => {
            console.log(`  ${el[0]}: ${el[1]}`);
        })
    }
}

solve(
    ['Appricot : 20.4',
        'Fridge : 1500',
        'TV : 1499',
        'Deodorant : 10',
        'Boiler : 300',
        'Apple : 1.25',
        'Anti-Bug Spray : 15',
        'T-Shirt : 10']
)

solve(
    ['Banana : 2',
        'Rubic`s Cube : 5',
        'Raspberry P : 4999',
        'Rolex : 100000',
        'Rollon : 10',
        'Rali Car : 2000000',
        'Pesho : 0.000001',
        'Barrel : 10']
)