import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a", hash: true });
const render = (content, container) => {
    container.innerHTML = content();
};
export { render, router };
// npm i navigo --save
