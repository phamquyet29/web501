import { get } from '../../api/products';
import { $ } from '../../utils';

const DetailProductsPage = {
    async render(id) {
        const { data } = await get(id);
        return `
            <h1>${data.name}</h1>
            <p>${data.price}</p>
            <button id="btnAddToCart" class="border border-black bg-indigo-500 text-white px-4 py-3">Giỏ hàng</button>
        `;
    },
    afterRender(){
        $("#btnAddToCart").addEventListener('click', () => {

        });
    }
};
export default DetailProductsPage;