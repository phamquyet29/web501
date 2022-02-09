import Navigo from "navigo";
import AboutPage from "./pages/about";
import AdminNews from "./pages/admin/news";
import AdminNewsAdd from "./pages/admin/news/add";
import DashboardPage from "./pages/dashboard";
import DetailPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductPage from "./pages/product";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.querySelector("#app").innerHTML = await content.render(id);
  if (content.afterRender) await content.afterRender();
};

router.on({
  "/": () => print(HomePage),
  "/about": () => print(AboutPage),
  "/product": () => print(ProductPage),
  "/news/:id": ({ data }) => print(DetailPage, data.id),
  "/admin/dashboard": () => print(DashboardPage),
  "/admin/products": () => console.log("admin product"),
  "/admin/news": () => print(AdminNews),
  "/admin/news/add": () => print(AdminNewsAdd),
  "/signup": () => print(Signup),
  "/signin": () => print(Signin),
});

router.resolve();
