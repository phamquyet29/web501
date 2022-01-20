import Banner from "../components/banner";
import NewsList from "../components/newsList";

const HomePage = {
    async render() {
        return /* html */`
            <div class="banner">
                ${Banner.render()}
            </div>
            <div>
                ${await NewsList.render()}
            </div>
        `;
    },
};
export default HomePage;