function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {
        let list = Array.from(document.querySelectorAll("tbody tr"));
        let search = document.getElementById('searchField');
        for (const element of list) {
            element.classList.remove("select");
            if (search.value != '') {
                if (element.innerHTML.includes(search.value)) {
                    element.classList.add("select");
                }
            }
        }
        search.value = '';
    }
}