import Navigo from "navigo";
const router = new Navigo("/");

const render = (content, container) => {
    container.innerHTML = content();
};
export { render, router };
