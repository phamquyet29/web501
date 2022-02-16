import Navigo from "navigo";
import AboutPage from "./pages/about";
import Dashboard from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminAddNewsPage from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import CartPage from "./pages/cart";
import ContactPage from "./pages/contact";
import DetailPost from "./pages/detailPost";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/notFound";
import ProductPage from "./pages/products";
import DetailProductPage from "./pages/products/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => {
        print(HomePage);
    },
    "/about": () => {
        print(AboutPage);
    },
    "/news/:id": ({ data }) => {
        print(DetailPost, data.id);
    },
    "/contact": () => {
        print(ContactPage);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/news": () => {
        print(AdminNewsPage);
    },
    "/admin/news/add": () => {
        print(AdminAddNewsPage);
    },
    "/admin/news/:id/edit": ({data}) => {
        print(AdminEditPost, data.id);
    },
    "/signup": () => print(Signup),
    "/signin": () => print(Signin),
    "/products": () => print(ProductPage),
    "/products/:id": ({ data }) => {
        print(DetailProductPage, data.id);
    },
    "/cart": () => print(CartPage)
});
router.notFound(() => print(NotFoundPage));
router.resolve();