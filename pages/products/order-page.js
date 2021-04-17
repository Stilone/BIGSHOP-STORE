const orderElement = document.getElementById('order');
const fullOrderElement = document.getElementById('full-order');

const renderOrder = (products, orderElement) => {
    let result = (item, index) => {
        return `<div>               
                   <img src="" alt="">
                   <p>${item.name}</p>
                   <p>${item.price * item.count}</p>
                   <p>${item.count}</p>
                   <button onclick="removeProducts(${index})">Удалить</button>
                   <button onclick="deleteProduct(${index})">-</button>
                </div>`;
    }

    orderElement.innerHTML = products.map(result).join('');
}

const parseOrder = (orderElement) => {
    let prod = localStorage.getItem('products');
    const result = JSON.parse(prod);
    cartList = result;
    renderOrder(cartList, orderElement);
}

