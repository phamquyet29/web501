import { signin } from "../api/user";

const Signin = {
    render(){
        return `
            <form id="formSignin">
                <input type="email" placeholder="email" id="email" /> <br />
                <input type="password" placeholder="password" id="password" /> <br />
                <button class="border border-black">Đăng nhập</button>
            </form>
        `
    },
    afterRender(){
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async function(e){
            e.preventDefault();
            const response = await signin({
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value
            })
            // lưu thông tin user vào localStorage
            localStorage.setItem("user", JSON.stringify(response.data))
            if(response.data.user.id === 1) {
                // nếu là admin thì chuyển trang
                document.location.href="/admin/news"
            } else {
                // ngược lại nếu là member => id != 1
                document.location.href="/"
            }
        });
    }
}
export default Signin;