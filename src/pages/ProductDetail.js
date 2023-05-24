import { products } from "../dataFake";

const ProductDetail = ({ id }) => {
    const product = products.find((product) => product.id === +id);
    if (!product) return "Product not found";
    return `
        ${product.name}
    `;
};
export default ProductDetail;

// function render(content) {
//     document.getElementById("root").innerHTML = content();
// }

// function HomePage() {
//     return `HomePage`;
// }

// render(HomePage)
