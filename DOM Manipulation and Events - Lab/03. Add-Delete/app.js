function addItem() {
    const input = document.getElementById('newItemText');
    if (input.value != '') {
        let liElenment = document.createElement('li');
        liElenment.textContent = input.value;
        const deleteBtn = document.createElement('a');
        deleteBtn.textContent = '[Delete]';
        deleteBtn.href = '#';
        liElenment.appendChild(deleteBtn);
        deleteBtn.addEventListener('click', onDelete)
        document.getElementById('items').appendChild(liElenment);
        input.value = '';
    }

    function onDelete(event) {
        event.target.parentElement.remove()
    }
}

