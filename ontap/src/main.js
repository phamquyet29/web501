import Navigo from 'navigo'; // When using ES modules.
const router = new Navigo('/');

import AboutPage from './pages/about';
import HomePage from './pages/home';
import ProductPage from './pages/product';

document.addEventListener('DOMContentLoaded', function () {
    function print(page) {
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = page.render();
        }
    }

    router.on({
        '/': () => print(HomePage),
        '/about': () => print(AboutPage),
    });
    router.resolve();
});
