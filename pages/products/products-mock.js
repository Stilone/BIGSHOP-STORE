const getProduct = (id, name, price, count = 1, img) => ({
    id,
    name,
    price,
    count,
    img
});


const products = [
    getProduct(1, 'Iphone X', 1000, 10, 'img/1.jfif'),
    getProduct(2, 'Iphone XS green', 1200, 15, 'img/2.jfif'),
    getProduct(3, 'Iphone XS silver', 1500, 20, 'img/3.jfif'),
    getProduct(4, 'Iphone XS red', 200, 5, 'img/4.jfif'),
]

window.mock = {
    products: products,
};