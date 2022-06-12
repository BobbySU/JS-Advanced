function solve() {
    let text = document.getElementById('input').value;
    let sentences = text.split('.')
        .filter(e => e != '')
        .map(e => e + '.');
    let element = Math.ceil(sentences.length / 3);
    for (let i = 0; i < element; i++) {
        document.getElementById('output').innerHTML += `<p>${sentences.splice(0, 3).join('')}</p>`;
    }
}