function generateReport() {
    let colCollection = [];
    let arrWithTableHeads = [];
    let mainArr = [];

    let headCols = Array.from(document.querySelectorAll('thead th'));

    for (let i = 0; i < headCols.length; i++) {
        if (headCols[i].querySelector('input').checked) {
            let bodyCol = Array.from(document.querySelectorAll(`tbody tr td:nth-child(${i + 1})`));
            colCollection.push(bodyCol);
            let tableHead = headCols[i].querySelector('input').getAttribute("name");
            arrWithTableHeads.push(tableHead);
        }
    }

    for (let i = 0; i < colCollection[0].length; i++) {
        mainArr.push({});
    }

    for (let i = 0; i < colCollection.length; i++) {
        for (let j = 0; j < mainArr.length; j++) {
            mainArr[j][arrWithTableHeads[i]] = colCollection
                [i][j].textContent;
        }
    }
    document.getElementById('output').value = JSON.stringify(mainArr);
}