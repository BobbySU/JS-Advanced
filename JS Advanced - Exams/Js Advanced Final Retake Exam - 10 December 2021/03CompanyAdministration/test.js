const {expect} = require('chai');
const {companyAdministration} = require('./companyAdministration');

describe('Test', () => {
    describe('hiringEmployee', () => {
        it('test + ', () => {
            expect(companyAdministration.hiringEmployee('Horror', 'Programmer', 20)).to.equal(`Horror was successfully hired for the position Programmer.`);
            expect(companyAdministration.hiringEmployee('Horror', 'Programmer', 3)).to.equal(`Horror was successfully hired for the position Programmer.`);
        });

        it('test - ', () => {
            expect(companyAdministration.hiringEmployee('Horror', 'Programmer', 2)).to.equal(`Horror is not approved for this position.`);
        });

        it('test error Programmer', () => {
            expect(() => companyAdministration.hiringEmployee('Horror', 'Pror', 20)).to.throw(`We are not looking for workers for this position.`);
        });
    });

    describe('calculateSalary', () => {
        it('test 0 ', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0);
        });

        it('test + ', () => {
            expect(companyAdministration.calculateSalary(20)).to.equal(300);
            expect(companyAdministration.calculateSalary(160)).to.equal(2400);
        });

        it('test + Bonus ', () => {
             expect(companyAdministration.calculateSalary(161)).to.equal(3415);
        });

        it('test error Invalid hours', () => {
            expect(() => companyAdministration.calculateSalary('Horror')).to.throw('Invalid hours');
            expect(() => companyAdministration.calculateSalary(-100)).to.throw('Invalid hours');
        });
    });

    describe('firedEmployee', () => {
        it('test + ', () => {
            expect(companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 1)).to.equal('Petar, George');
            expect(companyAdministration.firedEmployee(["Petar"], 0)).to.equal('');
        });

        it('test error range', () => {
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], -1)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 5)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 3)).to.throw('Invalid input');
        });

        it('test error input', () => {
            expect(() => companyAdministration.firedEmployee('a', 0)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(true, 0)).to.throw('Invalid input');
            expect(() => companyAdministration.firedEmployee(["Petar", "Ivan", "George"], 'str')).to.throw('Invalid input');
        });
    });
});