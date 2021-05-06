const cartElement = document.getElementById('cart');
const cartBlockElement = document.getElementById('product-cart');
const addedProductsElement = document.getElementById('added-products');
const fullPriceElement = document.getElementById('full-price-cart');

let cartList = [];

const addCartToggle = () => {
    cartElement.addEventListener('click', () => {// эта функция по клику позволяет поменять стили класса cart
    let classes = cartBlockElement.classList;//изначально карт имеет стиль display none. далее мы проверяем если класс который имеет этот стиль есть
    let result = classes.contains('product-cart-none');//то удаляем его и присваиваем новый, иначе присваиваем старый
    priceRender(fullPriceElement, priceCalculator(cartList));
    if (result) {
        cartBlockElement.classList.remove('product-cart-none');
        cartBlockElement.classList.add('product-cart');
    } else {
        cartBlockElement.classList.add('product-cart-none');
    }
});
}

const removeProducts = (index) => {//функция клика по индексу удаляет элемент из массива, после рендерит массив на страницу.
    cartList.splice(index, 1);
    return cartList;
}

const deleteProduct = (index) => {//функция клика, берем элемент массива по индексу и присваиваем его newProduct, далее проверяем,
    let newProduct = cartList[index];//если в элементе массива каунт меньше или равен 1 то присваиваем каунту 1,
                                    //если каунт больше, то уменьшаем его на 1.
        if(newProduct.count <= 1) {
            newProduct.count = 1
        } else {
            newProduct.count -= 1
        }
    return cartList;
}

const renderCart = (products, cartElement) => {  //эта функция выполняет рендер в корзину, для каждого индекса массива
    const removeHandle = (index) => {
        const items = removeProducts(index);
        renderCart(items, cartElement);

        const sum = priceCalculator(items);

        priceRender(fullPriceElement, sum);
    };

    const deleteHandle = (index) => {
        const items = deleteProduct(index);
        renderCart(items, cartElement);

        const sum = priceCalculator(items);

        priceRender(fullPriceElement, sum);
    };

    window.remove = removeHandle;
    window.deleted = deleteHandle;

    let result = (item, index) => {  //каждый раз когда мы вызываем эту функцию, она работает с новыми элементами индекса, cartList, если конечно они изменились :)
        return `<div class="cart-item">               
                   <img src="${item.img}" alt="" width="80px" height="100px">
                   <p>${item.name}</p>
                   <p>${item.price * item.count}</p>
                   <p>${item.count}</p>
                   <button onclick="remove(${index})">Удалить</button>
                   <button onclick="deleted(${index})">-</button>
                </div>`;
    }

    cartElement.innerHTML = products.map(result).join('');
}

const priceCalculator = (products) => {//эта функция берет массив, и для каждого элемента в массиве, выполняет функцию
    let sum = 0                     //функция умножает цену на количество и записывает в sum, если в sum уже есть цена
    const calculator = (item) => {  //она прибавит к ней.
        return sum += item.price * item.count;
    }
    products.forEach(calculator);
    return sum;
}

const priceRender = (cartElement, sum) => {//рендер, который отображает в корзине общую цену всех товаров
    cartElement.innerHTML = `<p class="full-price">${sum}</p>`;
}

const parseCart = (cartElement) => {
    let prod = localStorage.getItem('products');
    const result = JSON.parse(prod);
    cartList = result;
    renderCart(cartList, cartElement);
}

