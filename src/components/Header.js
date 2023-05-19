const Header = () => {
    return `
        <header>
            <div class="text-center py-10 bg-orange-500 text-4xl">logo</div>
            <div class="flex justify-between p-4 bg-green-300">
                <ul class="flex items-center space-x-4">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
                <div>2</div>
            </div>
        </header>
    `;
};
export default Header;
