import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);
    if (content.afterRender) content.afterRender();
};

router.on({
    "/": () => print(HomePage),
    "/about": () => print(AboutPage),
    "/product": () => print(ProductPage),
    "/signup": () => print(Signup),
    "/product/:id": ({ data }) => print(DetailPage, data.id),
    "/admin/dashboard": () => print(Dashboard),
    "/admin/news": () => print(AdminNewsPage),
});

router.resolve();