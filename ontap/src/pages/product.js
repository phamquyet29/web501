import data from '@/data';

const ProductPage = {
    render() {
        return `<div class="container">
            <h1>Product page</h1>
            ${data.map((item) => `<div>${item.name}</div>`).join('')}
        </div>`;
    },
};
export default ProductPage;
// <div>Product A</div><div>Product B</div>
