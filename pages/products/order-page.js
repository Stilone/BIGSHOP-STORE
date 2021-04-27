const orderElement = document.getElementById('order');
const fullOrderElement = document.getElementById('full-order');



const parseOrder = (orderElement) => {
    const prod = localStorage.getItem('products');
    const result = JSON.parse(prod);
    cartList = result;
    renderCart(cartList, orderElement);
    console.log(cartList);
    console.log(priceCalculator(cartList));
    fullPriceRender(cartList, fullOrderElement, priceCalculator(cartList));
}

const fullPriceRender = (products, fullOrderElement, sum) => {//рендер, который отображает в корзине общую цену всех товаров
    let result = (item) => {
        return `<p class="full-price-order">${sum}</p>`;
    }

    fullOrderElement.innerHTML = result(sum);
}