import "bootstrap/dist/css/bootstrap.min.css";
import { render, router } from "./lib";
import AboutPage from "./pages/about";
import AdminAddProjectPage from "./pages/admin/projects-add";
import AdminProjectsPage from "./pages/admin/projects";
import ContactPage from "./pages/contact";
import DetailProjectPage from "./pages/detail-project";
import Homepage from "./pages/home";
import NotFoundPage from "./pages/not-found";
import PostsPage from "./pages/posts";
import ProjectsPage from "./pages/projects";

const app = document.querySelector("#app");

router.on("/", () => render(Homepage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data: { id } }) => render(() => DetailProjectPage(id), app));
router.on("/posts", () => render(PostsPage, app));

// Admin page
router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminAddProjectPage, app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();
