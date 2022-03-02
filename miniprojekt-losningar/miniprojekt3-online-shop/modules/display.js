function displayProducts(products, cart) {
    for (const product of products) {
        const article = document.createElement('article');
        const img = document.createElement('img');
        const h1 = document.createElement('h1');
        const p = document.createElement('p');
        const input = document.createElement('input')
        const btn = document.createElement('button')

        article.id = `article-${product.getId()}`;
        article.className = 'products';
        img.src = product.getImg();
        h1.innerText = product.getName();
        p.innerText = `$${product.getPrice()}`;
        input.type = 'number';
        input.value = 0;
        input.id = `amount-${product.getId()}`;
        input.min = 0;
        input.max = product.getStock();
        btn.innerText = 'Add to Cart';
        btn.id = `product-${product.getId()}`;

        article.append(img, h1, p, input, btn);
        document.querySelector("#products").append(article);

        btn.addEventListener('click', () => {
            const amount = parseInt(input.value);
            cart.addProduct(amount, product);

            product.removeStock(amount);
            input.value = 0;
            input.max = product.getStock();
            displayCartQuantity(cart);
        });
    }
}

function displayCartQuantity(cart) {
    let sum = 0;
    for (const product of cart.getProducts()) {
        sum += product.quantity;
    }
    document.querySelector('#cart button').innerText = `Cart: ${sum}`;
}

function displayCartProducts(cart){
    for (const product of cart.getProducts()) {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const input = document.createElement('input');
        const removeBtn = document.createElement('button');

        article.className = 'cart-products';
        h3.innerText = `${product.quantity} x ${product.product.getName()}`;
        input.type = 'number';
        input.value = 0;
        input.min = 0;
        input.max = product.quantity;
        removeBtn.innerText = 'remove';

        article.append(h3, input, removeBtn);
        document.querySelector("#cart-products").append(article);

        removeBtn.addEventListener('click', () => {
            cart.removeProduct(input.value, product.product);
            h3.innerText = `${product.quantity} x ${product.product.getName()}`;
            input.max = product.quantity;
            input.value = 0;

            const totalH1 = document.querySelector('#cart-products h1');
            totalH1.innerText = `Total amount: $${cart.getTotal()}`;
        });
    }
}

function displayTotal(cart){
    const h1 = document.createElement('h1');
    h1.innerText = `Total amount: $${cart.getTotal()}`;

    const btnPurchase = document.createElement('button');
    btnPurchase.innerText = 'Purchase';
    document.querySelector('#cart-products').append(h1, btnPurchase);

    btnPurchase.addEventListener('click', ()=>{
        document.querySelector('#products').style.display = 'flex';
        document.querySelector('#cart button').style.display = 'inline-block';
        document.querySelector('#cart-products').innerHTML = '';
        document.querySelector('#cart-products').style.display = 'none';

        cart.emptyAll();
        displayCartQuantity(cart);
    })
}

export { displayProducts, displayCartProducts, displayTotal };