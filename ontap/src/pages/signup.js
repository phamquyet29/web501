import { signup } from '@/api/auth';
import { add } from '@/api/product';
import banner from '@/components/banner';
import Header from '@/components/header';
import { $ } from '@/utils/common';

const Signup = {
    render() {
        return /*html*/ `
        <div class="container">
            ${Header.render()}
            <div class="banner">
                ${banner.render()}
            </div>
            <div class="news">
                <h1>Đăng ký</h1>
                <form id="formSignup">
                    <input type="email" id="email" />
                    <input type="password" id="password" />
                    <button>Đăng ký</button>
                </form>
            </div>
            <footer></footer>
        </div>


        `;
    },
    afterRender() {
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', async function (e) {
            e.preventDefault();

            const user = {
                email: $('#email').value,
                password: $('#password').value,
            };
            const result = await signup(user);
            if (result) {
            }
            // call api
            // add(product);
            // window.location.href = '/#/admin/product';
        });
    },
};

export default Signup;

/**
 * Bước 1: npm i json-server-auth -D
 * Bước 2: Tạo collection users trong db.json
 * Bước 3: KHai báo api
 * Bước 4: Tạo màn hình signup, signin
 * Bước 5: Khai báo router
 */
