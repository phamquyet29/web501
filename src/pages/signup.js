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
            try {
                const { data } = await signup({
                    email: document.querySelector('#email').value,
                    password: document.querySelector('#password').value,
                });
                if(data){
                    setTimeout(() => {
                        document.location.href="/signin"
                    }, 2000)
                }    
            } catch (error) {
                console.log(error)
            }
            
        })
    }
}
export default Signup;