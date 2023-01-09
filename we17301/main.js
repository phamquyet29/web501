import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import AboutPage from "./pages/about";
import PostPage from "./pages/post-detail";
import PostsPage from "./pages/posts";
import { render, router } from "./lib";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", () => render(PostPage, app));
//npm i navigo --save
router.resolve();

// render(HomePage, app);
