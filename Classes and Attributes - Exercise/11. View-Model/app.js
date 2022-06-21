class Textbox {
    constructor(selector, regex) {
        this._value;
        this._elements = Array.from(document.querySelectorAll(selector));
        this._invalidSymbols = regex;
    }

    set value(value) {
        this._value = value;
        let els = this._elements;
        els.forEach(el => el.value = value);
    }

    get value() {
        return this._value;
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox", /[^a-zA-Z0-9]/);
let inputs = document.getElementsByClassName('.textbox');

inputs.addEventListener('click', function () {
    console.log(textbox.value);
});
