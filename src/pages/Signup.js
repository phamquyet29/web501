import { signup } from "../api/user";
import { $ } from "../utils/selector";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

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
        $('#formSignup').addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                const { data } = await signup({
                    email: $('#email').value,
                    password: $('#password').value,
                });
                toastr.success("Đăng ký thành công")
                if(data){
                    setTimeout(function(){
                        document.location.href="/signin"
                    },2000);
                }
                
            } catch (error) {
                toastr.error(error.response.data)
                $('#formSignup').reset()
            }
           

        })
    }
}
export default Signup;