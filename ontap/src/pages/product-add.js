import { add } from '@/api/product';
import banner from '@/components/banner';
import Header from '@/components/header';
import axios from 'axios';

const ProductAdd = {
    render() {
        return /*html*/ `
        <div class="container">
            ${Header.render()}
            <div class="banner">
                ${banner.render()}
            </div>
            <div class="news">
                <h1>Product Add Form</h1>
                <form id="formAdd">
                    <input type="text" id="product-name" />
                    <input type="number" id="product-price" />
                    <button>Submit</button>
                </form>
            </div>
            <footer></footer>
        </div>


        `;
    },
    afterRender() {
        const formAdd = document.querySelector('#formAdd');
        formAdd.addEventListener('submit', function (e) {
            e.preventDefault();

            const product = {
                name: document.querySelector('#product-name').value,
                price: document.querySelector('#product-price').value,
            };
            // call api
            add(product);
            window.location.href = '/#/admin/product';
        });
    },
};

export default ProductAdd;
