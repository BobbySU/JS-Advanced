window.addEventListener('load', solve);

function solve() {
    const input = {
        typeProduct: document.getElementById('type-product'),
        description: document.getElementById('description'),
        clientName: document.getElementById('client-name'),
        clientPhone: document.getElementById('client-phone')
    };
    const lists = {
        receivedOrders: document.getElementById('received-orders'),
        completedOrders: document.getElementById('completed-orders')
    };
    const submitBtn = document.querySelector('#right form button');
    submitBtn.addEventListener('click', submit);
    const clearBtn = document.querySelector('#completed-orders button');
    clearBtn.addEventListener('click', clear);

    function createTag(tag, text, className = null) {
        let el = document.createElement(tag);
        if (text != '') {
            el.textContent = text;
        }
        if (className) {
            el.className = className;
        }
        return el;
    }

    function submit(event) {
        event.preventDefault();

        const typeProduct = input.typeProduct.value;
        const description = input.description.value;
        const clientName = input.clientName.value;
        const clientPhone = input.clientPhone.value;

        if (typeProduct == '' || description == '' || clientName == '' || clientPhone == '') {
            return;
        }

        let div = createTag('div', '', 'container');

            //Info
            let product = createTag('h2', 'Product type for repair: ' + typeProduct);
            div.appendChild(product);
            let client = createTag('h3', 'Client information: ' + clientName + ', ' + clientPhone);
            div.appendChild(client);
            let descriptionText = createTag('h4', 'Description of the problem: ' + description);
            div.appendChild(descriptionText);

            //Buttons
            let startBtn = createTag('button', 'Start repair', 'start-btn');
            div.appendChild(startBtn);
            let finishBtn = createTag('button', 'Finish repair', 'finish-btn');
            finishBtn.disabled = true;
            div.appendChild(finishBtn);

        //  ======= ne raboti !!! (finishBtn.disabled = true;) ===========
        // let div = document.createElement('div');
        // div.className = 'container';
        // div.innerHTML = `
        // <h2>Product type for repair: ${typeProduct}</h2>
        // <h3>Client information: ${clientName}, ${clientPhone}</h3>
        // <h4>Description of the problem: ${description}</h4>
        // <botton class = "start-btn">Start repair</botton>
        // <botton class = "finish-btn">Finish repair</botton>`;

        // let startBtn = div.querySelector('.start-btn');
        // let finishBtn = div.querySelector('.finish-btn');
        // finishBtn.disabled = true;
        
        lists.receivedOrders.appendChild(div);

        startBtn.addEventListener('click', startRepair);
        finishBtn.addEventListener('click', finishRepair);

        input.typeProduct.value = '';
        input.description.value = '';
        input.clientName.value = '';
        input.clientPhone.value = '';

        function startRepair(e) {
            // console.log('startRepair')
            startBtn.disabled = true;
            finishBtn.disabled = false;
        }

        function finishRepair() {
            // console.log('finishRepair')
            lists.completedOrders.appendChild(div);
            startBtn.remove();
            finishBtn.remove();
        }
    }

    function clear() {
        // console.log('clear')
        // let text = document.querySelectorAll('#completed-orders>.container');
        // text.forEach(e => e.remove());
        let completedOrders = Array.from(document.querySelectorAll('section#completed-orders div.container'));
        completedOrders.forEach(el => el.remove());
    }
}