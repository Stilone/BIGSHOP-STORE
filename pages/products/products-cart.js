const cartElement = document.getElementById('cart');
const cartBlockElement = document.getElementById('product-cart');
const addedProductsElement = document.getElementById('added-products');
const fullPriceElement = document.getElementById('full-price');


let cartList = [];

 const addCartToggle = () => {
cartElement.addEventListener('click', () => {// эта функция по клику позволяет поменять стили класса cart
    let classes = cartBlockElement.classList;//изначально карт имеет стиль display none. далее мы проверяем если класс который имеет этот стиль есть
    let result = classes.contains('product-cart-none');//то удаляем его и присваиваем новый, иначе присваиваем старый

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
    renderCart(cartList, addedProductsElement);
    priceCalculator(cartList);
}

const deleteProduct = (index) => {//функция клика, берем элемент массива по индексу и присваиваем его newProduct, далее проверяем,
    let newProduct = cartList[index];//если в элементе массива каунт меньше или равен 1 то присваиваем каунту 1,
                                    //если каунт больше, то уменьшаем его на 1, после рендерим.
        if(newProduct.count <= 1) {
            newProduct.count = 1

        } else {
            newProduct.count -= 1
        }

    renderCart(cartList, addedProductsElement);
    priceCalculator(cartList);
}

const renderCart = (products, cartElement) => {//эта функция выполняет рендер в корзину, для каждого индекса массива
    let result = (item, index) => {//каждый раз когда мы вызываем эту функцию, она работает с новыми элементами индекса, cartList, если конечно они изменились :)
        return `<div>               
                   <img src="" alt="">
                   <p>${item.name}</p>
                   <p>${item.price * item.count}</p>
                   <p>${item.count}</p>
                   <button onclick="removeProducts(${index})">Удалить</button>
                   <button onclick="deleteProduct(${index})">-</button>
                </div>`;
    }

    cartElement.innerHTML = products.map(result).join('');
}

const priceCalculator = (products) => {//эта функция берет массив, и для каждого элемента в массиве, выполняет функцию
    let sum = 0                     //функция умножает цену на количество и записывает в sum, если в sum уже есть цена
    const calculator = (item) => {  //она прибавит к ней. После выполнит новый отдельный рендер.
        return sum += item.price * item.count;
    }
    products.forEach(calculator);
    priceRender(cartList, fullPriceElement, sum);
}

const priceRender = (products, cartElement, sum) => {//рендер, который отображает в корзине общую цену всех товаров
     let result = (item) => {
          return `<p class="full-price">${sum}</p>
                   <a href="order-page.html" class="buy" id="buy">купить</a>`;
      }

    cartElement.innerHTML = products.map(result).join('');
}

const parseCart = (cartElement) => {
    let prod = localStorage.getItem('products');
    const result = JSON.parse(prod);
    cartList = result;
    renderCart(cartList, cartElement);
}

