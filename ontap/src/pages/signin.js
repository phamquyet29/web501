import { signin, signup } from '@/api/auth';
import { add } from '@/api/product';
import banner from '@/components/banner';
import Header from '@/components/header';
import { $ } from '@/utils/common';

const Signin = {
    render() {
        return /*html*/ `
        <div class="container">
            ${Header.render()}
            <div class="banner">
                ${banner.render()}
            </div>
            <div class="news">
                <h2>Xin chào <span id="name"></span></h2>
                <h1>Đăng nhập</h1>
                <div class="alert">
                </div>
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
            try {
                const user = {
                    email: $('#email').value,
                    password: $('#password').value,
                };
                // call API đăng nhập
                const result = await signin(user);
                // Nếu thành công thì trả về thông tin
                // user vừa đăng nhập
                if (result) {
                    $('#name').innerHTML = result.user.email;
                    // lưu vào localStorage
                    localStorage.setItem('user', JSON.stringify(result.user));
                }

                $('.alert').classList.remove('alert-danger');
                $('.alert').classList.add('alert-success');
                $('.alert').innerHTML = `Thành cmn công`;
            } catch (error) {
                $('.alert').classList.add('alert-danger');
                $('.alert').innerHTML = error.response.data;
            }

            // call api
            // add(product);
            // window.location.href = '/#/admin/product';
        });
    },
};

export default Signin;

/**
 * Bước 1: npm i json-server-auth -D
 * Bước 2: Tạo collection users trong db.json
 * Bước 3: KHai báo api
 */
