import { render, router } from "./lib";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import PostDetailPage from "./pages/post-detail";
import PostsPage from "./pages/posts";
import ProjectDetailPage from "./pages/project-detail";
import ProjectsPage from "./pages/projects";

const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:projectId", (params) => render(ProjectDetailPage(params), app));
router.on("/post/:postId", () => render(PostDetailPage, app));
router.on("/posts", () => render(PostsPage, app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();
// render(HomePage, app);
// npm i navigo --save
