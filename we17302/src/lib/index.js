import Navigo from "navigo";
const router = new Navigo("/", { hash: true, linksSelector: "a" });

const render = (content, container) => {
    console.log(typeof content);
    if (typeof content == "function") {
        // homePage
        container.innerHTML = content();
    } else {
        // `<h1>Home page</h1>`
        container.innerHTML = content;
    }
};
export { render, router };
