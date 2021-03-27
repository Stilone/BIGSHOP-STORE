const mockProducts = window.mock.products;

const productsListElement = document.getElementById('products-list');

const productItemList = (product) => {
    let result = (item, index) => {
        return `<div class="card" style="width: 18rem;">
                        <img src="${item.img}" class="image-product" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title">${item.name}</h5>
                        <p class="card-text">${item.price}</p>
                        <p class="card-text">${item.count}</p>
                        <p class="card-text">${index}</p>
                        <button onclick="addProduct(${index})" class="btn  btn-dark">Добавить</button>
                    </div>
                    </div>`;
    }

    return product.map(result);
}

const addProduct = (index) => {
    let newProduct = mockProducts[index];

    const checkProduct = (product) => {
        return product.id === newProduct.id
    }

    const existIndex = cartList.findIndex(checkProduct);

    if (existIndex >= 0) {
        cartList[existIndex].count += 1
    } else {
        newProduct.count = 1;
        cartList.push(newProduct);
    }

    renderCart(cartList, addedProducts);
    priceRender(cartList, fullPrice);
}

const renderProducts = () => {
    const productList = productItemList(mockProducts);
    let productsHtml = productList.join('');
    productsListElement.innerHTML = productsHtml;
}
