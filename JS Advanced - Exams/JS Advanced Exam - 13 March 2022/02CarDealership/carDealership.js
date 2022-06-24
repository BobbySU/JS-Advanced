class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || typeof model !== 'string') {
            throw new Error("Invalid input!");
        }
        if (horsepower < 0 || typeof horsepower !== 'number') {
            throw new Error("Invalid input!");
        }
        if (price < 0 || typeof price !== 'number') {
            throw new Error("Invalid input!");
        }
        if (mileage < 0 || typeof mileage !== 'number') {
            throw new Error("Invalid input!");
        }
        this.availableCars.push({model, horsepower, price, mileage});

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        let carIndex = this.availableCars.findIndex((e) => e.model == model);
        if (carIndex == -1) {
            throw new Error(`${model} was not found!`);
        }
        let deducton = 0;
        let carPrace = this.availableCars[carIndex].price;
        if (this.availableCars[carIndex].mileage <= desiredMileage) {
            deducton = 1;
        } else if (this.availableCars[carIndex].mileage - desiredMileage <= 40000) {
            deducton = 0.95;
        } else if (this.availableCars[carIndex].mileage - desiredMileage > 40000) {
            deducton = 0.90;
        };
        let soldPrice = carPrace * deducton;
        this.soldCars.push({
            model: this.availableCars[carIndex].model,
            horsepower: this.availableCars[carIndex].horsepower,
            soldPrice: soldPrice
        });
        this.availableCars.splice(carIndex, 1);
        this.totalIncome += soldPrice;

        return `${model} was sold for ${soldPrice.toFixed(2)}$`
    }

    currentCar() {
        if (this.availableCars.length == 0) {
            return "There are no available cars";
        } else {
            let output = this.availableCars.map(e => `---${e.model} - ${e.horsepower} HP - ${e.mileage.toFixed(2)} km - ${e.price.toFixed(2)}$`).join('\n');
            return ['-Available cars:', output].join('\n');
        }
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }
        let sortCar = [];
        if (criteria == 'horsepower') {
            sortCar = this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else {
            sortCar = this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }
        let output = sortCar.map(e => `---${e.model} - ${e.horsepower} HP - ${e.soldPrice.toFixed(2)}$`).join('\n');
        return [
            `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`,
            `-${this.soldCars.length} cars sold:`,
            output
        ].join('\n')
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));




