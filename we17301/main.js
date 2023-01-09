import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
console.log(HomePage());
console.log(ContactPage());

const app = document.querySelector("#app");

app.innerHTML = ContactPage();
