import data from '@/data';

const ProductPage = {
    render() {
        return /*html*/ `
            <div class="container">
                <h1>Product page</h1>
                ${data
                    .map((item) => `<div><a href="/product/${product.id}">${item.name}</a></div>`)
                    .join('')}
            </div>
        `;
    },
};
export default ProductPage;
