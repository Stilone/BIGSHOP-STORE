const cartElement = document.getElementById('cart');
const cartBlockElement = document.getElementById('product-cart');
const addedProductsElement = document.getElementById('added-products');
const fullPriceElement = document.getElementById('full-price');

let cartList = [];

cartElement.addEventListener('click', () => {
    let classes = cartBlockElement.classList;
    let result = classes.contains('product-cart-none');

    if (result) {
        cartBlockElement.classList.remove('product-cart-none');
        cartBlockElement.classList.add('product-cart');
    } else {
        cartBlockElement.classList.add('product-cart-none');
    }
});

const removeProducts = (index) => {
    cartList.splice(index, 1);
    renderCart(cartList, addedProductsElement);
    priceCalculator(cartList);
}

const deleteProduct = (index) => {
    let newProduct = cartList[index];

        if(newProduct.count <= 1) {
            newProduct.count = 1

        } else {
            newProduct.count -= 1
        }

    renderCart(cartList, addedProductsElement);
    priceCalculator(cartList);
}

const renderCart = (products, cartElement) => {
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

    cartElement.innerHTML = products.map(result).join('');
}

const priceCalculator = (products) => {
    let sum = 0
    const calculator = (item) => {
        return sum += item.price * item.count;
    }
    products.forEach(calculator);
    priceRender(cartList, fullPriceElement, sum);
}

const priceRender = (products, cartElement, sum) => {
     let result = (item) => {
          return `<p class="full-price">${sum}</p>`;
      }

      cartElement.innerHTML = products.map(result).join('');
}