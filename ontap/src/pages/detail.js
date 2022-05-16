import data from '@/data';

const ProductDetail = {
    render(id) {
        const product = data.find((item) => item.id === id);
        if (!product) return `<div>Not found</div>`;
        return `${product.name}`;
    },
};
export default ProductDetail;
