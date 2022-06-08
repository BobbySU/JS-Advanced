function solve(input) {
    let towns = [];
    class Town{
        constructor(town, latitude, longitude){
            this.Town = town;
            this.Latitude = Number(latitude);
            this.Longitude = Number(longitude);
        }
    }
    for (let i = 1; i < input.length; i++) {
        let text = input[i].split('|').map(e=>e.trim()).filter(e=>e.length)
        let town = new Town(text[0], Number(text[1]).toFixed(2), Number(text[2]).toFixed(2))
        towns.push(town)
    }
    console.log(JSON.stringify(towns))
}

solve(
    ['| Town | Latitude | Longitude |',
        '| Sofia | 42.696552 | 23.32601 |',
        '| Beijing | 39.913818 | 116.363625 |']
)

solve(
    ['| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |']
)