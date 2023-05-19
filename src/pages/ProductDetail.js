import { products } from "../dataFake";

const ProductDetail = ({ id }) => {
    const product = products.find((product) => product.id === +id);
    if (!product) return "Product not found";
    return `
        ${product.name}
    `;
};
export default ProductDetail;
