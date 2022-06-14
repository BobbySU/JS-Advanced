function validate() {
    document.getElementById('email').addEventListener('change', onChange);

    function onChange({target}) {
        const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (pattern.test(target.value)) {
            target.classList.remove('error');
        } else {
            target.classList.add('error');
        }
    }
}