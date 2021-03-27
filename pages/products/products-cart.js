// Используй суфикс Element для обьектов такого типа
const cart = document.getElementById('cart');
const cartBlock = document.getElementById('product-cart');
const addedProducts = document.getElementById('added-products');
const fullPrice = document.getElementById('full-price');

let cartList = [];

cart.addEventListener('click', () => {
    let classes = cartBlock.classList;
    let result = classes.contains('product-cart-none');

    if (result) {
        cartBlock.classList.remove('product-cart-none');
        cartBlock.classList.add('product-cart');
    } else {
        cartBlock.classList.add('product-cart-none');
    }
});

const removeProducts = (index) => {
    cartList.splice(index, 1);
    renderCart(cartList, addedProducts);
}

const deleteProduct = (index) => {
    let newProduct = mockProducts[index];

    const checkProduct = (product) => {
        return product.id === newProduct.id
    }

    const existIndex = cartList.findIndex(checkProduct);

    if (existIndex >= 0) {
         cartList[existIndex].count -= 1
    }

    if(cartList[existIndex].count <= 1) { // ошибка тут
        cartList[existIndex].count = 1
    }

    renderCart(cartList, addedProducts);
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

const priceRender = (products, cartElement) => {
     let result = (item) => {
          return `<p class="full-price">${item.price * item.count}</p>`;
      }

      cartElement.innerHTML = products.map(result).join('');
}