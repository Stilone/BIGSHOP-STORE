const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchBtnUpdate = document.getElementById('search-btn-update');



searchBtn.addEventListener('click', () => {
    const productsCheck = (item) => {
        if(search.value === item.name) {
            console.log(search.value);
            return true;
        }
    }
    const searchProducts = mockProducts.filter(productsCheck);
    console.log(searchProducts);
    renderProducts(searchProducts);
})

searchBtnUpdate.addEventListener('click', () => {
    renderProducts(mockProducts);
})