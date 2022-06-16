function solution() {
    let text = '';
    return {
        append(stringToAppend) {
            text = text.concat(stringToAppend);
        },
        removeStart(characterToRemove) {
            text = text.slice(characterToRemove);
        },
        removeEnd(characterToRemove) {
            text = text.slice(0, text.length - characterToRemove);
        },
        print() {
            console.log(text);
        }
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();

let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
