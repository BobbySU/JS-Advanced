function addItem() {
    const input = document.getElementById('newItemText');
    let liElenment = document.createElement('li');
    liElenment.textContent = input.value;
    document.getElementById('items').appendChild(liElenment);
    input.value = '';
}