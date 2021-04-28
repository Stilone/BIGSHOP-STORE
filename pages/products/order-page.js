const orderElement = document.getElementById('order');



const parseOrder = (orderElement) => {
    const prod = localStorage.getItem('products');
    const result = JSON.parse(prod);
    cartList = result;
    renderCart(cartList, orderElement);
}