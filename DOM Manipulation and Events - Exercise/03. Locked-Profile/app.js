function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach(btn => btn.addEventListener('click', onClick));

    function onClick(event) {
        const profile = event.target.parentElement;
        const isAcyive = profile.querySelector('input[type="radio"][value="unlock"]').checked;

        if (isAcyive) {
            let div = profile.querySelector('div');
            if (event.target.textContent == 'Show more') {
                div.style.display = 'block';
                event.target.textContent = 'Hide it';
            } else {
                div.style.display = '';
                event.target.textContent = 'Show more';
            }
        }
    }
}