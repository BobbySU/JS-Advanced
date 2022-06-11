function search() {
    let list = Array.from(document.querySelectorAll("#towns li"));
    let search = document.getElementById('searchText').value;
    let matches = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i].textContent.includes(search)) {
            matches++;
            list[i].style.fontWeight = "bold";
            list[i].style.textDecoration = "underline";
        } else {
            list[i].style.fontWeight = "normal";
            list[i].style.textDecoration = "none";
        }
    }
    document.getElementById('result').textContent = `${matches} matches found`;
}
