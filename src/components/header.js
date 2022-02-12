import { reRender } from "../utils";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
const Header = {
    render() {
        return /* html */`<nav class="max-w-5xl mx-auto bg-orange-500 flex items-center justify-between">
            <ul class="flex">
                <li><a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Home Page</a></li>
                <li><a href="/about" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">About Page</a></li>
                <li><a href="/product" class="block px-4 py-3 hover:bg-blue-800 hover:text-white">Product Page</a></li>
            </ul>
            ${localStorage.getItem('user') ? `
              <ul class="flex">
                <li class="flex items-center">Xin chao <a href="/" class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="email"></a></li>
                <li class="flex items-center"><a class="block px-4 py-3 hover:bg-blue-800 hover:text-white" id="logout">Logout</a></li>
            </ul>
            `: ""}
            
        </nav>`;
    },
    afterRender(){
      // Lấy thông tin từ localStorage
      // Sử dụng JSON.parse để chuyển đổi chuỗi sang object
      const email = document.querySelector('#email');
      const logout =  document.querySelector('#logout');
      if(email){
        email.innerHTML = JSON.parse(localStorage.getItem('user')).email;
      }
      if(logout){
        logout.addEventListener('click', function(){
          localStorage.removeItem('user');
          reRender(Header, "#header");
          toastr.success("Logout thành công")
        })
      }
    }
};
export default Header;