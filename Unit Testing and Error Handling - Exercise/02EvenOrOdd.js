function isOddOrEven(string) {
    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}

const {expect} = require('chai');

describe('Test suite', () => {
    it('Even string', () => {
        expect(isOddOrEven('a')).equal('odd');
    });
    it('Odd string', () => {
        expect(isOddOrEven('ab')).equal('even');
    });
    it('Empty string', () => {
        expect(isOddOrEven('')).equal('even');
    });
    it('Input Non-string', () => {
        expect(isOddOrEven(1)).to.be.undefined;
    });
});