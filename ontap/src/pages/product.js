import banner from '@/components/banner';
import Header from '@/components/header';
import data from '@/data';

const ProductPage = {
    render() {
        return /*html*/ `
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
                                `<div><a href="/product/${item.id}" data-navigo>${item.name}</a></div>`
                        )
                        .join('')}
                </div>
                <footer></footer>
            </div>
                
        `;
    },
};
export default ProductPage;
