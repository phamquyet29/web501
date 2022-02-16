import Navigo from "navigo";
import AboutPage from "./pages/about";
import DashboardPage from "./pages/admin/dashboard";
import AdminNewsPage from "./pages/admin/news";
import AdminNewsAddPage from "./pages/admin/news/add";
import AdminEditPost from "./pages/admin/news/edit";
import CartPage from "./pages/cart";
import DetailNewsPage from "./pages/detail";
import HomePage from "./pages/home";
import ProductsPage from "./pages/products";
import DetailProductPage from "./pages/products/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.getElementById("app").innerHTML = await content.render(id);
  if (content.afterRender) content.afterRender(id);
};
router.on("/admin/*", () => {}, {
    before(done, match) {
        if(JSON.parse(localStorage.getItem('user'))){
            const id = JSON.parse(localStorage.getItem('user')).id;
            if(id == 1){
                done();
            } else {
                document.location.href="/"
            }
        } else {
            document.location.href="/"
        }
      
      
    }
})
router.on({
  "/": () => print(HomePage),
  "/about": () => print(AboutPage),
  "/news/:id": (value) => print(DetailNewsPage, value.data.id),
  "/admin/dashboard": () =>  { print(DashboardPage) }, 
  "/admin/news": () => print(AdminNewsPage),
  "/admin/news/:id/edit": ({ data }) => print(AdminEditPost, data.id),
  "/admin/news/add": () => print(AdminNewsAddPage),
  "/signup": () => print(Signup),
  "/signin": () => print(Signin),
  "/products": () => print(ProductsPage),
  "/products/:id": (value) => print(DetailProductPage, value.data.id),
  "/cart": () => print(CartPage)
});


router.resolve();