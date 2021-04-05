const search = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const searchBtnUpdate = document.getElementById('search-btn-update');



searchBtn.addEventListener('click', () => {
    const productsCheck = (item) => {
        return item.name.includes(search.value);
    }
    const searchProducts = mockProducts.filter(productsCheck);
    console.log(searchProducts);
    renderProducts(searchProducts);
})

searchBtnUpdate.addEventListener('click', () => {
    renderProducts(mockProducts);
});