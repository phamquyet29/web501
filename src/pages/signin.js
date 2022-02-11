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
        });
    }
}
export default Signin;