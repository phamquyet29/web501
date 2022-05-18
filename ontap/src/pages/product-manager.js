import banner from '@/components/banner';
import Header from '@/components/header';

import data from '@/data';
const ProductManager = {
    render() {
        return /*html*/ `
            <div class="container">
                ${Header.render()}
                <div class="banner">
                    ${banner.render()}
                </div>
                <div class="news">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá sản phẩm</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                        ${data
                            .map(
                                (item, index) => /*html*/ `
                                    <tr>
                                        <td>${index + 1}</td>
                                        <td>${item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button class="btn btn-danger btn-remove" data-id=${
                                                item.id
                                            }>Remove</button>
                                            <button class="btn btn-danger btn-update">Update</button>
                                        </td>
                                    </tr>`
                            )
                            .join('')}
                            
                        </tbody>
                    </table>
                </div>
                <footer></footer>
            </div>
            
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll('table .btn');
        for (let btn of btns) {
            btn.addEventListener('click', function () {
                console.log('1');
            });
        }
    },
};

export default ProductManager;
