function solve() {
    document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
    let totalPrice = 0;
    let names = [];

    function onClick(event) {
        if (event.target.tagName == 'BUTTON' && event.target.classList.contains('add-product')) {
            const product = event.target.parentElement.parentElement;
            const productName = product.querySelector('.product-title').textContent;
            const productPrice = Number(product.querySelector('.product-line-price').textContent);
            totalPrice += productPrice;
            if (!names.includes(productName)) {
                names.push(productName)
            }
            document.querySelector('textarea').textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
        } else {
            document.querySelector('textarea').textContent += `You bought ${names.join(', ')} for ${totalPrice.toFixed(2)}.`;
            document.getElementsByClassName('shopping-cart')[0].removeEventListener('click', onClick);
        }
    }
}