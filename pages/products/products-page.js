const mockProducts = window.mock.products;

const productsListElement = document.getElementById('products-list');

const productItemList = (product) => {//стандартная функция рендера, которая также добавляет индекс.
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

const addProduct = (index) => {//функция onclick принимает индекс, тут мне немного сложно для понимания, но напишу как думаю.
    let newProduct = mockProducts[index];//создаем новую переменную в которую записываем на какой именно продукт мы нажали

    const checkProduct = (product) => {//тут мы выполняем проверку, имеется ли в новом массиве продукт с таким же id
        return product.id === newProduct.id;
    }

    const existIndex = cartList.findIndex(checkProduct);//запишим результат в переменную existIndex

    if (existIndex >= 0) {//если результат existIndex будет = 1 то значит что данный товар уже есть в массиве,  увеличим
        cartList[existIndex].count += 1//его count на +1 и выполним рендер
    } else {
        newProduct.count = 1;//если результат будет -1, значит данного товара нет в массиве, и мы его туда добавим, и выполним рендер
        cartList.push(newProduct);
    }

    renderCart(cartList, addedProductsElement);
    priceRender(fullPriceElement, priceCalculator(cartList));
}

window.addEventListener('beforeunload', () => {
    const cartProducts = JSON.stringify(cartList);
    localStorage.setItem('products', cartProducts);
});

const renderProducts = (products) => { //функция вызова другой функции, с присваиванием в нее переменной, которая хранит в себе
    const productList = productItemList(products);//все основные продукты, после выполняет рендер на страницу.
    let productsHtml = productList.join('');
    productsListElement.innerHTML = productsHtml;
}
