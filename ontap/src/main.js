import Navigo from 'navigo'; // When using ES modules.
const router = new Navigo('/');

import AboutPage from '@/pages/about';
import HomePage from '@/pages/home';
import ProductPage from '@/pages/product';
import ProductDetail from './pages/detail';
import ProductManager from './pages/product-manager';
import ProductAdd from './pages/product-add';

document.addEventListener('DOMContentLoaded', function () {
    async function print(page, id) {
        // page ~ HomePage.render()
        const app = document.getElementById('app');
        if (app) {
            // chờ page.render() chạy xong thì mới show ra ngoài
            app.innerHTML = await page.render(id); // [object promise]
        }
        if (page.afterRender) page.afterRender();
    }

    router.on({
        '/': () => print(HomePage),
        '/about': () => print(AboutPage),
        '/product': () => print(ProductPage),
        '/product/add': () => print(ProductAdd),
        '/product/:id': (data) => {
            const id = +data.data.id;
            print(ProductDetail, id);
        },
        '/admin/product': () => print(ProductManager),
    });
    router.resolve();
});
