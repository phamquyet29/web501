import { signup } from "../api/user";
import { $ } from "../utils/selector";

const Signup = {
    render(){
        return `
            <form id="formSignup">
                <input type="email" class="border border-black" id="email" placeholder="Your  email"/>
                <input type="password" class="border border-black" id="password" placeholder="Your  password"/>
                <button>Đăng ký</button>
            </form>
        `
    },
    afterRender(){
        $('#formSignup').addEventListener('submit', function(e){
            e.preventDefault();
            signup({
                email: $('#email').value,
                password: $('#password').value,
            })
        })
    }
}
export default Signup;