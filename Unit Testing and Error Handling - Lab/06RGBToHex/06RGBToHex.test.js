const { expect } = require('chai');
const { rgbToHexColor } = require('./06RGBToHex');

describe('RGB to Hex', () => {
       
    it('Valid input', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
        expect(rgbToHexColor(0, 255, 0)).to.equal('#00FF00');
    });
    
    it('Valid input', () => {
        expect(rgbToHexColor(255, 255, 'string')).to.equal(undefined);
        expect(rgbToHexColor(255, 'string', 255)).to.equal(undefined);
        expect(rgbToHexColor('string', 255, 255)).to.equal(undefined);
        expect(rgbToHexColor()).to.equal(undefined);
        expect(rgbToHexColor(1, 2.4, 3)).to.equal(undefined);
    });

    it('Out of range upper limit', () => {
        expect(rgbToHexColor(256, 255, 255)).to.equal(undefined);
        expect(rgbToHexColor(255, 256, 255)).to.equal(undefined);
        expect(rgbToHexColor(255, 255, 256)).to.equal(undefined);
    });
    
    it('Out of range lower limit', () => {
        expect(rgbToHexColor(-255, 255, 255)).to.equal(undefined);
        expect(rgbToHexColor(255, -255, 255)).to.equal(undefined);
        expect(rgbToHexColor(255, 255, -255)).to.equal(undefined);
    });
});