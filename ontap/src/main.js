import AboutPage from './pages/about';
import HomePage from './pages/home';
import ProductPage from './pages/product';

document.addEventListener('DOMContentLoaded', function () {
    const app = document.getElementById('app');
    if (app) {
        app.innerHTML = HomePage.render();
    }
});
