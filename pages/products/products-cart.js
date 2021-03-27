const mockProducts = window.mock.products;
const productsListElement = document.getElementById('products-list');
const cart = document.getElementById('cart')
const cartBlock = document.getElementById('product-cart');
const addedProducts = document.getElementById('added-products');
const fullPrice = document.getElementById('full-price')
let cartList = [];


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

const productList = productItemList(mockProducts);
let productsHtml = productList.join('');
productsListElement.innerHTML = productsHtml;


cart.addEventListener('click', () => {
    let classes = cartBlock.classList;
    let result = classes.contains("product-cart-none");
    if (result) {
        cartBlock.classList.remove('product-cart-none');
        cartBlock.classList.add('product-cart');
    } else {
        cartBlock.classList.add('product-cart-none');
    }
});


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
    if(cartList[existIndex].count <= 1) {
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