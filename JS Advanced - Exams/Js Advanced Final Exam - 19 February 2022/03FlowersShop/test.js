const {expect} = require('chai');
const {flowerShop} = require('./flowerShop');

// ---- Add in Terminal ----
// npm init -y
// npm i chai
// module.exports = {companyAdministration}; --- in the Test File!!! ---

describe('Test', () => {
    describe('calcPriceOfFlowers', () => {
        it('test + ', () => {
            expect(flowerShop.calcPriceOfFlowers('flower', 10, 10)).to.equal(`You need $100.00 to buy flower!`)
          
        });

        it('test error', () => {
            expect(() => flowerShop.calcPriceOfFlowers(1, 10, 10)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 'flower', 10)).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers('flower', 10, 'flower')).to.throw('Invalid input!');
            expect(() => flowerShop.calcPriceOfFlowers(12, 'flower', 'flower')).to.throw('Invalid input!');
        });
    });

    describe('checkFlowersAvailable', () => {
        let arr = ["Rose", "Lily", "Orchid"];
        it('test + ', () => {
            expect(flowerShop.checkFlowersAvailable('Rose', arr)).to.equal(`The Rose are available!`);
        });

        it('test - ', () => {
            expect(flowerShop.checkFlowersAvailable('Ro', arr)).to.equal(`The Ro are sold! You need to purchase more!`);
        });
    });

    describe('sellFlowers', () => {
        let arr = ["Rose", "Lily", "Orchid", "Rose"];
        it('test + ', () => {
            expect(flowerShop.sellFlowers(arr, 1)).to.equal(`Rose / Orchid / Rose`);
        });

        it('test error', () => {
            expect(() => flowerShop.sellFlowers(12, 0)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(arr, -1)).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(arr, 'dade')).to.throw('Invalid input!');
            expect(() => flowerShop.sellFlowers(arr, 4)).to.throw('Invalid input!');

        });
    });
});