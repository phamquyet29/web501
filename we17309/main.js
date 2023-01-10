import { render, router } from "./lib";
import AboutPage from "./pages/about";
import HomePage from "./pages/home";
const app = document.querySelector("#app");

router.on("/", () => render(HomePage, app));
router.on("/about", () => render(AboutPage, app));
router.notFound(() => console.log("not found page"));

router.resolve();
