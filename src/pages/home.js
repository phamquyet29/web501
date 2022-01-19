import Banner from "../components/banner";
import Header from "../components/header";
import NewsList from "../components/newsList";

const HomePage = {
    async render() {
        return /* html */`
        <div class="max-w-5xl mx-auto border">
            ${Header.render()}
            <main>
                <div class="banner">
                    ${Banner.render()}
                </div>
                
                <div class="news">
                    ${await NewsList.render()}
                </div>
            </main>
        </div>
        `;
    },
};
export default HomePage;