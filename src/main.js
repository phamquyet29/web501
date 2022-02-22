import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import AdminPost from "./pages/admin/posts";
import AddPost from "./pages/admin/posts/add";
import EditPostPage from "./pages/admin/posts/edit";
import CartPage from "./pages/cart";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import DetailCategoryPost from "./pages/posts/category";
import ProductsPage from "./pages/products";
import ProductDetailPage from "./pages/products/detail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.getElementById("content").innerHTML = await content.render(id);

  if(content.afterRender) content.afterRender(id);
};


router.on('/admin/*/',  () => {
}, {
  before(done, match) {
      if(localStorage.getItem('user')){
        const userId = JSON.parse(localStorage.getItem('user')).id;
        if(userId == 1){
            done();
        } else {
            document.location.href="/"
        }
      } else{
        document.location.href="/"
      }
    
  },
});

router.on({
  "/": () => {
    print(HomePage);
  },
  "/about": () => {
    print(AboutPage);
  },
  "/news/:id": ({ data }) => {
    const { id } = data;
    print(NewsDetail, id);
  },

  "/category/:id": ({ data }) => {
    const { id } = data;
    print(DetailCategoryPost, id);
  },
  
  "/products": () => print(ProductsPage),
  "/products/:id": ({ data }) => {
    const { id } = data;
    print(ProductDetailPage, id);
  },
  "/admin/news": () => print(AdminPost),
  "/admin/news/add": () => print(AddPost),
  "/admin/news/:id/edit": ({ data }) => {
    const { id } = data;
    print(EditPostPage, id);
  },
  "/signup": () => print(Signup),
  "/signin": () => print(Signin),
  "/cart": () => print(CartPage)
});

router.resolve();

