function solve(input) {
    const cities = {}
    for (const nameCity of input) {
        let [name, population] = nameCity.split(' <-> ')
        population = Number(population)
        if (cities[name] != undefined) {
            population += cities[name]
        }
        cities[name] = population
    }
    for (let city in cities) {
        console.log(`${city} : ${cities[city]}`)
    }
}

solve(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000']
)

solve(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000']
)