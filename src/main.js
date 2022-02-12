import Navigo from "navigo";
import Footer from "./components/footer";
import Header from "./components/header";
import AboutPage from "./pages/about";
import AdminPost from "./pages/admin/posts";
import AddPost from "./pages/admin/posts/add";
import HomePage from "./pages/home";
import NewsDetail from "./pages/newsDetail";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a", hash: true });

const print = async (content, id) => {
  document.getElementById("header").innerHTML = Header.render();
  document.getElementById("content").innerHTML = await content.render(id);
  document.getElementById("footer").innerHTML = Footer.render();

  if(content.afterRender) content.afterRender();
};


router.on('/admin/*/',  () => {
  console.log('truy cap duong dan admin/*')
}, {
  before(done, match) {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    
    if(userId == 1){
      done();
    } else {
      // console.log('2')
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
  "/admin/news": () => print(AdminPost),
  "/admin/news/add": () => print(AddPost),
  "/signup": () => print(Signup),
  "/signin": () => print(Signin)
});

router.resolve();

