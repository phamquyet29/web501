import Navigo from "navigo";
const router = new Navigo("/", { linksSelector: "a", hash: true });
const render = (content, container) => {
    console.log("type of content", typeof content);
    if (typeof content === "function") {
        container.innerHTML = content();
    } else {
        container.innerHTML = content;
    }
};

// content => ProjectsPage
// ProjectsPage(1)()
export { render, router };
// npm i navigo --save
