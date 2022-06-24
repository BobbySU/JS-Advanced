class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let products = new Set;

        vegetables.forEach(e => {
            let [type, quantity, price] = e.split(' ');
            let productIndex = this.availableProducts.findIndex((eql) => eql.type == type);

            if (productIndex !== -1) {
                this.availableProducts[productIndex].quantity += Number(quantity);
                if (this.availableProducts[productIndex].price < Number(price)) {
                    this.availableProducts[productIndex].price = Number(price);
                }
            } else {
                this.availableProducts.push({type, quantity: Number(quantity), price: Number(price)})
            }
            products.add(type);
        });

        return `Successfully added ${Array.from(products.values()).join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach(e => {
            let [type, quantity] = e.split(' ');
            let productIndex = this.availableProducts.findIndex((eql) => eql.type == type);

            if (productIndex == -1) {
                throw new Error(`${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`)
            }
            if (this.availableProducts[productIndex].quantity < Number(quantity)) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is ${totalPrice.toFixed(2)}.`);
            }
            totalPrice += this.availableProducts[productIndex].price * Number(quantity);
            this.availableProducts[productIndex].quantity -= Number(quantity);
        });

        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let productIndex = this.availableProducts.findIndex((eql) => eql.type == type);
        if (productIndex == -1) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (this.availableProducts[productIndex].quantity < Number(quantity)) {
            this.availableProducts[productIndex].quantity = 0;
            return `The entire quantity of the ${type} has been removed.`
        }
        this.availableProducts[productIndex].quantity -= Number(quantity);

        return `Some quantity of the ${type} has been removed.`
    }

    revision() {
        const storageSort = this.availableProducts.sort((a, b) => a.price - b.price);
        const output = storageSort.map(e => `${e.type}-${e.quantity}-$${e.price}`).join('\n');

        return [
            `Available vegetables:`,
            output,
            `The owner of the store is ${this.owner}, and the location is ${this.location}.`
        ].join('\n')
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

