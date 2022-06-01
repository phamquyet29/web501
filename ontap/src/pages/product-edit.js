import { add, get, update } from '@/api/product';
import banner from '@/components/banner';
import Header from '@/components/header';
import axios from 'axios';

const ProductEdit = {
    async render(id) {
        const product = await get(id);
        // nếu không có thì return về string not found
        if (!product) return `<div>Not found</div>`;
        // ngược lại nếu có trả về dữ liệu
        return /*html*/ `
        <div class="container">
            ${Header.render()}
            <div class="banner">
                ${banner.render()}
            </div>
            <div class="news">
                <h1>Product Edit Form</h1>
                <form id="formEdit">
                    <input type="text" id="product-name" value="${product.name}" />
                    <input type="number" id="product-price" value="${product.price}" />
                    <button>Submit</button>
                </form>
            </div>
            <footer></footer>
        </div>


        `;
    },
    afterRender(id) {
        const formEdit = document.querySelector('#formEdit');
        formEdit.addEventListener('submit', function (e) {
            e.preventDefault();

            const product = {
                id: id,
                name: document.querySelector('#product-name').value,
                price: document.querySelector('#product-price').value,
            };
            // call api
            update(product);
        });
    },
};

export default ProductEdit;
