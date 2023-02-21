import AdminProjectEditPage from "@/pages/admin/projects-edit";
import "bootstrap/dist/css/bootstrap.min.css";

import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import AdminProjectsPage from "./src/pages/admin/projects";
import AdminProjectsAddPage from "./src/pages/admin/projects-add";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import NotFoundPage from "./src/pages/not-found";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";
const app = document.querySelector("#app");

router.on("/admin/*", () => {}, {
    // nếu tao truy cập vào tất cả đường có /admin/
    before(done) {
        // const user = JSON.parse(localStorage.getItem("user")) | [];
        // if (!user) return (window.location.href = "/");
        // if (user && user.id != "1") return (window.location.href = "/login");
        done();
    },
});
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.on("/contact", () => render(ContactPage, app));
router.on("/projects", () => render(ProjectsPage, app));
router.on("/project/:id", ({ data }) => render(() => ProjectDetailPage(data), app));
router.on("/post/:id", () => render(PostDetailPage, app));
router.on("/posts", () => render(PostsPage, app));

router.on("/admin/projects", () => render(AdminProjectsPage, app));
router.on("/admin/projects/add", () => render(AdminProjectsAddPage, app));
router.on("/admin/projects/:id/edit", ({ data }) => render(() => AdminProjectEditPage(data), app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();
// npm i navigo --save
