function solve(input) {
    let products = {};
    input.forEach(element => {
        let [town, product, price] = element.split(' | ');
        price = Number(price);
        if (!products[product]) {
            products[product] = {town, price};
        } else {
            if (price < products[product].price) {
                products[product] = {town, price};
            }
        }
    });
    for (const key in products) {
        console.log(`${key} -> ${products[key].price} (${products[key].town})`)
    }
}

solve(
    ['Sample Town | Sample Product | 1000',
        'Sample Town | Orange | 2',
        'Sample Town | Peach | 1',
        'Sofia | Orange | 3',
        'Sofia | Peach | 2',
        'New York | Sample Product | 1000.1',
        'New York | Burger | 10']
)
