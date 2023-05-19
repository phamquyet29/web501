import Header from "../components/Header";
import { products } from "../dataFake";
const ProductPage = () => {
    return `
        <div class="container max-w-4xl mx-auto px-4">
            ${Header()}
            <h1>Product Page</h1>
            ${products
                .map(
                    (product) => `
                <div><a href="/product/${product.id}">${product.name}</a></div>
            `
                )
                .join("")}
        </div>
    `;
};
export default ProductPage;
