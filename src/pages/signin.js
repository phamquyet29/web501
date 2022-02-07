import { signin } from "../api/user";

const Signin = {
    render(){
        return /*html*/`
            <form id="formSignin">
                <input type="email" placeholder="email"  id="email"/>
                <input type="password" placeholder="password"  id="password"/>
                <button>Đăng nhập</button>
            </form>
        `
    },
    afterRender(){
        const formSignin = document.querySelector('#formSignin');
        formSignin.addEventListener('submit', async (e) => {
            e.preventDefault();
            try {
                const data = await signin({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value
                });
                console.log(data);
            } catch (error) {
                console.log(error);
            }
            
        })
    }
};
export default Signin;