import { getAll } from '../../api/product';

const ProductsPage = {
    async render() {
        const { data } = await getAll();
        return /* html */`
            <h2 class="font-semibold text-2xl uppercase text-blue-800 my-4">Sản phẩm</h2>
            <div class="grid grid-cols-3 gap-8">
                ${data.map((product) => `
                    <div class="border p-4">
                        <a href="/#/products/${product.id}">
                            <img src="${product.img}" alt="" />
                        </a>
                        <h3 class="my-3"><a  href="/#/products/${product.id}" class="font-semibold text-lg text-orange-500">${product.name}</a></h3>                    
                        <p>${product.desc}</p>
                    </div>
                `).join("")}
            </div>
        `
    },
};
export default ProductsPage;