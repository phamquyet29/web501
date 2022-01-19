const Header = {
    render() {
        return `
        <header>
            <div class="bg-blue-800 py-4">
            <a href="">
                <img src="https://picsum.photos/140/40" alt="" class="mx-auto">
            </a>
            </div>
            <nav class="bg-orange-500">
            <ul class="flex">
                <li><a href="/" class="text-white block px-4 py-3 hover:bg-indigo-500">Home Page</a></li>
                <li><a href="/about" class="text-white block px-4 py-3 hover:bg-indigo-500">About</a></li>
                <li><a href="/product" class="text-white block px-4 py-3 hover:bg-indigo-500">Product</a></li>
                <li><a href="/contact" class="text-white block px-4 py-3 hover:bg-indigo-500">Contact</a></li>
            </ul>
            </nav>
        </header>
        
        `;
    },
};
export default Header;