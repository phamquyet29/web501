import Navigo from "navigo"; // When using ES modules.
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

const router = new Navigo("/");

const render = (content) => {
    const app = document.querySelector("#app");
    app.innerHTML = content();
};

router.on("/", function () {
    render(HomePage);
});
router.on("/about", function () {
    render(AboutPage);
});

router.resolve();
