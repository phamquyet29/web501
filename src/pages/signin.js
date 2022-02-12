import { signin } from "../api/user";
import { $ } from "../utils/selector";
import toastr from "toastr";
import "toastr/build/toastr.min.css";

const Signin = {
    render(){
        return `
            <form id="formSignin">
                <input type="email" class="border border-black" id="email" placeholder="Your  email"/>
                <input type="password" class="border border-black" id="password" placeholder="Your  password"/>
                <button>Đăng nhập</button>
            </form>
        `
    },
    afterRender(){
        $('#formSignin').addEventListener('submit', async function(e){
            e.preventDefault();
            try {
                // call api, nếu đăng nhập thành công sẽ trả về object data
                const { data } = await signin({
                    email: $('#email').value,
                    password: $('#password').value,
                });
                localStorage.setItem('user', JSON.stringify(data.user));
                toastr.success("Đăng nhập thành công, chuyển trang sau 2s")
                setTimeout(function(){
                    if(data.user.id === 1){
                        document.location.href="/#/admin/news"
                    } else {
                        document.location.href="/#/"
                    }
                },2000)
                
            } catch (error) {
                // nếu lỗi thì trả về object chứa lỗi error.response.data
                toastr.success(error.response.data)
                $('#formSignin').reset()
            }
            
        })
    }
}
export default Signin;