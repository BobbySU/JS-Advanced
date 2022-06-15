function addItem() {
    let textInput = document.getElementById('newItemText');
    let valueInput = document.getElementById('newItemValue');

    let optionElenment = document.createElement('option');
    optionElenment.textContent = textInput.value;
    optionElenment.value = valueInput.value;
    document.getElementById('menu').appendChild(optionElenment)

    textInput.value = '';
    valueInput.value = '';
}