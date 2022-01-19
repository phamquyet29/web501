import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import Header from "./components/header";
import Footer from "./components/footer";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.getElementById("header").innerHTML = Header.render();
    document.getElementById("app").innerHTML = content;
    document.getElementById("footer").innerHTML = Footer.render();
};

router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(ProductPage.render());
    },
});
router.resolve();