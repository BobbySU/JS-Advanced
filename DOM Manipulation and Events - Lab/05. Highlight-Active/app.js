function focused() {
    Array.from(document.querySelectorAll('input'))
        .forEach(e => {
                e.addEventListener('focus', onFocus);
                e.addEventListener('blur', onBlur);
            }
        );

    function onFocus(event) {
        event.target.parentElement.className = 'focused';
        // event.target.parentElement.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentElement.className = '';
        // event.target.parentElement.classList.remove('focused');
    }
}