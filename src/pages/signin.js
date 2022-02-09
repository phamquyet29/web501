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
        formSignin.addEventListener('submit', function(e){
            e.preventDefault();
            signin({
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value
            })
        });
    }
}
export default Signin;