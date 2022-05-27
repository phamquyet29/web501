import banner from '@/components/banner';
import Header from '@/components/header';
import data from '@/data';

const ProductPage = {
    async render() {
        // const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        // const data = await response.json();
        const data = await (await fetch('https://jsonplaceholder.typicode.com/posts')).json();
        return `
            <div class="container">
            ${Header.render()}
            <div class="banner">
                ${banner.render()}
            </div>
            <h1>Product page</h1>
            <div class="news">
                ${data
                    .map(
                        (item) =>
                            `<div><a href="/product/${item.id}" data-navigo>${item.title}</a></div>`
                    )
                    .join('')}
            </div>
            <footer></footer>
        </div>
        `;
    },
};
export default ProductPage;
