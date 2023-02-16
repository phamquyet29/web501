import "bootstrap/dist/css/bootstrap.min.css";
import { render, router } from "./lib";

import AboutPage from "./pages/about";
import AdminEditProjectsPage from "./pages/admin/products-edit";
import AdminProjectsPage from "./pages/admin/projects";
import AdminAddProjectsPage from "./pages/admin/projects-add";
import CategoryPage from "./pages/category";
import CategoryProjectDetailPage from "./pages/category-project-detail";
import ContactPage from "./pages/contact";
import HomePage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import PostDetailPage from "./pages/post-detail";
import PostsPage from "./pages/posts";
import ProjectDetailPage from "./pages/project-detail";
import ProjectsPage from "./pages/projects";
import RegisterPage from "./pages/register";

// alt + shift + o
// option + shift +
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/posts", () => render(PostsPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", (params) => render(() => ProjectDetailPage(params), app));
router.on("/posts", () => render(PostsPage, app));
router.on("/post/:id", () => render(PostDetailPage, app));
router.on("/category", () => render(CategoryPage, app));
router.on("/category/:id", ({ data }) => render(() => CategoryProjectDetailPage(data), app));

router.on("/register", () => render(RegisterPage, app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectsPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminEditProjectsPage(data), app));
router.notFound(() => render(NotFoundPage, app));

//npm i navigo --save
router.resolve();

// render(HomePage, app);
