import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import { render } from "./lib";

console.log(HomePage());
console.log(ContactPage());

const app = document.querySelector("#app");

app.innerHTML = ContactPage();
