const {expect} = require('chai');
const {companyAdministration} = require('./03CompanyAdministration/companyAdministration');

// ---- Add in Terminal ----
// npm init -y
// npm i cha
// module.exports = {companyAdministration}; --- in the Test File!!! ---

describe('Test', () => {
    describe('Test 1', () => {
        it('test + ', () => {

            expect(1).to.equal(1);
        });

        it('test -', () => {
            expect(1).to.equal(1);
        });

        it('test error', () => {
            expect(1).to.equal(1);
        });
    });

    describe('Test 2', () => {
        it('test + ', () => {

            expect(1).to.equal(1);
        });

        it('test - ', () => {
            expect(1).to.equal(1);
        });

        it('test error', () => {
            expect(1).to.equal(1);
        });
    });

    describe('Test 3', () => {
        it('test + ', () => {

            expect(1).to.equal(1);
        });

        it('test - ', () => {
            expect(1).to.equal(1);
        });

        it('test error', () => {
            expect(1).to.equal(1);
        });
    });

    describe('Test 4', () => {
        it('test + ', () => {

            expect(1).to.equal(1);
        });

        it('test - ', () => {
            expect(1).to.equal(1);
        });

        it('test error', () => {
            expect(1).to.equal(1);
        });
    });
});