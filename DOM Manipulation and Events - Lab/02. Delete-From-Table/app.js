function deleteByEmail() {
    const email = document.querySelector('input[name="email"]').value;
    const list = Array.from(document.querySelectorAll('tbody tr'))
    for (const row of list) {
        if (row.children[1].textContent == email) {
            const parent = row.parentElement;
            parent.removeChild(row);
            document.getElementById('result').textContent = 'Deleted.';
        } else {
            document.getElementById('result').textContent = 'Not found.';
        }
    }
}
