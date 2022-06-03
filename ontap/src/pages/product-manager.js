import { getAll, remove } from '@/api/product';
import banner from '@/components/banner';
import Header from '@/components/header';
import { rerender } from '@/utils/rerender';

// import data from '@/data';
const ProductManager = {
    async render() {
        // const data = await (await fetch('http://localhost:3001/products')).json();
        const data = await getAll();
        return /*html*/ `
            <div class="container">
                ${Header.render()}
                <div class="banner">
                    ${banner.render()}
                </div>
                <div class="news">
                <a href="/product/add" data-navigo class="btn btn-primary">Add product</a>
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
                                            <a href="/product/${
                                                item.id
                                            }/edit" class="btn btn-danger btn-update">Update</a>
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
        const btns = document.querySelectorAll('table .btn'); // nodeList=[btn]
        for (let btn of btns) {
            // lấy thuộc tính data-id của button
            const id = btn.dataset.id;
            // event click
            btn.addEventListener('click', async function () {
                if (btn.classList.contains('btn-remove')) {
                    const confirm = window.confirm('Bạn có chắc chắn xóa không?');
                    if (confirm) {
                        const { data } = await remove(id);
                        rerender('app', ProductManager);
                        if (data) {
                            console.log('delete thành công');
                        }
                    }
                }
            });
        }
    },
};

export default ProductManager;
