import { signin } from "../api/user";

const Signin = {
    render(){
        return `
            <form id="formSignin">
                <input type="email" id="email" placeholder="your email" class="border border-black"/>
                <input type="password" id="password" placeholder="your password" class="border border-black"/>
                <button>Đăng nhập</button>
            </form>
        
        `
    },
    afterRender(){
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async (e) => {
            e.preventDefault();
            const { data } = await signin({
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value,
            });
            console.log(data);
        })
    }
}
export default Signin;