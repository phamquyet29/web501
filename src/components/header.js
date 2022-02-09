const Header = {
    render() {
        return /* html */ `
        <header>
            <div class="bg-blue-800 py-4">
            <a href="">
                <img src="https://picsum.photos/150/40" alt="" class="mx-auto">
            </a>
            </div>
            <div class="bg-orange-500">
            <ul class="flex">
                <li><a href="/" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Home </a></li>
                <li><a href="/about" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">About</a></li>
                <li><a href="/product" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Product</a></li>
                <li><a href="/contact" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Contact</a></li>
                <li><a href="/admin/dashboard" class="block px-4 py-3 hover:bg-indigo-500 hover:text-white">Dashboard</a></li>
                <li><a class="block px-4 py-3 hover:bg-indigo-500 hover:text-white" id="email"></a></li>
                <li><a class="block px-4 py-3 hover:bg-indigo-500 hover:text-white" id="logout">Logout</a></li>
            </ul>
            </div>
        </header>
        `;
    },
    afterRender(){
        const email = document.querySelector('#email');
        const logout = document.querySelector('#logout');
        email.innerHTML = JSON.parse(localStorage.getItem('user')).email;

        logout.addEventListener('click', function(){
            localStorage.removeItem('user');
        })
    }
};
export default Header;