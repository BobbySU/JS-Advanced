function encodeAndDecodeMessages() {
    let textArea = document.querySelectorAll('textarea');
    let buttons = document.querySelectorAll('button');

    buttons[0].addEventListener('click', code);
    buttons[1].addEventListener('click', decode);

    function code(event) {
        let textCode = '';
        let text = textArea[0].value;
        for (let i = 0; i < text.length; i++) {
            textCode += String.fromCharCode(text[i].charCodeAt(0) + 1)
        }
        textArea[1].value = textCode;
        textArea[0].value = '';
    }

    function decode(event) {
        let text = '';
        let textCode = textArea[1].value;
        for (let i = 0; i < textCode.length; i++) {
            text += String.fromCharCode(textCode[i].charCodeAt(0) - 1)
        }
        textArea[1].value = text;
    }
}