import Navigo from 'navigo'; // When using ES modules.
const router = new Navigo('/');

import AboutPage from '@/pages/about';
import HomePage from '@/pages/home';
import ProductPage from '@/pages/product';
import ProductDetail from './pages/detail';

document.addEventListener('DOMContentLoaded', function () {
    function print(page) {
        // page ~ HomePage.render()
        const app = document.getElementById('app');
        if (app) {
            app.innerHTML = page;
        }
    }

    router.on({
        '/': () => print(HomePage.render()),
        '/about': () => print(AboutPage.render()),
        '/product': () => print(ProductPage.render()),
        '/product/:id': (data) => {
            console.log('data', data);
            const id = +data.data.id;
            print(ProductDetail.render(id));
        },
    });
    router.resolve();
});
