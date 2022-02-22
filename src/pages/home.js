import { getAllCate } from "../api/posts";
import Banner from "../components/banner";
import Header from "../components/header";
import NewsList from "../components/newsList";


const HomePage = {
    async render() {
        const { data: catePosts } = await getAllCate();
        return /* html */`
            <div id="header">
                ${Header.render()}
            </div>
            <div class="banner">
                ${Banner.render()}
                <h2>All post category</h2>
                <div class="grid grid-cols-3 gap-8">
                    ${catePosts.map(category => `
                        <div class="shadow-lg p-4">
                            <a href="/#/category/${category.id}">${category.name}</a>
                        </div>
                    `).join("")}
                </div>
            </div>
            <div>
                ${await NewsList.render()}
            </div>
        `;
    },
    afterRender(){
        Header.afteRender();
    }
};
export default HomePage;