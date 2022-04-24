function solve(fruit, weight, price) {
    let weightKg = (weight/1000);
    let priceFruit = (weightKg * price);
    console.log(`I need $${priceFruit.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80)
solve('apple', 1563, 2.35)