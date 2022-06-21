class Hex {
    constructor(value) {
        this.value = Number(value);
        this.hex = value;
    }

    set hex(value) {
        this._hex = '0x' + value.toString(16).toUpperCase();
    }

    valueOf() {
        return this.value;
    }

    toString() {
        return this._hex;
    }

    plus(number) {
        let newObj = {};
        if (typeof number == 'number') {
            newObj = new Hex(this.value + number);
        } else if (typeof number == 'object') {
            newObj = new Hex(this.value + number.value);
        }
        console.log()
        return newObj;
    }

    minus(number) {
        let newObj = {};
        if (typeof number == 'number') {
            newObj = new Hex(this.value - number);
        } else if (typeof number == 'object') {
            newObj = new Hex(this.value - number.value);
        }
        return newObj;
    }

    parse(string) {
        return parseInt(string, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256; //console.log(FF.valueOf() + 1);
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'));
