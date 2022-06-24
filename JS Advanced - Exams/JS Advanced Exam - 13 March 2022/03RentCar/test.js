const {expect} = require('chai');
const {rentCar} = require('./rentCar');

// ---- Add in Terminal ----
// npm init -y
// npm i chai
// module.exports = {companyAdministration}; --- in the Test File!!! ---

describe('Test', () => {
    describe('searchCar', () => {
        let arr = ["Volkswagen", "BMW", "Audi", "BMW"];
        it('test + ', () => {
            expect(rentCar.searchCar(arr, 'Audi')).to.equal(`There is 1 car of model Audi in the catalog!`)
            expect(rentCar.searchCar(arr, 'BMW')).to.equal(`There is 2 car of model BMW in the catalog!`)

            expect(1).to.equal(1);
        });

        it('test -', () => {
            expect(() => rentCar.searchCar(arr, 'Bobby')).to.throw('There are no such models in the catalog!')
        });

        it('test error', () => {
            expect(() => rentCar.searchCar('h', 'Audi')).to.throw('Invalid input!');
            expect(() => rentCar.searchCar(arr, 2)).to.throw('Invalid input!');
            expect(() => rentCar.searchCar('h', arr)).to.throw('Invalid input!');
        });
    });

    describe('calculatePriceOfCar', () => {
        it('test + ', () => {
            expect(rentCar.calculatePriceOfCar('Audi', 10)).to.equal(`You choose Audi and it will cost $360!`)
        });

        it('test - ', () => {
            expect(() => rentCar.calculatePriceOfCar('h', 1)).to.throw('No such model in the catalog!');
        });

        it('test error', () => {
            expect(() => rentCar.calculatePriceOfCar(1, 'da')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar('h', 'da')).to.throw('Invalid input!');
            expect(() => rentCar.calculatePriceOfCar([1, 2], 1)).to.throw('Invalid input!');
        });
    });

    describe('checkBudget', () => {
        it('test + ', () => {
            expect(rentCar.checkBudget(10, 1, 10)).to.equal(`You rent a car!`)
        });

        it('test - ', () => {
            expect(rentCar.checkBudget(11, 1, 10)).to.equal('You need a bigger budget!')
        });

        it('test error', () => {
            expect(() => rentCar.checkBudget('daad', 1, 10)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(11, 'daad', 10)).to.throw('Invalid input!');
            expect(() => rentCar.checkBudget(11, 1, 'daad')).to.throw('Invalid input!');
        });
    });
});