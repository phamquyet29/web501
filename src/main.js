const app = document.querySelector('#app');
import Homepage from "./pages/Homepage";
import { router,render } from "./utilities";



router.on("/", ()=>render(Homepage,app));
router.resolve();