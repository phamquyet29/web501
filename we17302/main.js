import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import NotFoundPage from "./pages/not-found";
import { render, router } from "./lib";

const app = document.querySelector("#app");
router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.notFound(() => render(NotFoundPage, app));

router.resolve();
// render(HomePage, app);
// npm i navigo --save
