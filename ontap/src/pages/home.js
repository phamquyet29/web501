import banner from '@/components/banner';
import Header from '@/components/header';
import news from '@/components/news';

const HomePage = {
    render() {
        return `
        <div class="container">
            <div class="tw-my-5">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                    <li class="breadcrumb-item active !tw-text-orange-500"  aria-current="page">Home</li>
                    </ol>
                </nav>
            </div>
            ${Header.render()}
            <div class="banner">
                ${banner.render()}
            </div>
            <div class="news">
                ${news.render()}
            </div>
            <footer></footer>
        </div>
        `;
    },
};
export default HomePage;
