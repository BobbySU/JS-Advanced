function solve(object) {
    let vol = 0
    if (object.power <= 90) {
        object.power = 90;
        vol = 1800;
    } else if (object.power <= 120) {
        object.power = 120;
        vol = 2400;
    } else {
        object.power = 200;
        vol = 3500;
    }
    object.wheelsize % 2 == 0 ? object.wheelsize = object.wheelsize - 1 : object.wheelsize;
    return {
        model: object.model,
        engine: {
            power: object.power,
            volume: vol
        },
        carriage: {
            type: object.carriage,
            color: object.color,
        },
        wheels: new Array(4).fill(object.wheelsize)
    };
}

console.log(solve(
        {
            model: 'VW Golf II',
            power: 90,
            color: 'blue',
            carriage: 'hatchback',
            wheelsize: 14
        }
    )
)

console.log(solve(
        {
            model: 'Opel Vectra',
            power: 110,
            color: 'grey',
            carriage: 'coupe',
            wheelsize: 17
        }
    )
)