const Header = {
    render() {
        return /* html */`
        <header>
        <div class="bg-blue-900 py-4">
          <a href="">
            <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
          </a>
        </div>
        <div class="bg-orange-500 flex justify-between items-center pr-5">
          <ul class="flex">
            <li><a href="/" class="menu-item__link">Home Page</a></li>
            <li>
              <a href="/about" class="menu-item__link">About </a>
            </li>
            <li>
              <a href="/product" class="menu-item__link">Product </a>
            </li>
          </ul>
          <span id="account" class="text-white"></span>
          <button id="logout">Logout</button>
        </div>
  
      </header>
        
        `;
    },
    afterRender(){
        const account = document.querySelector('#account');
        const btnLogout = document.querySelector('#logout');
        account.innerHTML = JSON.parse(localStorage.getItem('user')).email;

        btnLogout.addEventListener('click', function(){
           localStorage.removeItem('user');
        })
    }
};
export default Header;
