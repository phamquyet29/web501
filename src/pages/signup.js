import { signup } from "../api/user";

const Signup = {
    render(){
        return `
            <form id="formSignup">
                <input type="email" id="email" placeholder="your email" class="border border-black"/>
                <input type="password" id="password" placeholder="your password" class="border border-black"/>
                <button>Đăng ký</button>
            </form>
        
        `
    },
    afterRender(){
        const formSignup = document.querySelector('#formSignup');
        formSignup.addEventListener('submit', async (e) => {
            e.preventDefault();
            const { data } = await signup({
                email: document.querySelector('#email').value,
                password: document.querySelector('#password').value,
            });
            console.log(data);
        })
    }
}
export default Signup;