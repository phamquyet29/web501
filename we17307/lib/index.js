import Navigo from "navigo";
const router = new Navigo("/", { hash: true, linksSelector: "a" });

const render = (content, container) => {
    console.log(typeof content);
    container.innerHTML = content();
};
export { render, router };
