window.addEventListener("load", solve);

function solve() {
    const input = {
        make: document.getElementById('make'),
        model: document.getElementById('model'),
        year: document.getElementById('year'),
        fuel: document.getElementById('fuel'),
        originalCost: document.getElementById('original-cost'),
        sellingPrice: document.getElementById('selling-price')
    };

    const lists = {
        carsList: document.getElementById('table-body'),
        soldCars: document.getElementById('cars-list'),
        profit: document.getElementById('profit')
    };

    const publishBtn = document.getElementById('publish');
    publishBtn.addEventListener('click', publish);

    let totalSum = 0;

    function publish(event) {
        event.preventDefault();

        const make = input.make.value;
        const model = input.model.value;
        const year = input.year.value;
        const fuel = input.fuel.value;
        const originalCost = input.originalCost.value;
        const sellingPrice = input.sellingPrice.value;

        if (make == '' || model == '' || year == '' || fuel == '' || originalCost == ''
            || sellingPrice == '' || (sellingPrice - originalCost) <= 0 || sellingPrice <= 0 || originalCost <= 0) {
            return;
        }

        const tr = document.createElement('tr');
        tr.className = 'row';
        tr.innerHTML = `
        <td>${make}</td>
        <td>${model}</td>
        <td>${year}</td>
        <td>${fuel}</td>
        <td>${originalCost}</td>
        <td>${sellingPrice}</td>
        <td>
        <botton class= "action-btn edit">Edit</botton>
        <botton class= "action-btn sell">Sell</botton>
        </td>`;

        const editBtn = tr.querySelector('.edit');
        const sellBtn = tr.querySelector('.sell');
        editBtn.addEventListener('click', edit);
        sellBtn.addEventListener('click', sell);

        lists.carsList.appendChild(tr);

        input.make.value = '';
        input.model.value = '';
        input.year.value = '';
        input.fuel.value = '';
        input.originalCost.value = '';
        input.sellingPrice.value = '';

        function edit() {
            input.make.value = make;
            input.model.value = model;
            input.year.value = year;
            input.fuel.value = fuel;
            input.originalCost.value = originalCost;
            input.sellingPrice.value = sellingPrice;
            tr.remove();
        }

        function sell() {
            const li = document.createElement('li');
            li.className = 'each-list';
            li.innerHTML = `
            <span>${make}</span>
            <span>${year}</span>
            <span>${sellingPrice - originalCost}</span>
            `;
            lists.soldCars.appendChild(li);
            tr.remove();
            totalSum += sellingPrice - originalCost;
            lists.profit.textContent = `${totalSum.toFixed(2)}`;
        }
    }
}
