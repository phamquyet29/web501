import Navigo from "navigo";
const router = new Navigo("/", { hash: true, linksSelector: "a" });

const render = (content, container) => {
    container.innerHTML = content(); // content is not a function
};
export { render, router };
