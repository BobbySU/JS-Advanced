function extract(content) {
    const text = document.getElementById('content').textContent;
    let result = [];
    const pattern = /\((.+?)\)/g;
    let match = pattern.exec(text);
    while (match) {
        result.push(match[1]);
        match = pattern.exec(text);
    }
    //console.log(result.join('; '));
    return result.join('; ');
}