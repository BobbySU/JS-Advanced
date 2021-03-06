function solve(input) {
    let result = []
    for (const key of input) {
        let [name, level, items] = key.split(' / ');
        result.push({name, level: Number(level), items: items ? items.split(', ') : []})
    }
    return JSON.stringify(result);
}

console.log(solve(
        ['Isacc / 25 / Apple, GravityGun',
            'Derek / 12 / BarrelVest, DestructionSword',
            'Hes / 1 / Desolator, Sentinel, Antara']
    )
)

console.log(solve(
        ['Jake / 1000 / Gauss, HolidayGrenade']
    )
)