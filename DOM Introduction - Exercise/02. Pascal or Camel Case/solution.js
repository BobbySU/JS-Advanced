function solve() {
    let text = document.getElementById('text').value.toLowerCase();
    let type = document.getElementById('naming-convention').value;
    let textArr = text.split(' ');
    let result = '';
    if (type === 'Camel Case') {
        result += textArr[0];
        for (let i = 1; i < textArr.length; i++) {
            result += textArr[i][0].toUpperCase() + textArr[i].slice(1, textArr[i].length);
        }
    } else if (type === 'Pascal Case') {
        for (let i = 0; i < textArr.length; i++) {
            result += textArr[i][0].toUpperCase() + textArr[i].slice(1, textArr[i].length);
        }
    } else {
        result = "Error!";
    }
    document.getElementById('result').textContent = result;
}