import banner from "../components/banner";
import Header from "../components/header";
import news from "../components/news";

const AboutPage = {
    render() {
        return `
        <div class="container">
            ${Header.render()}
            <div class="news">
                about page
            </div>
            <footer></footer>
        </div>
        `;
    },
};
export default AboutPage;
