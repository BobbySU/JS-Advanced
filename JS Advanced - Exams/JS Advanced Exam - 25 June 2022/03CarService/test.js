const {expect} = require('chai');
const {carService} = require('./03CarService/03. Car service_Resources');

// ---- Add in Terminal ----
// npm init -y
// npm i chai
// module.exports = {companyAdministration}; --- in the Test File!!! ---

describe('Test', () => {
    describe('Test isItExpensive', () => {
        it('test + ', () => {
            expect(carService.isItExpensive('Engine')).to.equal(`The issue with the car is more severe and it will cost more money`)
            expect(carService.isItExpensive('Transmission')).to.equal(`The issue with the car is more severe and it will cost more money`)
        });

        it('test -', () => {
            expect(carService.isItExpensive('Car')).to.equal(`The overall price will be a bit cheaper`);
        });
    });

    describe('Test discount', () => {
        it('test + ', () => {
            expect(carService.discount(3, 10)).to.equal(`Discount applied! You saved 1.5$`);
            expect(carService.discount(7, 10)).to.equal(`Discount applied! You saved 1.5$`);
            expect(carService.discount(8, 10)).to.equal(`Discount applied! You saved 3$`);
            expect(carService.discount(10, 10)).to.equal(`Discount applied! You saved 3$`);
        });

        it('test - ', () => {
            expect(carService.discount(2, 10)).to.equal(`You cannot apply a discount`);
        });

        it('test error', () => {
            expect(() => carService.discount(1, 'da')).to.throw('Invalid input');
            expect(() => carService.discount('da', 1)).to.throw('Invalid input');
            expect(() => carService.discount('da', 'da')).to.throw('Invalid input');
        });
    });

    describe('Test partsToBuy', () => {
        let arrParts = [{part: "blowoff valve", price: 145}, {part: "coil springs", price: 230}];
        let arrNeeds = ["blowoff valve", "injectors"];

        it('test + ', () => {
            expect(carService.partsToBuy(arrParts, arrNeeds)).to.equal(145);
        });

        it('test - ', () => {
            expect(carService.partsToBuy([], arrNeeds)).to.equal(0);
        });

        it('test error', () => {
            expect(() => carService.partsToBuy(arrParts, 'da')).to.throw('Invalid input');
            expect(() => carService.partsToBuy(arrParts, 1)).to.throw('Invalid input');
            expect(() => carService.partsToBuy(1, arrNeeds)).to.throw('Invalid input');
            expect(() => carService.partsToBuy('da', arrNeeds)).to.throw('Invalid input');
        });
    });
});