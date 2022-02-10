import { signin } from "../api/user";

const Signin = {
    render(){
        return `
            <form id="formSignin">
                <input type="email" id="email" placeholder="Your Email" class="border border-black" />
                <input type="password" id="password" placeholder="Your password" class="border border-black" />
                <button>Sign in</button>
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
        })
    }
}
export default Signin;